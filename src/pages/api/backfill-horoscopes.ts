import type { APIRoute } from 'astro';

const signs = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces'];
const hindiSignNames: Record<string, string> = {
  'aries': 'मेष', 'taurus': 'वृषभ', 'gemini': 'मिथुन', 'cancer': 'कर्क',
  'leo': 'सिंह', 'virgo': 'कन्या', 'libra': 'तुला', 'scorpio': 'वृश्चिक',
  'sagittarius': 'धनु', 'capricorn': 'मकर', 'aquarius': 'कुंभ', 'pisces': 'मीन'
};

import { env } from 'cloudflare:workers';

export const GET: APIRoute = async ({ request, locals }) => {
  if (!env || !env.ASTRO_BLOG_CACHE || !env.AI) {
    return new Response(JSON.stringify({ error: "Missing Cloudflare bindings (AI/KV)" }), { status: 500 });
  }
  
  const cache = env.ASTRO_BLOG_CACHE;
  const ai = env.AI;

  const url = new URL(request.url);
  const offset = parseInt(url.searchParams.get('offset') || '0');

  const today = new Date();
  let generatedCount = 0;
  let skippedCount = 0;
  let errors = [];

  try {
    const date = new Date(today);
    date.setDate(date.getDate() - offset);
      const dateStr = date.toISOString().split('T')[0];
      const displayDateEn = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      const displayDateHi = date.toLocaleDateString('hi-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

      for (const sign of signs) {
        // English
        const keyEn = `blog:${sign}:${dateStr}`;
        const existingEn = await cache.get(keyEn);
        if (!existingEn) {
          const promptEn = `Write a daily astrology horoscope for the zodiac sign ${sign} for today (${displayDateEn}).
You must output ONLY valid JSON matching this exact structure:
{
  "seo_title": "Under 60 chars, include ${sign} and 'Horoscope Today'",
  "meta_description": "150-160 chars summary for search engines",
  "overview": "2-3 sentences specific to ${sign}'s personality traits. Do NOT use generic filler.",
  "love": "80-100 words about love, specific to ${sign} and this date.",
  "career": "80-100 words about career, specific to ${sign} and this date.",
  "health": "80-100 words about health, specific to ${sign} and this date.",
  "lucky_number": "A number",
  "lucky_color": "A color",
  "lucky_time": "A specific time like 2:00 PM",
  "faqs": [
    { "question": "...", "answer": "40-60 words answer" }
  ]
}`;
          const resEn = await ai.run('@cf/meta/llama-3.1-8b-instruct-fp8', {
            max_tokens: 2048,
            messages: [
              { role: 'system', content: 'You are an expert astrologer. You only respond in pure JSON format without markdown blocks.' },
              { role: 'user', content: promptEn }
            ]
          });
          let responseTextEn = resEn.response.replace(/```json/g, '').replace(/```/g, '').trim();
          await cache.put(keyEn, JSON.stringify(JSON.parse(responseTextEn)));
          generatedCount++;
        } else {
          skippedCount++;
        }

        // Hindi
        const signHi = hindiSignNames[sign];
        const keyHi = `blog:hi:${sign}:${dateStr}`;
        const existingHi = await cache.get(keyHi);
        if (!existingHi) {
          const promptHi = `Write a daily astrology horoscope for the zodiac sign ${sign} (${signHi}) for today (${displayDateHi}) in Hindi.
Translate naturally as a native Hindi astrology writer would, not literal word-for-word translation.
You must output ONLY valid JSON matching this exact structure:
{
  "seo_title": "Under 60 chars in Hindi, include ${signHi} and 'आज का राशिफल'",
  "meta_description": "150-160 chars summary for search engines in Hindi",
  "overview": "2-3 sentences specific to ${signHi}'s personality traits in Hindi. Do NOT use generic filler.",
  "love": "80-100 words about love in Hindi.",
  "career": "80-100 words about career in Hindi.",
  "health": "80-100 words about health in Hindi.",
  "lucky_number": "A number",
  "lucky_color": "A color in Hindi",
  "lucky_time": "A specific time like 2:00 PM",
  "faqs": [
    { "question": "... (in Hindi)", "answer": "40-60 words answer in Hindi" }
  ]
}`;
          const resHi = await ai.run('@cf/meta/llama-3.1-8b-instruct-fp8', {
            max_tokens: 2048,
            messages: [
              { role: 'system', content: 'You are an expert Hindi astrologer. You only respond in pure JSON format without markdown blocks.' },
              { role: 'user', content: promptHi }
            ]
          });
          let responseTextHi = resHi.response.replace(/```json/g, '').replace(/```/g, '').trim();
          await cache.put(keyHi, JSON.stringify(JSON.parse(responseTextHi)));
          generatedCount++;
        } else {
          skippedCount++;
        }
      }
      
      // Save sentinel keys so index.astro knows this day is fully generated
      await cache.put(`${dateStr}-en`, 'true');
      await cache.put(`${dateStr}-hi`, 'true');
  } catch (err: any) {
    console.error("Backfill error", err);
    errors.push(err.message);
  }

  const nextOffset = offset + 1;
  return new Response(JSON.stringify({ 
    status: 'success', 
    dateProcessed: new Date(today.setDate(today.getDate() - offset)).toISOString().split('T')[0],
    generatedCount, 
    skippedCount, 
    errors,
    nextStep: nextOffset < 15 ? `Visit /api/backfill-horoscopes?offset=${nextOffset} to do the next day` : 'Done with 15 days!'
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
