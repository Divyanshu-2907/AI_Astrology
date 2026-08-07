import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateHoroscope = async (sign: string, timeframe: 'today' | 'weekly' | 'monthly', envContext?: any): Promise<string> => {
    // 1. Resolve API Key
    const apiKey = envContext?.GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;
    
    if (!apiKey || apiKey === "placeholder") {
        throw new Error("GEMINI_API_KEY is missing or invalid.");
    }

    // 2. Setup Caching logic if KV is available
    const cache = envContext?.ASTRO_BLOG_CACHE;
    const dateStr = new Date().toISOString().split('T')[0];
    const cacheKey = `horoscope:${sign}:${timeframe}:${dateStr}`;
    
    if (cache) {
        try {
            const existing = await cache.get(cacheKey);
            if (existing) return existing;
        } catch (e) {
            console.error("Cache read error:", e);
        }
    }

    // 3. Generate Output
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    
    // Inject current date to force uniqueness over time
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const prompt = `Write a 3-4 paragraph ${timeframe} horoscope for ${sign}. Today is ${today}. Be warm, specific, and insightful. Include references to current planetary movements impacting ${sign}. Ensure this reading is unique and specific to ${sign} and this time period. Do not include markdown formatting or titles, just the paragraphs.`;
    
    let text = "";
    try {
        const result = await model.generateContent(prompt);
        text = result.response.text();
    } catch (e) {
        console.error(`Gemini API Error for ${sign}:`, e);
        throw new Error(`Failed to generate horoscope from Gemini API for ${sign}.`);
    }
    
    // 4. Save to Cache
    if (cache && text) {
        try {
            // Cache daily for 24h, weekly for 7d, monthly for 30d
            const ttl = timeframe === 'today' ? 86400 : (timeframe === 'weekly' ? 604800 : 2592000);
            await cache.put(cacheKey, text, { expirationTtl: ttl });
        } catch (e) {
            console.error("Cache write error:", e);
        }
    }

    return text;
};
