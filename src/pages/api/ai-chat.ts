import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

export const POST: APIRoute = async ({ request, locals }) => {
  const envContext = locals.runtime?.env;
  const supabaseUrl = envContext?.PUBLIC_SUPABASE_URL || import.meta.env.PUBLIC_SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL || '';
  const supabaseKey = envContext?.SUPABASE_SERVICE_ROLE_KEY || import.meta.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  
  if (!supabaseUrl || !supabaseKey) {
    return new Response(JSON.stringify({ error: 'Supabase credentials missing' }), { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    const body = await request.json();
    const { messages, userId } = body;

    // Fetch user's birth chart from Supabase
    let chartContext = '';
    if (userId) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('birth_date, birth_time, birth_place, full_name')
        .eq('id', userId)
        .single();

      const { data: chart } = await supabase
        .from('kundali_charts')
        .select('chart_data')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (profile) {
        chartContext = `
USER BIRTH DATA:
Name: ${profile.full_name || 'Not provided'}
Date of Birth: ${profile.birth_date || 'Not provided'}
Time of Birth: ${profile.birth_time || 'Not provided'}
Place of Birth: ${profile.birth_place || 'Not provided'}
${chart?.chart_data ? `
BIRTH CHART DATA:
Lagna (Ascendant): ${(chart.chart_data as any).lagna || 'Unknown'}
Moon Sign (Rashi): ${(chart.chart_data as any).moonSign || 'Unknown'}
Sun Sign: ${(chart.chart_data as any).sunSign || 'Unknown'}
Current Dasha: ${(chart.chart_data as any).currentDasha || 'Unknown'}
Planets: ${JSON.stringify((chart.chart_data as any).planets || {})}
` : ''}`;
      }
    }

    const systemPrompt = `You are AI Astrology's expert AI astrologer with deep knowledge of Vedic and Western astrology, tarot, numerology, and Panchang. You give warm, specific, insightful readings tailored to this specific user.

IMPORTANT RULES:
- Always use the user's actual birth data when answering. Never give generic answers.
- Reference specific planetary positions from their chart when relevant.
- Mention their Lagna, Moon sign, and current Dasha period when answering life questions.
- Be warm, encouraging, and specific — not vague or generic.
- If the user has not provided birth data, gently ask for it to give a personalized reading.
- Never claim to predict the future with certainty — frame insights as tendencies and energies.
- Keep responses conversational, 3–5 paragraphs maximum unless a detailed chart reading is requested.

${chartContext || 'No birth data provided yet. Ask the user to share their birth details for a personalized reading.'}`;

    const geminiKey = envContext?.GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;
    if (!geminiKey) {
      return new Response(JSON.stringify({ error: 'Gemini API key missing' }), { status: 500 });
    }

    // Call Gemini API with streaming
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:streamGenerateContent?key=${geminiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: messages.map((m: { role: string; content: string }) => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }]
          })),
          generationConfig: { maxOutputTokens: 1024, temperature: 0.8 }
        })
      }
    );

    // Stream the response back
    return new Response(geminiResponse.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
      }
    });
  } catch (error) {
    console.error('Error in AI Chat API:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
};
