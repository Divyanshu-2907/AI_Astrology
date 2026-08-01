// Ashtakoot (Kundali Matching) Calculation Engine

const NAKSHATRAS = [
    "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", 
    "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
    "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
    "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha",
    "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
];

const RASHIS = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", 
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const RASHI_LORDS = [
    "Mars", "Venus", "Mercury", "Moon", "Sun", "Mercury", 
    "Venus", "Mars", "Jupiter", "Saturn", "Saturn", "Jupiter"
];

const RASHI_VARNA = [
    1, 2, 3, 0, // Aries=Kshatriya(1), Taurus=Vaishya(2), Gemini=Shudra(3), Cancer=Brahmin(0)
    1, 2, 3, 0, 
    1, 2, 3, 0
]; // 0=Brahmin(Highest), 1=Kshatriya, 2=Vaishya, 3=Shudra

const RASHI_VASHYA = [
    "Quadruped", "Quadruped", "Biped", "Water", "Wild", "Biped",
    "Biped", "Insect", "Biped", "Quadruped", "Biped", "Water"
];

// Nadi: 0=Adi, 1=Madhya, 2=Antya
const NAKSHATRA_NADI = [
    0, 1, 2, 2, 1, 0, 0, 1, 2, 2, 1, 0, 0, 1, 2, 2, 1, 0, 0, 1, 2, 2, 1, 0, 0, 1, 2
];

// Gana: 0=Deva, 1=Manushya, 2=Rakshasa
const NAKSHATRA_GANA = [
    0, 1, 2, 1, 0, 1, 0, 0, 2, 2, 1, 1, 0, 2, 0, 2, 0, 2, 2, 1, 1, 0, 2, 2, 1, 1, 0
];

// Yoni (Animal): Simplified for now to a string
const NAKSHATRA_YONI = [
    "Horse", "Elephant", "Sheep", "Serpent", "Serpent", "Dog", "Cat", "Goat", "Cat", "Rat",
    "Rat", "Cow", "Buffalo", "Tiger", "Buffalo", "Tiger", "Deer", "Deer", "Dog", "Monkey",
    "Mongoose", "Monkey", "Lion", "Horse", "Lion", "Cow", "Elephant"
];

// Friendship matrix: 1=Friend, 0.5=Neutral, 0=Enemy
const PLANET_FRIENDSHIP: Record<string, Record<string, number>> = {
    "Sun": { "Sun": 1, "Moon": 1, "Mars": 1, "Mercury": 0.5, "Jupiter": 1, "Venus": 0, "Saturn": 0 },
    "Moon": { "Sun": 1, "Moon": 1, "Mars": 0.5, "Mercury": 1, "Jupiter": 0.5, "Venus": 0.5, "Saturn": 0.5 },
    "Mars": { "Sun": 1, "Moon": 1, "Mars": 1, "Mercury": 0, "Jupiter": 1, "Venus": 0.5, "Saturn": 0.5 },
    "Mercury": { "Sun": 1, "Moon": 0, "Mars": 0.5, "Mercury": 1, "Jupiter": 0.5, "Venus": 1, "Saturn": 0.5 },
    "Jupiter": { "Sun": 1, "Moon": 1, "Mars": 1, "Mercury": 0, "Jupiter": 1, "Venus": 0, "Saturn": 0.5 },
    "Venus": { "Sun": 0, "Moon": 0, "Mars": 0.5, "Mercury": 1, "Jupiter": 0.5, "Venus": 1, "Saturn": 1 },
    "Saturn": { "Sun": 0, "Moon": 0, "Mars": 0, "Mercury": 1, "Jupiter": 0.5, "Venus": 1, "Saturn": 1 }
};

const yoniCompatibility = (y1: string, y2: string): number => {
    if (y1 === y2) return 4;
    // Simplified enemy pairs: Cow-Tiger, Elephant-Lion, Horse-Buffalo, Dog-Deer, Rat-Cat, Serpent-Mongoose, Monkey-Sheep
    const enemies = [
        ["Cow", "Tiger"], ["Elephant", "Lion"], ["Horse", "Buffalo"], 
        ["Dog", "Deer"], ["Rat", "Cat"], ["Serpent", "Mongoose"], ["Monkey", "Sheep"]
    ];
    for (const [a, b] of enemies) {
        if ((y1 === a && y2 === b) || (y1 === b && y2 === a)) return 0; // Sworn enemy
    }
    return 2; // Average/Neutral
};

const vashyaScore = (v1: string, v2: string): number => {
    if (v1 === v2) return 2;
    if (v1 === "Water" && v2 === "Water") return 2;
    if ((v1 === "Biped" && v2 === "Quadruped") || (v2 === "Biped" && v1 === "Quadruped")) return 1;
    if ((v1 === "Biped" && v2 === "Water") || (v2 === "Biped" && v1 === "Water")) return 1;
    if ((v1 === "Biped" && v2 === "Insect") || (v2 === "Biped" && v1 === "Insect")) return 0.5;
    if ((v1 === "Water" && v2 === "Quadruped") || (v2 === "Water" && v1 === "Quadruped")) return 1;
    if ((v1 === "Wild" || v2 === "Wild")) return 0; // Wild generally doesn't get along well with others
    return 0.5;
};

export const calculateAshtakoot = (boyMoonLon: number, girlMoonLon: number, boyMarsHouse: number, girlMarsHouse: number, lang: string = 'en') => {
    
    // 1. Determine Nakshatra and Rashi
    const bNakIndex = Math.floor(boyMoonLon / 13.333333);
    const bRashiIndex = Math.floor(boyMoonLon / 30);
    const gNakIndex = Math.floor(girlMoonLon / 13.333333);
    const gRashiIndex = Math.floor(girlMoonLon / 30);

    // 1. Varna (1 point max)
    let varna = 0;
    if (RASHI_VARNA[bRashiIndex] <= RASHI_VARNA[gRashiIndex]) varna = 1;

    // 2. Vashya (2 points max)
    const vashya = vashyaScore(RASHI_VASHYA[bRashiIndex], RASHI_VASHYA[gRashiIndex]);

    // 3. Tara (3 points max)
    const bToG = ((gNakIndex - bNakIndex + 27) % 27) + 1;
    const gToB = ((bNakIndex - gNakIndex + 27) % 27) + 1;
    const bToGBad = [3, 5, 7].includes(bToG % 9);
    const gToBBad = [3, 5, 7].includes(gToB % 9);
    let tara = 3;
    if (bToGBad && gToBBad) tara = 0;
    else if (bToGBad || gToBBad) tara = 1.5;

    // 4. Yoni (4 points max)
    const yoni = yoniCompatibility(NAKSHATRA_YONI[bNakIndex], NAKSHATRA_YONI[gNakIndex]);

    // 5. Graha Maitri (5 points max)
    const bLord = RASHI_LORDS[bRashiIndex];
    const gLord = RASHI_LORDS[gRashiIndex];
    let maitri = 5;
    const bToGFriend = PLANET_FRIENDSHIP[bLord]?.[gLord] ?? 0.5;
    const gToBFriend = PLANET_FRIENDSHIP[gLord]?.[bLord] ?? 0.5;
    if (bToGFriend === 1 && gToBFriend === 1) maitri = 5;
    else if ((bToGFriend === 1 && gToBFriend === 0.5) || (bToGFriend === 0.5 && gToBFriend === 1)) maitri = 4;
    else if (bToGFriend === 0.5 && gToBFriend === 0.5) maitri = 3;
    else if ((bToGFriend === 1 && gToBFriend === 0) || (bToGFriend === 0 && gToBFriend === 1)) maitri = 1;
    else if ((bToGFriend === 0.5 && gToBFriend === 0) || (bToGFriend === 0 && gToBFriend === 0.5)) maitri = 0.5;
    else maitri = 0;

    // 6. Gana (6 points max)
    const bGana = NAKSHATRA_GANA[bNakIndex];
    const gGana = NAKSHATRA_GANA[gNakIndex];
    let gana = 6;
    if (bGana === gGana) gana = 6;
    else if (bGana === 0 && gGana === 1) gana = 6;
    else if (bGana === 1 && gGana === 0) gana = 5;
    else if (bGana === 2 || gGana === 2) gana = 0; // Rakshasa clash
    else gana = 1;

    // 7. Bhakoot (7 points max)
    const distance = ((gRashiIndex - bRashiIndex + 12) % 12) + 1;
    let bhakoot = 7;
    // 2/12, 5/9, 6/8 are considered inauspicious
    if ([2, 12, 5, 9, 6, 8].includes(distance)) bhakoot = 0;

    // 8. Nadi (8 points max)
    let nadi = 8;
    if (NAKSHATRA_NADI[bNakIndex] === NAKSHATRA_NADI[gNakIndex]) nadi = 0; // Nadi Dosha

    const total = varna + vashya + tara + yoni + maitri + gana + bhakoot + nadi;

    // Mangal Dosha Logic
    const mangalHouses = [1, 4, 7, 8, 12];
    const bMangalik = mangalHouses.includes(boyMarsHouse);
    const gMangalik = mangalHouses.includes(girlMarsHouse);
    let mangalStatus = lang === 'hi' ? "कोई मंगल दोष नहीं" : "No Mangal Dosha";
    if (bMangalik && gMangalik) mangalStatus = lang === 'hi' ? "दोनों मांगलिक हैं (दोष रद्द)" : "Both Mangalik (Dosha Cancelled)";
    else if (bMangalik) mangalStatus = lang === 'hi' ? "लड़का मांगलिक है (ध्यान दें)" : "Boy is Mangalik (Caution)";
    else if (gMangalik) mangalStatus = lang === 'hi' ? "लड़की मांगलिक है (ध्यान दें)" : "Girl is Mangalik (Caution)";

    let verdict = lang === 'hi' ? "औसत मेल" : "Average Match";
    if (total >= 28) verdict = lang === 'hi' ? "उत्कृष्ट मेल! यह संयोजन गहरे आध्यात्मिक और मानसिक संरेखण के साथ मजबूत दीर्घकालिक क्षमता दिखाता है।" : "Excellent Match! This combination shows strong long-term potential with deep spiritual and mental alignment.";
    else if (total >= 18) verdict = lang === 'hi' ? "अच्छा मेल। संबंध काम कर सकता है लेकिन कुछ समझौते की आवश्यकता हो सकती है।" : "Good Match. The relationship can work but may require some compromise.";
    else verdict = lang === 'hi' ? "खराब मेल। ज्योतिषीय रूप से अनुशंसित नहीं है।" : "Poor Match. Not astrologically recommended.";

    if (nadi === 0) verdict += lang === 'hi' ? " चेतावनी: नाड़ी दोष मौजूद है।" : " Warning: Nadi Dosha present.";

    return {
        total,
        max: 36,
        verdict,
        factors: [
            { name: lang === 'hi' ? "वर्ण" : "Varna", score: varna, max: 1, desc: lang === 'hi' ? "आध्यात्मिक अनुकूलता" : "Spiritual compatibility" },
            { name: lang === 'hi' ? "वश्य" : "Vashya", score: vashya, max: 2, desc: lang === 'hi' ? "प्रभुत्व और आकर्षण" : "Dominance and attraction" },
            { name: lang === 'hi' ? "तारा" : "Tara", score: tara, max: 3, desc: lang === 'hi' ? "भाग्य अनुकूलता" : "Destiny compatibility" },
            { name: lang === 'hi' ? "योनि" : "Yoni", score: yoni, max: 4, desc: lang === 'hi' ? "प्रकृति और वृत्ति" : "Nature and instinct" },
            { name: lang === 'hi' ? "ग्रह मैत्री" : "Graha Maitri", score: maitri, max: 5, desc: lang === 'hi' ? "मानसिक अनुकूलता" : "Mental compatibility" },
            { name: lang === 'hi' ? "गण" : "Gana", score: gana, max: 6, desc: lang === 'hi' ? "स्वभाव" : "Temperament" },
            { name: lang === 'hi' ? "भकूट" : "Bhakoot", score: bhakoot, max: 7, desc: lang === 'hi' ? "प्रेम और भावनात्मक सद्भाव" : "Love and emotional harmony" },
            { name: lang === 'hi' ? "नाड़ी" : "Nadi", score: nadi, max: 8, desc: lang === 'hi' ? "स्वास्थ्य और संतान" : "Health and progeny" }
        ],
        doshas: [
            { name: lang === 'hi' ? "मंगल दोष" : "Mangal Dosha", status: mangalStatus }
        ]
    };
};
