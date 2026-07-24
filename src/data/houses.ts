export interface HouseData {
  id: string;
  name: string;
  sanskritName: string;
  title: string;
  description: string;
  significator: string; // Karaka
  content: {
    introduction: string;
    whatItRepresents: string;
    keyThemes: string;
    faqs: { question: string; answer: string }[];
  };
}

export const houses: HouseData[] = [
  {
    id: '1st-house',
    name: '1st House',
    sanskritName: 'Lagna Bhava',
    title: 'The 1st House (Lagna) in Astrology: Self & Identity',
    description: 'Learn about the 1st House (Ascendant/Lagna) in astrology. Discover how it shapes your physical appearance, personality, and life path.',
    significator: 'Sun (Surya)',
    content: {
      introduction: 'The 1st House, also known as the Ascendant or Lagna, is the most crucial house in any birth chart. It represents the exact degree of the zodiac sign rising on the eastern horizon at the moment of your birth. It marks the beginning of your life\'s journey and sets the framework for the entire chart. Whatever sign falls in the 1st house becomes your rising sign, coloring your outward personality and how the world perceives you.',
      whatItRepresents: 'The 1st House represents "You" in the most physical and immediate sense. It governs your physical body, appearance, complexion, health, and vitality. It is the house of self-discovery, ego, and your innate temperament. When the 1st house is strong, the individual enjoys good health, confidence, and a strong sense of purpose. A weak 1st house can indicate struggles with self-identity or physical frailty.',
      keyThemes: 'Self-image, physical body, beginnings, outward personality, health, longevity, and how you initiate actions in the world.',
      faqs: [
        {
          question: 'Why is the Lagna so important in Vedic Astrology?',
          answer: 'The Lagna is the anchor of the chart. All other houses are calculated from this point. It represents your soul\'s entry into the physical world and dictates the primary focus of your current life.'
        },
        {
          question: 'What is the difference between Sun sign and Ascendant?',
          answer: 'Your Sun sign is your core ego and soul. The Ascendant (1st house) is the "mask" you wear, your physical body, and how people first perceive you before getting to know your inner core.'
        }
      ]
    }
  },
  {
    id: '2nd-house',
    name: '2nd House',
    sanskritName: 'Dhana Bhava',
    title: 'The 2nd House in Astrology: Wealth, Speech & Family',
    description: 'Explore the 2nd House in astrology. Discover how it influences your accumulated wealth, speech, early childhood family, and material possessions.',
    significator: 'Jupiter (Guru)',
    content: {
      introduction: 'The 2nd House in astrology is traditionally known as the house of wealth (Dhana Bhava) and family (Kutumba Bhava). Following the birth of the self (1st house), the 2nd house represents the resources you need to sustain yourself. It is the house that dictates your financial stability and the values you hold dear.',
      whatItRepresents: 'This house governs accumulated wealth—bank balances, assets, and material possessions (unlike the 11th house which is daily income). Beyond money, it is the house of speech (Vani), dictating how you talk, your tone, and truthfulness. It also represents the food you eat and your immediate family and lineage during your early upbringing.',
      keyThemes: 'Accumulated wealth, speech, face, right eye, food habits, early family life, and personal values.',
      faqs: [
        {
          question: 'Does the 2nd house show how I will make money?',
          answer: 'It shows your capacity to accumulate and save wealth. The 10th house shows your career, and the 11th shows gains, but the 2nd shows what actually stays in your bank account.'
        },
        {
          question: 'How does the 2nd house affect speech?',
          answer: 'A benefic planet here can make speech sweet and persuasive. Malefic planets can make speech harsh, sarcastic, or indicate a tendency to lie.'
        }
      ]
    }
  },
  {
    id: '3rd-house',
    name: '3rd House',
    sanskritName: 'Sahaja Bhava',
    title: 'The 3rd House in Astrology: Courage, Siblings & Communication',
    description: 'Learn about the 3rd House in astrology. Discover how it impacts your courage, communication skills, younger siblings, and short trips.',
    significator: 'Mars (Mangal)',
    content: {
      introduction: 'The 3rd House, known as Sahaja Bhava or the house of courage, is the domain of self-effort (Parakrama). It represents how you exert your willpower to overcome challenges. It is a house of action, communication, and immediate environment.',
      whatItRepresents: 'This house governs younger siblings, neighbors, and short-distance travel. It is heavily tied to communication—writing, media, journalism, and how you articulate your thoughts. More importantly, it represents your courage, hobbies, and the effort you are willing to put into achieving your goals.',
      keyThemes: 'Younger siblings, courage, self-effort, communication, writing, short journeys, and hobbies.',
      faqs: [
        {
          question: 'What does an active 3rd house indicate for a career?',
          answer: 'It strongly favors careers in media, writing, sales, journalism, IT, or any field that requires constant communication and self-driven effort.'
        },
        {
          question: 'How does it relate to siblings?',
          answer: 'The 3rd house specifically represents younger siblings and your relationship with them. Malefic planets here might indicate friction or distance from siblings.'
        }
      ]
    }
  },
  {
    id: '4th-house',
    name: '4th House',
    sanskritName: 'Sukh Bhava',
    title: 'The 4th House in Astrology: Mother, Home & Happiness',
    description: 'Explore the 4th House in astrology. Discover how it influences your mother, home environment, emotional peace, and real estate.',
    significator: 'Moon (Chandra)',
    content: {
      introduction: 'The 4th House, or Sukh Bhava (House of Happiness), sits at the very bottom of the birth chart, representing the foundation of your life. It is your roots, your psychological foundation, and the place where you retreat for comfort. It is intimately connected to your inner peace.',
      whatItRepresents: 'This house governs the mother and your relationship with her. It represents your physical home, homeland, real estate, vehicles, and early education. A strong 4th house brings a peaceful mind, property ownership, and a happy domestic life. An afflicted 4th house can cause domestic turmoil or lack of mental peace.',
      keyThemes: 'Mother, home, homeland, inner peace, vehicles, property, and early education.',
      faqs: [
        {
          question: 'Why is the 4th house related to vehicles?',
          answer: 'In astrology, vehicles are seen as a form of comfort and conveyance (Vahana), which falls under the domain of the 4th house\'s pursuit of physical and mental comfort.'
        },
        {
          question: 'How do I read my relationship with my mother?',
          answer: 'The planets in the 4th house and its ruling planet indicate the nature of your mother and your emotional bond with her.'
        }
      ]
    }
  },
  {
    id: '5th-house',
    name: '5th House',
    sanskritName: 'Putra Bhava',
    title: 'The 5th House in Astrology: Creativity, Children & Romance',
    description: 'Learn about the 5th House in astrology. Discover how it influences your creativity, intellect, children, romance, and past-life karma.',
    significator: 'Jupiter (Guru)',
    content: {
      introduction: 'The 5th House, known as Putra Bhava (House of Children), is the house of creation. Whether it is creating art, giving birth to children, or generating new ideas, the 5th house is the center of joy, playfulness, and intellect.',
      whatItRepresents: 'This house governs children, intelligence, higher education, and romantic affairs. It is also the house of Speculation (stock markets, gambling) and past-life good karma (Poorva Punya). Benefic planets here indicate a sharp mind, happy children, and success in creative or speculative fields.',
      keyThemes: 'Children, romance, intellect, creativity, speculation, mantras, and past-life merits.',
      faqs: [
        {
          question: 'Does the 5th house show love marriage?',
          answer: 'Yes, the 5th house rules romance and love affairs. If connected to the 7th house (marriage), it often indicates a love marriage.'
        },
        {
          question: 'What does past-life karma have to do with this house?',
          answer: 'In Vedic astrology, the 5th house represents "Poorva Punya," or the good karma carried over from past lives, which manifests as sudden luck, intelligence, and talented children in this life.'
        }
      ]
    }
  },
  {
    id: '6th-house',
    name: '6th House',
    sanskritName: 'Ripu Bhava',
    title: 'The 6th House in Astrology: Enemies, Health & Daily Service',
    description: 'Explore the 6th House in astrology. Discover how it influences your health, daily routine, debt, enemies, and service to others.',
    significator: 'Mars & Saturn',
    content: {
      introduction: 'The 6th House, known as Ripu Bhava (House of Enemies/Obstacles), is considered a "Dusthana" or challenging house in Vedic astrology. However, it is also a house of growth (Upachaya). It represents the struggles of daily life and how we overcome them.',
      whatItRepresents: 'This house governs health, diseases, debts, enemies, and litigation. It is also the house of daily routine, pets, and service (jobs, employees). Interestingly, malefic planets (like Mars, Saturn, Rahu) perform very well here, giving the individual the fighting spirit to crush enemies and overcome debts and illnesses.',
      keyThemes: 'Diseases, debts, enemies, daily service, routine, pets, litigation, and overcoming obstacles.',
      faqs: [
        {
          question: 'Are planets in the 6th house always bad?',
          answer: 'No. While it is a challenging house, malefic planets here provide the strength to defeat enemies and excel in competitive environments.'
        },
        {
          question: 'How does it relate to career?',
          answer: 'The 6th house rules service and jobs. It is prominent in the charts of doctors, lawyers, military personnel, and those who serve others or resolve disputes.'
        }
      ]
    }
  },
  {
    id: '7th-house',
    name: '7th House',
    sanskritName: 'Kalatra Bhava',
    title: 'The 7th House in Astrology: Marriage & Partnerships',
    description: 'Learn about the 7th House in astrology. Discover how it influences your marriage, life partner, business partnerships, and public dealings.',
    significator: 'Venus (Shukra)',
    content: {
      introduction: 'The 7th House, known as Kalatra Bhava, is situated exactly opposite the 1st house. While the 1st house is "Self," the 7th house is the "Other." It represents the mirror to your soul, primarily focusing on long-term partnerships and marriage.',
      whatItRepresents: 'This house governs your spouse, the nature of your marriage, business partnerships, and all legal agreements. It also relates to how you interact with the public and open enemies. A strong 7th house indicates a supportive spouse and success in business partnerships, while afflictions can cause marital discord.',
      keyThemes: 'Marriage, spouse, business partnerships, contracts, public image, and legal ties.',
      faqs: [
        {
          question: 'How do I know the characteristics of my future spouse?',
          answer: 'Look at the sign in the 7th house, the planets occupying it, and the ruler of the 7th house. They describe the physical and psychological traits of your partner.'
        },
        {
          question: 'Is the 7th house only about romance?',
          answer: 'No. It governs ALL binding partnerships, including business partners and significant public dealings.'
        }
      ]
    }
  },
  {
    id: '8th-house',
    name: '8th House',
    sanskritName: 'Ayu Bhava',
    title: 'The 8th House in Astrology: Transformation, Occult & Longevity',
    description: 'Explore the 8th House in astrology. Discover how it influences sudden changes, hidden wealth, occult sciences, longevity, and transformation.',
    significator: 'Saturn (Shani)',
    content: {
      introduction: 'The 8th House is the most mysterious and misunderstood house in astrology. Known as Randhra Bhava, it is a Dusthana (difficult house) that rules the hidden, the unseen, and sudden transformations. It is the house of rebirth through destruction.',
      whatItRepresents: 'This house governs longevity, death, sudden events (accidents or sudden gains), hidden wealth (inheritance, lottery, spouse\'s wealth), and the occult sciences (astrology, magic, research). It is a house of deep psychological transformation. Planets here often cause sudden upheavals, but also provide profound spiritual depth.',
      keyThemes: 'Longevity, sudden changes, inheritance, occult, hidden things, research, and deep psychological transformation.',
      faqs: [
        {
          question: 'Does the 8th house predict death?',
          answer: 'While it is the house of longevity, it is more accurately the house of "transformation." It shows how you undergo massive life changes, not necessarily physical death.'
        },
        {
          question: 'Is it good for anything?',
          answer: 'Yes! It is excellent for research, psychology, astrology, surgery, and gaining wealth through inheritance or investments.'
        }
      ]
    }
  },
  {
    id: '9th-house',
    name: '9th House',
    sanskritName: 'Bhagya Bhava',
    title: 'The 9th House in Astrology: Fortune, Dharma & Higher Knowledge',
    description: 'Learn about the 9th House in astrology. Discover how it influences your luck, religion, philosophy, father, and long-distance travel.',
    significator: 'Jupiter (Guru)',
    content: {
      introduction: 'The 9th House, known as Bhagya Bhava (House of Fortune), is considered the most auspicious house (Trikona) in Vedic astrology. It represents your Dharma (righteous path), luck, and higher learning. It shows the grace you receive in this life from past good deeds.',
      whatItRepresents: 'This house governs religion, philosophy, higher education (universities), long-distance travel, and the father (or Guru/Teacher). A strong 9th house brings natural luck, a strong moral compass, and a deep inclination towards spirituality and truth.',
      keyThemes: 'Luck/Fortune, religion, philosophy, father, gurus, long journeys, and higher education.',
      faqs: [
        {
          question: 'Why is the 9th house called the house of luck?',
          answer: 'It represents the grace of the divine. When this house is strong, the universe seems to naturally support your endeavors, removing obstacles from your path.'
        },
        {
          question: 'Does it represent the father?',
          answer: 'In Vedic astrology, the 9th house is the primary house of the father, representing his teachings, influence, and your relationship with him.'
        }
      ]
    }
  },
  {
    id: '10th-house',
    name: '10th House',
    sanskritName: 'Karma Bhava',
    title: 'The 10th House in Astrology: Career, Reputation & Status',
    description: 'Explore the 10th House in astrology. Discover how it influences your career, public reputation, authority, and professional achievements.',
    significator: 'Sun, Mercury, Jupiter, Saturn',
    content: {
      introduction: 'The 10th House, or Karma Bhava, is the highest point in the birth chart (the Midheaven). It represents your public life, your career, and the mark you leave on the world. It is the house of action and worldly achievements.',
      whatItRepresents: 'This house governs your profession, reputation, status, authority, and relationship with government or authority figures. Planets in the 10th house are highly visible to the world and strongly dictate the nature of your career. A strong 10th house brings fame, power, and professional success.',
      keyThemes: 'Career, profession, public status, reputation, fame, authority, and government.',
      faqs: [
        {
          question: 'How does the 10th house differ from the 6th house (jobs)?',
          answer: 'The 6th house is your daily grind, your service, and routine jobs. The 10th house is your overall career trajectory, your title, and how the public views your professional status.'
        },
        {
          question: 'Which planets are best in the 10th house?',
          answer: 'The Sun and Mars gain directional strength (Digbala) in the 10th house, making them incredibly powerful for leadership, management, and achieving high status.'
        }
      ]
    }
  },
  {
    id: '11th-house',
    name: '11th House',
    sanskritName: 'Labha Bhava',
    title: 'The 11th House in Astrology: Gains, Friends & Desires',
    description: 'Learn about the 11th House in astrology. Discover how it influences your financial gains, social networks, elder siblings, and fulfillment of desires.',
    significator: 'Jupiter (Guru)',
    content: {
      introduction: 'The 11th House, known as Labha Bhava (House of Gains), is the house of fulfillment. It is considered an Upachaya (growing) house where almost all planets yield positive results over time. It represents the rewards of your hard work (from the 10th house).',
      whatItRepresents: 'This house governs financial gains, income, large social networks, friendships, and elder siblings. Most importantly, it is the house of fulfilling your hopes and desires. Any planet placed here tends to bring material gains related to its nature.',
      keyThemes: 'Income, gains, fulfillment of desires, elder siblings, social networks, and large organizations.',
      faqs: [
        {
          question: 'Are malefic planets good in the 11th house?',
          answer: 'Yes! Malefics like Saturn, Rahu, and Mars do exceptionally well in the 11th house, bringing massive wealth and the ambition to fulfill one\'s desires.'
        },
        {
          question: 'How is it different from the 2nd house of wealth?',
          answer: 'The 11th house is the *flow* of income and gains (your paycheck or business profits). The 2nd house is what you *save* and accumulate in your bank.'
        }
      ]
    }
  },
  {
    id: '12th-house',
    name: '12th House',
    sanskritName: 'Vyaya Bhava',
    title: 'The 12th House in Astrology: Endings, Losses & Spiritual Liberation',
    description: 'Explore the 12th House in astrology. Discover how it influences expenses, isolation, foreign lands, the subconscious, and spiritual liberation.',
    significator: 'Saturn & Ketu',
    content: {
      introduction: 'The 12th House, known as Vyaya Bhava (House of Expenditure), is the final house of the zodiac, completing the cycle. It is a house of endings, dissolution, and letting go. While it is a Dusthana (difficult house) materially, it is the ultimate house for spiritual growth.',
      whatItRepresents: 'This house governs expenses, losses, isolation (hospitals, ashrams, prisons), foreign lands, and the subconscious mind. It also represents sleep, bed pleasures, and Moksha (spiritual liberation). Planets here tend to lose their material strength, directing their energy inward.',
      keyThemes: 'Losses, expenses, foreign travel, isolation, sleep, subconscious, and Moksha (liberation).',
      faqs: [
        {
          question: 'Does the 12th house mean I will be poor?',
          answer: 'Not necessarily. It means your expenses might be high. In modern times, a strong 12th house is excellent for multinational business, importing/exporting, and living abroad.'
        },
        {
          question: 'Why is it the house of Moksha?',
          answer: 'Because it represents the dissolution of the ego (which was born in the 1st house). It is where the soul learns to detach from material desires and seek spiritual liberation.'
        }
      ]
    }
  }
];
