export const lagnaGemstones: Record<string, { stone: string, hiStone: string, planet: string, hiPlanet: string, benefit: string, hiBenefit: string }> = {
    "Aries": { stone: "Red Coral", hiStone: "लाल मूंगा", planet: "Mars", hiPlanet: "मंगल", benefit: "Boosts courage, energy, and vitality.", hiBenefit: "साहस, ऊर्जा और जीवन शक्ति को बढ़ाता है।" },
    "Taurus": { stone: "Diamond / White Sapphire", hiStone: "हीरा / सफेद पुखराज", planet: "Venus", hiPlanet: "शुक्र", benefit: "Attracts wealth, luxury, and artistic success.", hiBenefit: "धन, विलासिता और कलात्मक सफलता को आकर्षित करता है।" },
    "Gemini": { stone: "Emerald", hiStone: "पन्ना", planet: "Mercury", hiPlanet: "बुध", benefit: "Enhances communication, intellect, and business.", hiBenefit: "संचार, बुद्धि और व्यापार को बढ़ाता है।" },
    "Cancer": { stone: "Pearl", hiStone: "मोती", planet: "Moon", hiPlanet: "चंद्रमा", benefit: "Provides emotional stability, peace, and mental clarity.", hiBenefit: "भावनात्मक स्थिरता, शांति और मानसिक स्पष्टता प्रदान करता है।" },
    "Leo": { stone: "Ruby", hiStone: "माणिक", planet: "Sun", hiPlanet: "सूर्य", benefit: "Brings leadership, authority, and professional growth.", hiBenefit: "नेतृत्व, अधिकार और पेशेवर विकास लाता है।" },
    "Virgo": { stone: "Emerald", hiStone: "पन्ना", planet: "Mercury", hiPlanet: "बुध", benefit: "Improves analytical skills, health, and academic success.", hiBenefit: "विश्लेषणात्मक कौशल, स्वास्थ्य और शैक्षणिक सफलता में सुधार करता है।" },
    "Libra": { stone: "Diamond / Opal", hiStone: "हीरा / ओपल", planet: "Venus", hiPlanet: "शुक्र", benefit: "Harmonizes relationships, brings prosperity and charm.", hiBenefit: "रिश्तों में सामंजस्य स्थापित करता है, समृद्धि और आकर्षण लाता है।" },
    "Scorpio": { stone: "Red Coral", hiStone: "लाल मूंगा", planet: "Mars", hiPlanet: "मंगल", benefit: "Increases willpower, protection, and physical strength.", hiBenefit: "इच्छाशक्ति, सुरक्षा और शारीरिक शक्ति को बढ़ाता है।" },
    "Sagittarius": { stone: "Yellow Sapphire", hiStone: "पुखराज", planet: "Jupiter", hiPlanet: "बृहस्पति", benefit: "Attracts fortune, wisdom, and spiritual growth.", hiBenefit: "भाग्य, ज्ञान और आध्यात्मिक विकास को आकर्षित करता है।" },
    "Capricorn": { stone: "Blue Sapphire", hiStone: "नीलम", planet: "Saturn", hiPlanet: "शनि", benefit: "Brings discipline, career success, and wards off obstacles.", hiBenefit: "अनुशासन, करियर में सफलता लाता है और बाधाओं को दूर करता है।" },
    "Aquarius": { stone: "Blue Sapphire", hiStone: "नीलम", planet: "Saturn", hiPlanet: "शनि", benefit: "Enhances innovation, perseverance, and social influence.", hiBenefit: "नवाचार, दृढ़ता और सामाजिक प्रभाव को बढ़ाता है।" },
    "Pisces": { stone: "Yellow Sapphire", hiStone: "पुखराज", planet: "Jupiter", hiPlanet: "बृहस्पति", benefit: "Provides intuition, spiritual peace, and financial stability.", hiBenefit: "अंतर्ज्ञान, आध्यात्मिक शांति और वित्तीय स्थिरता प्रदान करता है।" }
};

export const getGemstone = (lagna: string, lang: string = 'en') => {
    // Basic mapping for Hindi lagna names to English for the lookup
    const lagnaMap: Record<string, string> = {
        "मेष": "Aries", "वृषभ": "Taurus", "मिथुन": "Gemini", "कर्क": "Cancer",
        "सिंह": "Leo", "कन्या": "Virgo", "तुला": "Libra", "वृश्चिक": "Scorpio",
        "धनु": "Sagittarius", "मकर": "Capricorn", "कुंभ": "Aquarius", "मीन": "Pisces"
    };
    
    const englishLagna = lagnaMap[lagna] || lagna;
    const stoneData = lagnaGemstones[englishLagna];
    
    if (!stoneData) return null;
    
    return {
        stone: lang === 'hi' ? stoneData.hiStone : stoneData.stone,
        planet: lang === 'hi' ? stoneData.hiPlanet : stoneData.planet,
        benefit: lang === 'hi' ? stoneData.hiBenefit : stoneData.benefit
    };
};
