// Numerology calculation logic (Pure JS)

export const reduceNumber = (num: number): number => {
    if (num === 11 || num === 22 || num === 33) return num; // Master numbers
    if (num <= 9) return num;
    const sum = String(num).split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    return reduceNumber(sum);
};

export const calculateLifePath = (dob: string): number => {
    // dob format: YYYY-MM-DD
    if (!dob) return 0;
    const parts = dob.split('-');
    if (parts.length !== 3) return 0;
    
    const year = reduceNumber(parseInt(parts[0], 10));
    const month = reduceNumber(parseInt(parts[1], 10));
    const day = reduceNumber(parseInt(parts[2], 10));
    
    return reduceNumber(year + month + day);
};

const letterValues: Record<string, number> = {
    A: 1, J: 1, S: 1,
    B: 2, K: 2, T: 2,
    C: 3, L: 3, U: 3,
    D: 4, M: 4, V: 4,
    E: 5, N: 5, W: 5,
    F: 6, O: 6, X: 6,
    G: 7, P: 7, Y: 7,
    H: 8, Q: 8, Z: 8,
    I: 9, R: 9
};

const getNumberForString = (str: string): number => {
    const sum = str.toUpperCase().split('').reduce((acc, char) => {
        return acc + (letterValues[char] || 0);
    }, 0);
    return reduceNumber(sum);
};

export const calculateDestiny = (name: string): number => {
    const parts = name.split(' ');
    const sum = parts.reduce((acc, part) => acc + getNumberForString(part), 0);
    return reduceNumber(sum);
};

export const calculateSoulUrge = (name: string): number => {
    const vowels = name.toUpperCase().replace(/[^AEIOU]/g, '');
    return getNumberForString(vowels);
};

export const calculatePersonality = (name: string): number => {
    const consonants = name.toUpperCase().replace(/[AEIOU\s\W]/g, '');
    return getNumberForString(consonants);
};

export const getNumberMeaning = (num: number, lang: string = 'en') => {
    if (lang === 'hi') {
        const hiMeanings: Record<number, { title: string, meaning: string, strengths: string, challenges: string }> = {
            1: {
                title: 'नेता (The Leader)',
                meaning: 'अंक 1 स्वतंत्रता, मौलिकता और नेतृत्व का प्रतिनिधित्व करता है। यह वह मूल शक्ति है जिससे अन्य सभी अंक निर्मित होते हैं।',
                strengths: 'महत्वाकांक्षी, साहसी, अभिनव, आत्मनिर्भर।',
                challenges: 'आक्रामक, हावी होने वाला, आवेगी, स्वार्थी।'
            },
            2: {
                title: 'शांतिदूत (The Peacemaker)',
                meaning: 'अंक 2 सहयोगी, कूटनीतिक और संवेदनशील है। यह सभी चीजों में सामंजस्य और संतुलन चाहता है।',
                strengths: 'सहज, सहायक, सहानुभूतिपूर्ण, विस्तार-उन्मुख।',
                challenges: 'अत्यधिक संवेदनशील, अनिर्णायक, निर्भर।'
            },
            3: {
                title: 'संचारक (The Communicator)',
                meaning: 'अंक 3 अभिव्यंजक, रचनात्मक और आनंदमय है। यह रचनात्मक ऊर्जा और जीने के आनंद का प्रतिनिधित्व करता है।',
                strengths: 'कल्पनाशील, आशावादी, आकर्षक, प्रेरक।',
                challenges: 'बिखरा हुआ, अनफोकस्ड, सतही।'
            },
            4: {
                title: 'निर्माता (The Builder)',
                meaning: 'अंक 4 व्यावहारिक, मेहनती और जमीन से जुड़ा है। यह भविष्य के लिए एक ठोस आधार प्रदान करता है।',
                strengths: 'व्यवस्थित, भरोसेमंद, तार्किक, धैर्यवान।',
                challenges: 'कठोर, जिद्दी, अत्यधिक गंभीर।'
            },
            5: {
                title: 'साहसी (The Adventurer)',
                meaning: 'अंक 5 गतिशील, स्वतंत्रता-प्रेमी और अनुकूलनीय है। यह परिवर्तन और नए अनुभवों पर पनपता है।',
                strengths: 'बहुमुखी, जिज्ञासु, दूरदर्शी, करिश्माई।',
                challenges: 'बेचैन, असंगत, आवेगी।'
            },
            6: {
                title: 'पोषणकर्ता (The Nurturer)',
                meaning: 'अंक 6 जिम्मेदार, प्यार करने वाला और सुरक्षात्मक है। यह सभी अंकों में सबसे घरेलू और सामंजस्यपूर्ण है।',
                strengths: 'दयालु, विश्वसनीय, सहायक, रोमांटिक।',
                challenges: 'अति-अधिकारपूर्ण, आत्म-धर्मी, चिंतित।'
            },
            7: {
                title: 'साधक (The Seeker)',
                meaning: 'अंक 7 विश्लेषणात्मक, बौद्धिक और आध्यात्मिक है। यह सत्य और गहरी समझ चाहता है।',
                strengths: 'विश्लेषणात्मक, सहज, दार्शनिक, चौकस।',
                challenges: 'अलग-थलग, निंदक, पूर्णतावादी।'
            },
            8: {
                title: 'पावरहाउस (The Powerhouse)',
                meaning: 'अंक 8 महत्वाकांक्षी, आधिकारिक और लक्ष्य-उन्मुख है। यह भौतिक सफलता और निपुणता से संबंधित है।',
                strengths: 'प्रेरित, आत्मविश्वासी, व्यवस्थित, कुशल।',
                challenges: 'भौतिकवादी, नियंत्रण करने वाला, निर्मम।'
            },
            9: {
                title: 'मानवतावादी (The Humanitarian)',
                meaning: 'अंक 9 दयालु, परोपकारी और सार्वभौमिक है। यह ज्ञान की परिणति का प्रतिनिधित्व करता है।',
                strengths: 'निःस्वार्थ, सहज, सहिष्णु, आदर्शवादी।',
                challenges: 'नाटकीय, अत्यधिक भावुक, डिस्कनेक्टेड।'
            },
            11: {
                title: 'अंतर्ज्ञानी (The Intuitive - Master Number)',
                meaning: 'अंक 11 में गहन आध्यात्मिक अंतर्दृष्टि और अंतर्ज्ञान है। यह उच्च चेतना के लिए एक चैनल है।',
                strengths: 'दूरदर्शी, प्रेरक, आध्यात्मिक रूप से जागरूक।',
                challenges: 'घबराहट, अव्यावहारिक, आसानी से अभिभूत।'
            },
            22: {
                title: 'मास्टर बिल्डर (Master Builder)',
                meaning: 'अंक 22 सपनों को हकीकत में बदलता है। यह 11 की दृष्टि को 4 की व्यावहारिकता के साथ जोड़ता है।',
                strengths: 'प्रकट करने वाला, महत्वाकांक्षी, व्यावहारिक दूरदर्शी।',
                challenges: 'क्षमता से अभिभूत, अनम्य।'
            },
            33: {
                title: 'मास्टर टीचर (Master Teacher)',
                meaning: 'अंक 33 मानवता को ठीक करने और ऊपर उठाने पर केंद्रित है। यह बिना शर्त प्यार का अंक है।',
                strengths: 'दयालु, समर्पित, गहराई से आध्यात्मिक।',
                challenges: 'स्वयं का त्याग करने वाला, जिम्मेदारी से दबा हुआ।'
            }
        };
        return hiMeanings[num] || hiMeanings[1];
    }

    const meanings: Record<number, { title: string, meaning: string, strengths: string, challenges: string }> = {
        1: {
            title: "The Leader",
            meaning: "Number 1 represents independence, originality, and leadership. It is the primal force from which all other numbers are created.",
            strengths: "Ambitious, courageous, innovative, self-reliant.",
            challenges: "Aggressive, dominating, impulsive, selfish."
        },
        2: {
            title: "The Peacemaker",
            meaning: "Number 2 is cooperative, diplomatic, and sensitive. It seeks harmony and balance in all things.",
            strengths: "Intuitive, supportive, empathetic, detail-oriented.",
            challenges: "Overly sensitive, indecisive, dependent."
        },
        3: {
            title: "The Communicator",
            meaning: "Number 3 is expressive, creative, and joyful. It represents the creative energy and joy of living.",
            strengths: "Imaginative, optimistic, charming, inspiring.",
            challenges: "Scattered, unfocused, superficial."
        },
        4: {
            title: "The Builder",
            meaning: "Number 4 is practical, hard-working, and grounded. It provides a solid foundation for the future.",
            strengths: "Organized, dependable, logical, patient.",
            challenges: "Rigid, stubborn, overly serious."
        },
        5: {
            title: "The Adventurer",
            meaning: "Number 5 is dynamic, freedom-loving, and adaptable. It thrives on change and new experiences.",
            strengths: "Versatile, curious, visionary, charismatic.",
            challenges: "Restless, inconsistent, impulsive."
        },
        6: {
            title: "The Nurturer",
            meaning: "Number 6 is responsible, loving, and protective. It is the most domestic and harmonious of all numbers.",
            strengths: "Compassionate, reliable, supportive, romantic.",
            challenges: "Overbearing, self-righteous, anxious."
        },
        7: {
            title: "The Seeker",
            meaning: "Number 7 is analytical, intellectual, and spiritual. It seeks truth and deeper understanding.",
            strengths: "Analytical, intuitive, philosophical, observant.",
            challenges: "Aloof, cynical, perfectionist."
        },
        8: {
            title: "The Powerhouse",
            meaning: "Number 8 is ambitious, authoritative, and goal-oriented. It relates to material success and mastery.",
            strengths: "Driven, confident, organized, efficient.",
            challenges: "Materialistic, controlling, ruthless."
        },
        9: {
            title: "The Humanitarian",
            meaning: "Number 9 is compassionate, philanthropic, and universal. It represents the culmination of wisdom.",
            strengths: "Selfless, intuitive, tolerant, idealistic.",
            challenges: "Dramatic, overly emotional, disconnected."
        },
        11: {
            title: "The Intuitive (Master Number)",
            meaning: "Number 11 possesses intense spiritual insight and intuition. It is a channel for higher consciousness.",
            strengths: "Visionary, inspiring, spiritually aware.",
            challenges: "Nervous tension, impractical, easily overwhelmed."
        },
        22: {
            title: "The Master Builder (Master Number)",
            meaning: "Number 22 turns dreams into reality. It combines the vision of the 11 with the practicality of the 4.",
            strengths: "Manifesting, ambitious, practical visionary.",
            challenges: "Overwhelmed by potential, inflexible."
        },
        33: {
            title: "The Master Teacher (Master Number)",
            meaning: "Number 33 is focused on healing and uplifting humanity. It is the number of unconditional love.",
            strengths: "Compassionate, devoted, deeply spiritual.",
            challenges: "Self-sacrificing to a fault, burdened by responsibility."
        }
    };
    return meanings[num] || meanings[1];
};
