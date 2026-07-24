export const interpretations: Record<string, string> = {
    "Sun in 1st House": "Gives leadership qualities, a strong sense of self, and vitality.",
    "Sun in 5th House": "Indicates creative intelligence, a love for children, and natural leadership.",
    "Moon in 2nd House": "Suggests a stable emotional foundation tied to family and wealth accumulation.",
    "Mars in 10th House": "Brings strong drive and ambition in career, making one a successful professional.",
    "Mercury in 6th House": "Gives strong analytical skills and success in service-oriented professions.",
    "Jupiter in 4th House": "Indicates domestic happiness, good education, and a strong inner foundation.",
    "Venus in 12th House": "Suggests deep spiritual devotion, hidden talents in arts, and potential foreign gains.",
    "Saturn in 7th House": "Brings serious, long-lasting partnerships and requires patience in marriage.",
    "Rahu in 2nd House": "Indicates a strong desire for wealth accumulation and sometimes unconventional speech.",
    "Ketu in 8th House": "Gives deep intuition, interest in the occult, and sudden transformative events."
};

export const interpretationsHi: Record<string, string> = {
    "Sun in 1st House": "नेतृत्व के गुण, आत्म-बोध और जीवन शक्ति देता है।",
    "Sun in 5th House": "रचनात्मक बुद्धि, बच्चों के लिए प्यार और स्वाभाविक नेतृत्व को दर्शाता है।",
    "Moon in 2nd House": "परिवार और धन संचय से जुड़ी एक स्थिर भावनात्मक नींव का सुझाव देता है।",
    "Mars in 10th House": "करियर में मजबूत ड्राइव और महत्वाकांक्षा लाता है, जिससे व्यक्ति एक सफल पेशेवर बनता है।",
    "Mercury in 6th House": "मजबूत विश्लेषणात्मक कौशल और सेवा-उन्मुख व्यवसायों में सफलता देता है।",
    "Jupiter in 4th House": "घरेलू खुशी, अच्छी शिक्षा और एक मजबूत आंतरिक नींव को दर्शाता है।",
    "Venus in 12th House": "गहरी आध्यात्मिक भक्ति, कला में छिपी प्रतिभा और संभावित विदेशी लाभ का सुझाव देता है।",
    "Saturn in 7th House": "गंभीर, लंबे समय तक चलने वाली साझेदारी लाता है और विवाह में धैर्य की आवश्यकता होती है।",
    "Rahu in 2nd House": "धन संचय की तीव्र इच्छा और कभी-कभी अपरंपरागत भाषण को दर्शाता है।",
    "Ketu in 8th House": "गहरा अंतर्ज्ञान, मनोगत में रुचि और अचानक परिवर्तनकारी घटनाएँ देता है।"
};

export const getInterpretation = (planet: string, house: number, lang: string = 'en') => {
    const key = `${planet} in ${house}th House`;
    if (lang === 'hi') {
        return interpretationsHi[key] || `${planet} का ${house}वें भाव में होना आपके जीवन के इस क्षेत्र को प्रभावित करता है।`;
    }
    return interpretations[key] || `${planet} in the ${house}th house influences this area of your life.`;
};
