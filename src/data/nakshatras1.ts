export interface NakshatraData {
  id: string;
  name: string;
  meaning: string;
  deity: string;
  rulingPlanet: string;
  zodiacSign: string;
  symbol: string;
  content: {
    introduction: string;
    personalityTraits: string;
    careerInterests: string;
    faqs: { question: string; answer: string }[];
  };
}

export const nakshatras1To9: NakshatraData[] = [
  {
    id: 'ashwini',
    name: 'Ashwini',
    meaning: 'The Horsewoman',
    deity: 'Ashwini Kumaras (Physicians of the Gods)',
    rulingPlanet: 'Ketu',
    zodiacSign: 'Aries (0°00′ – 13°20′)',
    symbol: 'Horse\'s Head',
    content: {
      introduction: 'Ashwini is the first Nakshatra of the zodiac, residing entirely within the fiery sign of Aries. It is symbolized by a horse\'s head, representing incredible speed, power, and the dawn of new beginnings. Governed by the Ashwini Kumaras, the celestial twin physicians, this Nakshatra carries powerful healing energy, vitality, and the urge to initiate action rapidly.',
      personalityTraits: 'Individuals born under Ashwini are pioneers. They are swift in their actions, quick thinkers, and highly energetic. They have an innocent, almost childlike enthusiasm for life and love starting new projects. However, they can sometimes lack the patience to finish what they start. They are courageous, independent, and possess a strong desire for freedom and adventure. Their dynamic energy makes them natural leaders.',
      careerInterests: 'Ashwini natives excel in professions requiring speed, courage, and healing. They make excellent surgeons, doctors, paramedics, athletes, military personnel, and entrepreneurs. They thrive in dynamic environments where quick decision-making is necessary.',
      faqs: [
        {
          question: 'What is the special power of Ashwini Nakshatra?',
          answer: 'Its special power is "Shidhra Vyapani Shakti," which means the power to quickly reach things or achieve goals. It is the energy of rapid healing and swift action.'
        },
        {
          question: 'Why is Ketu the ruling planet of Ashwini?',
          answer: 'Ketu represents past life karma and deep instincts. In Ashwini, Ketu\'s energy manifests as innate, instinctual knowledge and the sudden urge to burst forth and initiate new karmic cycles.'
        }
      ]
    }
  },
  {
    id: 'bharani',
    name: 'Bharani',
    meaning: 'The Bearer',
    deity: 'Yama (God of Death and Justice)',
    rulingPlanet: 'Venus',
    zodiacSign: 'Aries (13°20′ – 26°40′)',
    symbol: 'Yoni (Female Reproductive Organ)',
    content: {
      introduction: 'Bharani is the second Nakshatra, located in Aries. Its symbol is the Yoni, representing the female reproductive organ, which signifies creation, birth, and the bearing of life. Paradoxically, its ruling deity is Yama, the God of Death. This duality makes Bharani a star of massive transformation, representing the cycle of birth, death, and rebirth. It is a fiercely passionate and creative Nakshatra.',
      personalityTraits: 'Bharani natives are intense, passionate, and possess strong willpower. They are creative forces who are not afraid of massive undertakings or struggles. They are deeply committed to their beliefs and can be quite stubborn or extreme in their views. They have a magnetic personality, a strong sense of justice, and a natural ability to endure hardships and emerge stronger.',
      careerInterests: 'They excel in fields involving life, death, creation, and justice. This includes gynecology, psychology, law, the arts, creative industries, and professions dealing with transformation, such as crisis management or mortuary sciences.',
      faqs: [
        {
          question: 'Why is Bharani associated with both birth and death?',
          answer: 'It represents the extreme boundaries of existence. Birth (creation) requires massive struggle and transformation, just as death does. Bharani is the energy of enduring those profound transitions.'
        },
        {
          question: 'What is the power of Bharani?',
          answer: 'Its power is "Apabharani Shakti," the power to take things away or to cleanse and remove impurities, making way for new creation.'
        }
      ]
    }
  },
  {
    id: 'krittika',
    name: 'Krittika',
    meaning: 'The Cutter',
    deity: 'Agni (God of Fire)',
    rulingPlanet: 'Sun',
    zodiacSign: 'Aries (26°40′) to Taurus (10°00′)',
    symbol: 'Razor or Knife',
    content: {
      introduction: 'Krittika bridges Aries and Taurus and is known as the "Star of Fire." Symbolized by a razor or knife, it represents the cutting away of impurities and the burning of negativity. Ruled by Agni, the Fire God, Krittika is highly purifying, penetrating, and illuminating. It is the energy of the sacred flame that destroys ignorance and reveals the truth.',
      personalityTraits: 'People born under Krittika are sharp, direct, and possess a penetrating intellect. They are highly ambitious, self-motivated, and have a strong sense of pride. Like fire, they can be warm, nurturing, and protective, but also destructive if provoked. They value truth and have a sharp tongue that can easily cut through lies. They are excellent critics and analysts.',
      careerInterests: 'They thrive in roles that require precision, analysis, and authority. Excellent fields include surgery, military, engineering, law enforcement, critical analysis, auditing, and professions involving fire, cooking, or metalwork.',
      faqs: [
        {
          question: 'Is Krittika a malefic Nakshatra?',
          answer: 'It is considered a "mixed" Nakshatra. While its cutting and fiery nature can be harsh, its ultimate goal is purification and removing what is false.'
        },
        {
          question: 'What is the power of Krittika?',
          answer: 'Its power is "Dahana Shakti," the power to burn away negativity and purify the soul.'
        }
      ]
    }
  },
  {
    id: 'rohini',
    name: 'Rohini',
    meaning: 'The Red One / The Growing One',
    deity: 'Brahma (The Creator)',
    rulingPlanet: 'Moon',
    zodiacSign: 'Taurus (10°00′ – 23°20′)',
    symbol: 'Ox Cart / Chariot',
    content: {
      introduction: 'Rohini is located entirely in Taurus and is considered the Moon\'s favorite Nakshatra. It is the star of growth, fertility, and agriculture. Symbolized by an ox cart carrying a harvest, Rohini is deeply connected to nature, material abundance, and the creation of beauty. It is an incredibly sensual, fertile, and productive lunar mansion.',
      personalityTraits: 'Rohini natives are generally very attractive, charming, and possess a calm, stable demeanor. They love luxury, comfort, and the finer things in life. They are highly creative, deeply emotional, and fiercely loyal to their families. However, their love for material comforts can sometimes lead to possessiveness, jealousy, or materialism. They have a natural "green thumb" in both agriculture and business.',
      careerInterests: 'They excel in fields related to beauty, nature, and wealth. This includes agriculture, real estate, fashion, arts, banking, interior design, and the hospitality industry.',
      faqs: [
        {
          question: 'Why is Rohini considered the Moon\'s favorite?',
          answer: 'In mythology, the Moon (Chandra) was married to the 27 Nakshatras (daughters of Daksha) but loved Rohini the most due to her beauty, charm, and fertile nature. The Moon is exalted in Taurus within this Nakshatra.'
        },
        {
          question: 'What is the power of Rohini?',
          answer: 'Its power is "Rohana Shakti," the power to make things grow and prosper.'
        }
      ]
    }
  },
  {
    id: 'mrigashira',
    name: 'Mrigashira',
    meaning: 'The Deer\'s Head',
    deity: 'Soma (The Moon God)',
    rulingPlanet: 'Mars',
    zodiacSign: 'Taurus (23°20′) to Gemini (6°40′)',
    symbol: 'Deer\'s Head',
    content: {
      introduction: 'Mrigashira bridges Taurus and Gemini and is known as the "Searching Star." Symbolized by a deer roaming through the forest, it represents the soul\'s restless search for truth, meaning, and new experiences. It is a highly curious, gentle, and exploratory Nakshatra, driven by the desire to discover what lies beyond the horizon.',
      personalityTraits: 'Individuals born under Mrigashira are intellectual, curious, and constantly seeking knowledge. They are gentle, sensitive, and have a love for travel and poetry. However, their restless nature can make them fickle, anxious, and prone to changing their minds frequently. They are excellent researchers and communicators but may struggle to find ultimate satisfaction in one place.',
      careerInterests: 'They thrive in investigative and communicative roles. Good careers include research, journalism, writing, travel industry, astrology, teaching, and any field requiring continuous exploration and learning.',
      faqs: [
        {
          question: 'Why is it called the Searching Star?',
          answer: 'Just as a deer constantly moves through the forest looking for food and sensing danger, Mrigashira natives are always mentally and physically searching for new experiences, knowledge, and ultimate satisfaction.'
        },
        {
          question: 'What is the power of Mrigashira?',
          answer: 'Its power is "Prinana Shakti," the power to give fulfillment and joy through exploration.'
        }
      ]
    }
  },
  {
    id: 'ardra',
    name: 'Ardra',
    meaning: 'The Moist One / The Tear Drop',
    deity: 'Rudra (The Fierce Form of Shiva)',
    rulingPlanet: 'Rahu',
    zodiacSign: 'Gemini (6°40′ – 20°00′)',
    symbol: 'Teardrop / Human Head',
    content: {
      introduction: 'Ardra resides entirely in Gemini and is one of the most intense Nakshatras. Symbolized by a teardrop, it represents sorrow, suffering, and the subsequent purification that follows a storm. Ruled by Rudra, the fierce god of storms, Ardra signifies the destruction of the old to make way for the new. It is the star of deep psychological and emotional transformation.',
      personalityTraits: 'Ardra natives have highly active, analytical, and sometimes chaotic minds. They are incredibly intelligent, perceptive, and capable of deep research. They often experience significant upheavals or emotional storms in life, which serve to awaken them spiritually. They can be critical, sharp-tongued, and rebellious, but they are also deeply compassionate once they have undergone their own healing.',
      careerInterests: 'They excel in analytical, technological, and healing professions. IT, software development, psychology, psychiatry, research, astrology, and crisis management are highly suitable.',
      faqs: [
        {
          question: 'Is Ardra an unlucky Nakshatra?',
          answer: 'No, but it is intense. It often brings necessary storms and tears to wash away illusions. The suffering it brings is usually a catalyst for profound spiritual awakening and intellectual breakthroughs.'
        },
        {
          question: 'What is the power of Ardra?',
          answer: 'Its power is "Yatna Shakti," the power to make an effort and achieve goals through struggle and determination.'
        }
      ]
    }
  },
  {
    id: 'punarvasu',
    name: 'Punarvasu',
    meaning: 'Return of the Light',
    deity: 'Aditi (Mother of the Gods)',
    rulingPlanet: 'Jupiter',
    zodiacSign: 'Gemini (20°00′) to Cancer (3°20′)',
    symbol: 'Quiver of Arrows',
    content: {
      introduction: 'Punarvasu translates to the "Return of the Light" or "Good Again." Following the destructive storm of Ardra, Punarvasu represents renewal, restoration, and hope. Symbolized by a quiver of arrows, it signifies the safe return of energy and resources. Ruled by Aditi, the boundless mother goddess, it is a highly nurturing, optimistic, and spiritual Nakshatra.',
      personalityTraits: 'Punarvasu natives are known for their unwavering optimism, benevolence, and philosophical outlook. They have a strong sense of morality and are deeply nurturing. They bounce back from failures easily, truly embodying the "return of the light." They are simple, content, and often possess strong spiritual or religious beliefs. They love home and family but also have a love for travel.',
      careerInterests: 'They excel in teaching, philosophy, religious roles, writing, acting, travel, and any profession related to building, restoring, or nurturing society.',
      faqs: [
        {
          question: 'What does the Quiver of Arrows symbolize?',
          answer: 'It symbolizes that their "arrows" (energy, resources, efforts) can be shot, but they will always magically return to the quiver. It represents endless renewable energy and safety.'
        },
        {
          question: 'What is the power of Punarvasu?',
          answer: 'Its power is "Vastuva Prapana Shakti," the power to gain or recover wealth, property, and lost items.'
        }
      ]
    }
  },
  {
    id: 'pushya',
    name: 'Pushya',
    meaning: 'The Nourisher',
    deity: 'Brihaspati (Jupiter / Priest of the Gods)',
    rulingPlanet: 'Saturn',
    zodiacSign: 'Cancer (3°20′ – 16°40′)',
    symbol: 'Cow\'s Udder / Lotus',
    content: {
      introduction: 'Pushya is considered the most auspicious of all Nakshatras. Residing entirely in Cancer, it translates to "The Nourisher" and is symbolized by a cow\'s udder. It represents ultimate care, spiritual growth, and unconditional nourishment. Ruled by Jupiter\'s deity (Brihaspati) but governed by the planet Saturn, it combines spiritual wisdom with discipline and structure.',
      personalityTraits: 'Pushya natives are highly dependable, caring, and deeply spiritual. They are the caregivers of the zodiac, offering emotional and material support to those around them. They respect tradition, elders, and religion. They are hardworking, patient, and possess a calm demeanor. However, they can sometimes be overly orthodox or easily taken advantage of due to their giving nature.',
      careerInterests: 'They excel in caring, teaching, and traditional professions. Excellent fields include education, nursing, hospitality, food industries, religious leadership, politics, and counseling.',
      faqs: [
        {
          question: 'Why is Pushya considered so auspicious?',
          answer: 'It represents the pure, unselfish nourishment of a mother (the cow\'s udder). Any new endeavor (except marriage) started under Pushya is said to be highly successful and blessed.'
        },
        {
          question: 'What is the power of Pushya?',
          answer: 'Its power is "Brahmavarchasa Shakti," the power to harness spiritual energy and create spiritual radiance.'
        }
      ]
    }
  },
  {
    id: 'ashlesha',
    name: 'Ashlesha',
    meaning: 'The Entwiner',
    deity: 'Nagas (Serpent Deities)',
    rulingPlanet: 'Mercury',
    zodiacSign: 'Cancer (16°40′ – 30°00′)',
    symbol: 'Coiled Serpent',
    content: {
      introduction: 'Ashlesha is the final Nakshatra of the first cycle, residing at the end of Cancer. Symbolized by a coiled serpent, it represents the mystical, hidden, and sometimes dangerous aspects of life. It is the star of deep psychological insight, Kundalini energy, and intense clinging or attachment. It marks the transition from the emotional realm of Cancer to the fiery realm of Leo.',
      personalityTraits: 'Ashlesha natives are highly perceptive, intuitive, and hypnotic. They possess a penetrating intellect and can easily see through deception. They are fiercely protective of their loved ones, often "coiling" around them. However, they can also be secretive, manipulative, and possessive. They have a sharp, sometimes venomous tongue when threatened, but hold immense potential for spiritual awakening.',
      careerInterests: 'They excel in fields requiring deep investigation, strategy, and psychology. Good careers include research, psychology, espionage, astrology, politics, pharmaceuticals, and toxicology.',
      faqs: [
        {
          question: 'Is Ashlesha a dangerous Nakshatra?',
          answer: 'It is a sharp and mystical Nakshatra. Like a serpent, it is not inherently evil, but it will strike if provoked. It requires a high level of spiritual maturity to handle its intense, penetrating energy.'
        },
        {
          question: 'What is the power of Ashlesha?',
          answer: 'Its power is "Visasleshana Shakti," the power to inflict poison or to paralyze enemies, which also translates to the power of intense concentration and binding.'
        }
      ]
    }
  }
];
