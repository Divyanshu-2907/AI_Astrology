export const zodiacSigns = [
    "Aries", "Taurus", "Gemini", "Cancer",
    "Leo", "Virgo", "Libra", "Scorpio",
    "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const elements = {
    Aries: "Fire", Taurus: "Earth", Gemini: "Air", Cancer: "Water",
    Leo: "Fire", Virgo: "Earth", Libra: "Air", Scorpio: "Water",
    Sagittarius: "Fire", Capricorn: "Earth", Aquarius: "Air", Pisces: "Water"
};

export const getCompatibility = (sign1: string, sign2: string, lang: string = 'en') => {
    // Simple logic based on elemental compatibility for demonstration.
    // In a real app, this would be a full 144-combination lookup table.
    
    const element1 = elements[sign1 as keyof typeof elements];
    const element2 = elements[sign2 as keyof typeof elements];
    
    let score = 50;
    let analysis = "You have a balanced connection with potential for growth.";
    
        if (element1 === element2) {
        score = 90;
        analysis = lang === 'hi' 
            ? `दो ${element1} राशियों के रूप में, आप एक-दूसरे को परोक्ष रूप से समझते हैं। आपका साझा तत्व एक प्राकृतिक सामंजस्य और गहरा सहज संबंध बनाता है।` 
            : `As two ${element1} signs, you understand each other implicitly. Your shared element creates a natural harmony and deep intuitive connection.`;
    } else if (
        (element1 === "Fire" && element2 === "Air") || (element1 === "Air" && element2 === "Fire") ||
        (element1 === "Earth" && element2 === "Water") || (element1 === "Water" && element2 === "Earth")
    ) {
        score = 85;
        analysis = lang === 'hi'
            ? `आपके तत्व (${element1} और ${element2}) अत्यधिक अनुकूल हैं। आप एक दूसरे को पूरी तरह से संतुलित और उत्तेजित करते हैं, एक गतिशील और सहायक संबंध बनाते हैं।`
            : `Your elements (${element1} and ${element2}) are highly compatible. You balance and stimulate each other perfectly, creating a dynamic and supportive relationship.`;
    } else if (
        (element1 === "Fire" && element2 === "Water") || (element1 === "Water" && element2 === "Fire") ||
        (element1 === "Earth" && element2 === "Air") || (element1 === "Air" && element2 === "Earth")
    ) {
        score = 60;
        analysis = lang === 'hi'
            ? `आपके तत्वों (${element1} और ${element2}) को एक-दूसरे को समझने के लिए प्रयास की आवश्यकता होती है। यद्यपि चुनौतीपूर्ण है, यदि आप दोनों धैर्यवान रहें तो यह घर्षण अपार व्यक्तिगत विकास को जन्म दे सकता है।`
            : `Your elements (${element1} and ${element2}) require effort to understand each other. While challenging, this friction can lead to immense personal growth if you both remain patient.`;
    } else {
        score = 70;
        analysis = lang === 'hi'
            ? `आपके तत्व (${element1} और ${element2}) जीवन के प्रति अलग दृष्टिकोण रखते हैं, लेकिन यदि आप खुला संचार बनाए रखते हैं तो आप एक-दूसरे के अद्वितीय दृष्टिकोण से बहुत कुछ सीख सकते हैं।`
            : `Your elements (${element1} and ${element2}) approach life differently, but you can learn a lot from each other's unique perspectives if you maintain open communication.`;
    }
    
    return {
        score,
        love: { score: score + (Math.random() * 10 - 5), analysis: lang === 'hi' ? "प्यार में प्रयास की आवश्यकता होती है लेकिन यह आशाजनक है।" : "Love requires effort but holds promise." },
        friendship: { score: score + 5, analysis: lang === 'hi' ? "आप आपसी सम्मान की एक ठोस नींव बना सकते हैं।" : "You can build a solid foundation of mutual respect." },
        communication: { score: score - 5, analysis: lang === 'hi' ? "संचार शैलियाँ भिन्न हो सकती हैं; सक्रिय रूप से सुनना महत्वपूर्ण है।" : "Communication styles may differ; active listening is key." },
        overall: analysis,
        challenges: lang === 'hi' ? [
            "विभिन्न भावनात्मक जरूरतों का सम्मान करना",
            "विवादों में समान आधार खोजना",
            "एकजुटता के साथ व्यक्तिगत स्थान को संतुलित करना"
        ] : [
            "Respecting different emotional needs",
            "Finding common ground in conflicts",
            "Balancing personal space with togetherness"
        ]
    };
};
