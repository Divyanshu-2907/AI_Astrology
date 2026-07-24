import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.GEMINI_API_KEY || "placeholder";
const genAI = new GoogleGenerativeAI(apiKey);

export const generateHoroscope = async (sign: string, timeframe: 'today' | 'weekly' | 'monthly'): Promise<string> => {
    // If no API key, return a placeholder to avoid breaking the build
    if (apiKey === "placeholder") {
        return `This is a sample ${timeframe} horoscope for ${sign}. The stars indicate a period of reflection and growth. Your ruling planet is moving favorably, bringing new opportunities in your personal and professional life. Take time to balance your energy.`;
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const prompt = `Write a 3-4 paragraph ${timeframe} horoscope for ${sign}. Be warm, specific, and insightful. Include references to planetary movements. Do not include markdown formatting or titles, just the paragraphs.`;
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (e) {
        console.error("Gemini API Error:", e);
        return `The stars are currently clouded for ${sign}. Please check back later.`;
    }
};
