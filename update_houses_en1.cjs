const fs = require('fs');

const housesEnData = [
  {
    id: '1st-house',
    name: '1st House',
    sanskritName: 'Lagna Bhava',
    title: 'The 1st House (Lagna) in Astrology: Self, Identity & Body',
    description: 'Master the 1st House (Ascendant/Lagna) in astrology. Discover how it shapes your physical appearance, true personality, vitality, and your entire life path.',
    significator: 'Sun (Surya) for vitality, Moon (Chandra) for mind',
    content: {
      introduction: "The 1st House, also known as the Ascendant or Lagna, is the absolute foundation of your astrological birth chart. It represents the exact degree of the zodiac sign that was rising on the eastern horizon at the precise moment and location of your birth. In Vedic astrology, the Lagna is considered the anchor of the chart—every other house and planetary placement is calculated relative to this starting point. It marks your soul's entry into the physical world, setting the framework for your entire life's journey. Whatever sign falls in the 1st house becomes your rising sign, which strongly colors your outward personality, your physical body, and how the world instinctively perceives you.",
      whatItRepresents: "The 1st House represents 'You' in the most physical, immediate, and holistic sense. It governs your physical body, appearance, complexion, overall health, and natural vitality. Beyond the physical, it is the house of self-discovery, ego, and your innate temperament. It dictates your approach to new beginnings and how you initiate actions in the world. When the 1st house and its ruling planet (the Lagnesha) are strong, the individual enjoys robust health, unshakeable confidence, a strong sense of purpose, and the ability to overcome life's obstacles. Conversely, a weak or afflicted 1st house can indicate struggles with self-identity, a lack of direction, or physical frailty and chronic health issues.",
      keyThemes: "Self-image, physical body, appearance, beginnings, outward personality, health, longevity, ego, and how you project yourself into the world.",
      vedicVsWestern: "In Western astrology, the Ascendant (1st house cusp) is heavily emphasized as the 'mask' you wear in public—your surface-level personality before people get to know your core Sun sign. In Vedic astrology (Jyotish), the Lagna is profoundly more significant. It is not just a mask; it is the physical manifestation of your life path. The Lagna and its Lord (Lagnesha) are seen as the supreme directors of the chart, often holding more weight in determining overall life success and physical well-being than the Sun sign itself.",
      planetsInHouse: [
        { planet: "Sun", influence: "Brings natural leadership, radiant confidence, and a strong sense of self, but can sometimes make the individual overly proud or ego-driven." },
        { planet: "Moon", influence: "Creates a gentle, highly intuitive, and emotionally expressive personality. The person is often deeply empathetic but prone to mood swings." },
        { planet: "Mars", influence: "Provides incredible physical energy, courage, and a competitive drive. The person is highly independent but must guard against impulsiveness and anger." },
        { planet: "Mercury", influence: "Yields a youthful, communicative, and highly intellectual demeanor. The individual is quick-witted, adaptable, and naturally curious." },
        { planet: "Jupiter", influence: "One of the best placements. Brings optimism, wisdom, a philosophical nature, and natural protection against life's hardships. Often grants physical stature." },
        { planet: "Venus", influence: "Bestows physical beauty, charm, and a deeply diplomatic nature. The person naturally attracts others and has a strong appreciation for aesthetics." },
        { planet: "Saturn", influence: "Creates a serious, mature, and highly disciplined personality. Success may come slowly through hard work, and the person may look older than their years." },
        { planet: "Rahu", influence: "Brings intense ambition, a desire for recognition, and an unconventional approach to life. The person may frequently reinvent their identity." },
        { planet: "Ketu", influence: "Indicates a highly spiritual or detached personality. The person may struggle with self-identity or feel profoundly misunderstood by the material world." }
      ],
      faqs: [
        {
          question: 'Why is the Lagna so important in Vedic Astrology?',
          answer: 'The Lagna is the anchor of the chart. All other houses (representing different areas of life) are calculated from this point. It represents your soul\'s entry into the physical world and dictates the primary focus, struggles, and strengths of your current life.'
        },
        {
          question: 'What is the difference between my Sun sign and my Ascendant?',
          answer: 'Your Sun sign represents your core ego and deep soul motivations. The Ascendant (1st house) is your physical vehicle—your body, your immediate reactions, and how people first perceive you. In Vedic astrology, your life events are primarily timed from the Ascendant and the Moon.'
        },
        {
          question: 'What happens if my 1st House is empty?',
          answer: 'An empty 1st house is very common and perfectly normal. You simply look at the zodiac sign ruling the 1st house and find where its ruling planet (the Ascendant Lord) is placed in your chart to understand the direction of your life.'
        }
      ]
    }
  },
  {
    id: '2nd-house',
    name: '2nd House',
    sanskritName: 'Dhana Bhava',
    title: 'The 2nd House in Astrology: Wealth, Speech & Family',
    description: 'Explore the 2nd House in astrology. Discover how it dictates your accumulated wealth, personal values, speech, and early childhood family environment.',
    significator: 'Jupiter (Guru) for wealth, Mercury (Budh) for speech',
    content: {
      introduction: "The 2nd House in astrology is traditionally known as Dhana Bhava (the House of Wealth) and Kutumba Bhava (the House of Family). Following the birth of the self (1st house), the 2nd house represents the immediate resources you need to sustain yourself in the physical world. It is the house that dictates your financial stability, the values you hold dear, and the environment of your early childhood upbringing. It governs what you value, what you possess, and how you articulate your thoughts to the world.",
      whatItRepresents: "This house governs accumulated wealth—your bank balances, liquid assets, investments, and material possessions (unlike the 11th house, which represents the flow of daily income). Beyond money, it is the primary house of speech (Vani), dictating how you talk, your tone of voice, and your truthfulness. It also represents the food you eat, your dietary habits, the face, the right eye, and your immediate family lineage. A strong 2nd house ensures financial security, a supportive family, and persuasive speech. Afflictions here can cause financial instability, harsh speech, or family disputes.",
      keyThemes: "Accumulated wealth, savings, speech and voice, face, right eye, food habits, early family life, and core personal values.",
      vedicVsWestern: "In Western astrology, the 2nd house is strongly associated with Taurus and Venus, focusing heavily on personal values, self-worth, and material possessions. Vedic astrology shares these themes but places a massive emphasis on speech (Vani) and the early childhood family (Kutumba). In Vedic analysis, the 2nd house is crucial for determining if a person will be a good speaker or singer, and what kind of sanskaras (values) they absorbed from their family during their formative years.",
      planetsInHouse: [
        { planet: "Sun", influence: "Can bring wealth through government or authority figures. Speech is authoritative and commanding, but can sometimes be harsh or overly proud." },
        { planet: "Moon", influence: "Indicates fluctuating wealth. The person has a sweet, gentle voice and a deep emotional attachment to their family and financial security." },
        { planet: "Mars", influence: "Wealth is pursued aggressively and can be spent just as fast. Speech is direct, argumentative, or overly blunt. Good for debates." },
        { planet: "Mercury", influence: "Excellent for speech, writing, and business. The person is highly articulate, persuasive, and can earn wealth through communication or commerce." },
        { planet: "Jupiter", influence: "A very auspicious placement for accumulating wealth, especially through knowledge or teaching. Speech is wise, truthful, and philosophical." },
        { planet: "Venus", influence: "Attracts wealth easily and spends it on luxury, beauty, and good food. The voice is melodious, making it a great placement for singers." },
        { planet: "Saturn", influence: "Wealth accumulates slowly through hard work and extreme frugality. Speech is serious and deliberate. Can indicate early family struggles." },
        { planet: "Rahu", influence: "Creates an intense, obsessive desire for wealth and unconventional dietary habits. Speech can be highly persuasive, manipulative, or foreign-sounding." },
        { planet: "Ketu", influence: "Brings detachment from wealth and family. The person may struggle to hold onto money or prefer a minimalist lifestyle. Speech is highly intuitive." }
      ],
      faqs: [
        {
          question: 'Does the 2nd house show how I will make my career?',
          answer: 'Not directly. The 10th house shows your career and the 11th shows your business profits or paycheck. The 2nd house shows your capacity to *save* and accumulate that wealth into lasting assets.'
        },
        {
          question: 'How does the 2nd house affect speech?',
          answer: 'The planets in and ruling the 2nd house color your voice. Benefics like Venus or Jupiter make speech sweet and persuasive. Malefics like Mars or Rahu can make speech harsh, sarcastic, or indicate a tendency to lie or exaggerate.'
        },
        {
          question: 'Why does the 2nd house represent food?',
          answer: 'The 2nd house rules the mouth, teeth, and tongue. Therefore, it governs intake—both what you speak out and what you eat. Planets here often dictate dietary preferences and potential food-related health issues.'
        }
      ]
    }
  },
  {
    id: '3rd-house',
    name: '3rd House',
    sanskritName: 'Sahaja Bhava',
    title: 'The 3rd House in Astrology: Courage, Communication & Siblings',
    description: 'Learn about the 3rd House in astrology. Discover how it impacts your courage, communication skills, younger siblings, and short journeys.',
    significator: 'Mars (Mangal) for courage, Mercury (Budh) for communication',
    content: {
      introduction: "The 3rd House, known as Sahaja Bhava (House of Siblings) or Parakrama Bhava (House of Courage), is the domain of self-effort and willpower. It represents how you exert your energy to overcome challenges and interact with your immediate environment. Following the accumulation of resources in the 2nd house, the 3rd house is where you take those resources and begin to explore, communicate, and assert yourself in the local world.",
      whatItRepresents: "This house governs younger siblings, neighbors, and short-distance travel. It is heavily tied to all forms of communication—writing, speaking, media, journalism, internet, and how you articulate your thoughts. More importantly, in Vedic astrology, it represents your courage (Parakrama), your hobbies, your skills with your hands, and the raw effort you are willing to put into achieving your goals. A strong 3rd house makes a person bold, highly communicative, and self-made. A weak 3rd house can lead to a lack of motivation, fearfulness, or strained relationships with siblings.",
      keyThemes: "Younger siblings, courage, self-effort, communication, writing, short journeys, neighbors, hobbies, and manual skills.",
      vedicVsWestern: "Western astrology strongly associates the 3rd house with Gemini and Mercury, focusing primarily on communication, local travel, and the lower mind (early education). Vedic astrology expands this significantly by adding the concept of 'Parakrama' (courage and valor), heavily associating the house with Mars. In Jyotish, the 3rd house is an 'Upachaya' (growing) house, meaning that challenges here improve over time through the individual's sheer willpower and effort.",
      planetsInHouse: [
        { planet: "Sun", influence: "Brings immense courage, independence, and leadership skills. The person is highly self-motivated but may have ego clashes with younger siblings." },
        { planet: "Moon", influence: "Creates a highly imaginative and expressive mind. The person loves short trips and communicates with deep emotion, but courage can fluctuate with moods." },
        { planet: "Mars", influence: "An excellent placement. Grants phenomenal courage, competitive drive, and the ability to crush obstacles. However, it can cause significant friction with siblings." },
        { planet: "Mercury", influence: "Highly favorable for writers, journalists, and salespeople. The intellect is sharp, curious, and the person possesses excellent communication skills." },
        { planet: "Jupiter", influence: "Communication is philosophical, wise, and optimistic. The person has good relations with siblings and may act as a teacher or guide to them." },
        { planet: "Venus", influence: "Brings artistic talents, especially with the hands (painting, instruments). Communication is sweet, diplomatic, and the person loves pleasant short journeys." },
        { planet: "Saturn", influence: "Effort yields results slowly. The person is cautious, highly disciplined in their skills, and may experience distance or heavy responsibility regarding siblings." },
        { planet: "Rahu", influence: "Grants immense bravery and an obsession with media, internet, or publishing. The person uses unconventional methods to communicate and achieve their goals." },
        { planet: "Ketu", influence: "The person may feel detached from their siblings or local environment. Communication is highly intuitive or sparse. Good for deep, isolated research." }
      ],
      faqs: [
        {
          question: 'What does an active 3rd house indicate for a career?',
          answer: 'It strongly favors careers that require constant communication, self-driven effort, or manual dexterity. This includes media, writing, sales, journalism, IT, programming, and playing musical instruments.'
        },
        {
          question: 'How does it relate to siblings?',
          answer: 'The 3rd house specifically represents younger siblings and your relationship with them. (The 11th house represents elder siblings). Malefic planets here might indicate friction, competition, or distance from younger siblings.'
        },
        {
          question: 'Why are malefic planets considered good here?',
          answer: 'Because the 3rd house is about fighting battles and putting in effort. Malefic planets (Mars, Saturn, Rahu) are naturally aggressive and tough, giving you the necessary grit and competitive edge to overcome obstacles.'
        }
      ]
    }
  },
  {
    id: '4th-house',
    name: '4th House',
    sanskritName: 'Sukh Bhava',
    title: 'The 4th House in Astrology: Mother, Home & Inner Peace',
    description: 'Explore the 4th House in astrology. Discover how it influences your mother, home environment, emotional peace, real estate, and foundational happiness.',
    significator: 'Moon (Chandra) for mother and mind, Venus (Shukra) for vehicles',
    content: {
      introduction: "The 4th House, known as Sukh Bhava (the House of Happiness), sits at the very bottom (nadir) of the birth chart. It represents the foundational roots of your life. After exploring the immediate environment in the 3rd house, the 4th house is where you retreat for comfort, safety, and emotional nourishment. It governs your private life, your deepest psychological foundations, and the ultimate sense of inner peace.",
      whatItRepresents: "This house governs the mother and your relationship with her, reflecting how you were nurtured. It represents your physical home, homeland, real estate, land ownership, and vehicles (conveyances). It is also the house of early education (up to high school). Most importantly, the 4th house represents the state of your inner mind and your capacity for contentment. A strong 4th house brings a peaceful mind, property ownership, supportive motherly figures, and a happy domestic life. An afflicted 4th house can cause domestic turmoil, frequent changes in residence, or a chronic lack of mental peace.",
      keyThemes: "Mother, physical home, homeland, inner peace, happiness (Sukh), vehicles, real estate, early education, and psychological foundations.",
      vedicVsWestern: "In both Western and Vedic astrology, the 4th house is closely tied to the home, ancestry, and the emotional core (often associated with Cancer and the Moon). However, in Vedic astrology, there is a very specific emphasis on the 4th house governing vehicles (Vahana) and physical real estate (Bhumi). It is deeply analyzed to determine if a person will own a house or luxury cars, and whether they will find true 'Sukh' (inner happiness) in their life.",
      planetsInHouse: [
        { planet: "Sun", influence: "Can create a domineering atmosphere at home or ego clashes with parents. However, it gives a strong attachment to the homeland and potential for owning grand properties." },
        { planet: "Moon", influence: "The Moon is completely at home here. Brings deep emotional attachment to the mother, a love for the domestic environment, and a need for emotional security at home." },
        { planet: "Mars", influence: "Can cause significant domestic arguments or a restless mind (creating Mangal Dosha). However, it is excellent for acquiring real estate, land, and working in construction." },
        { planet: "Mercury", influence: "Brings a lively, intellectual, and communicative home environment. Excellent for early education and often indicates running a business from home." },
        { planet: "Jupiter", influence: "Brings immense peace, a large and comfortable home, and a wise, spiritual mother. The person finds great happiness and contentment in domestic life." },
        { planet: "Venus", influence: "Ensures a beautiful, luxurious, and harmonious home. The person loves decorating, owns fine vehicles, and enjoys immense comforts and pleasures in private life." },
        { planet: "Saturn", influence: "Can indicate a cold, strict, or impoverished early home environment. The person may struggle to find inner peace and may live far away from their birthplace." },
        { planet: "Rahu", influence: "Creates a chaotic or highly unconventional home environment. The person may desire massive properties or frequently move to foreign lands, feeling restless at home." },
        { planet: "Ketu", influence: "Brings deep detachment from the homeland, mother, or physical properties. The person seeks spiritual peace rather than material comforts and may prefer extreme isolation." }
      ],
      faqs: [
        {
          question: 'Why is the 4th house related to vehicles?',
          answer: 'In traditional astrology, vehicles are seen as a form of comfort and conveyance (Vahana), which falls under the 4th house\'s domain of seeking physical and mental comfort. Benefics here often grant luxury cars.'
        },
        {
          question: 'How do I read my relationship with my mother?',
          answer: 'The planets situated in the 4th house, the planet that rules the 4th house, and the placement of the Moon (the natural significator of the mother) collectively describe the nature of your mother and your emotional bond with her.'
        },
        {
          question: 'What does a malefic in the 4th house mean for my happiness?',
          answer: 'Malefics (like Mars, Saturn, or Rahu) here can disrupt inner peace, causing anxiety, domestic arguments, or a feeling of being unsettled. Remedies often involve leaving the birthplace or practicing deep meditation to calm the mind.'
        }
      ]
    }
  },
  {
    id: '5th-house',
    name: '5th House',
    sanskritName: 'Putra Bhava',
    title: 'The 5th House in Astrology: Creativity, Children & Intellect',
    description: 'Learn about the 5th House in astrology. Discover how it influences your creative expression, intellect, romantic affairs, children, and past-life karma.',
    significator: 'Jupiter (Guru) for children and wisdom',
    content: {
      introduction: "The 5th House, known as Putra Bhava (the House of Children) and Vidya Bhava (the House of Knowledge), is the center of creation and joy. After establishing a secure base in the 4th house, the 5th house is where you express yourself uniquely to the world. Whether it is creating art, giving birth to children, pursuing romantic love, or generating brilliant new ideas, the 5th house governs all things that flow outwards from your heart and mind.",
      whatItRepresents: "This house governs children (progeny), intelligence, higher education, and romantic affairs. It is the house of fun, sports, and creative self-expression. It also strongly governs Speculation (stock markets, gambling, risk-taking). Crucially, in Vedic astrology, it is the house of 'Poorva Punya'—the good karma and spiritual merits you carry over from past lives. Benefic planets here indicate a sharp mind, happy children, success in romance, and natural luck. Afflictions can cause issues with childbirth, heartbreak, or losses in speculation.",
      keyThemes: "Children, romance, intellect, creativity, speculation, sports, mantras, spiritual initiation, and past-life merits (karma).",
      vedicVsWestern: "Western astrology associates the 5th house with Leo and the Sun, heavily focusing on romance, creative expression, theater, and fun. Vedic astrology fully agrees with these themes but adds a profound spiritual and karmic layer. In Jyotish, the 5th house represents your spiritual intelligence (Buddhi), your ability to learn and chant Mantras, and the exact karmic rewards you are receiving in this life due to past-life good deeds.",
      planetsInHouse: [
        { planet: "Sun", influence: "Brings strong intelligence, a flair for drama, and leadership in creative fields. However, its intense heat can sometimes cause delays or friction regarding children." },
        { planet: "Moon", influence: "Creates a highly romantic, imaginative, and nurturing individual. Excellent for creative writing or arts, and indicates a deep emotional bond with children." },
        { planet: "Mars", influence: "Brings a highly competitive approach to sports, romance, and speculation. The mind is sharp and analytical, but impulsive risks can lead to losses. Can cause arguments with children." },
        { planet: "Mercury", influence: "Outstanding for intellect, education, and learning. The person is highly analytical, excellent at writing or programming, and loves playing games or solving puzzles." },
        { planet: "Jupiter", influence: "A beautiful placement granting profound wisdom, high morals, and excellent education. However, as the significator of children, its placement here can occasionally cause slight delays in childbirth (Karako Bhava Nasaya)." },
        { planet: "Venus", influence: "Brings immense success in romance, the arts, and entertainment. The person is highly creative, loves luxury and fun, and usually has beautiful, artistic children." },
        { planet: "Saturn", influence: "Romance is taken very seriously or delayed. Education may involve heavy, structured subjects. Can cause significant delays or responsibilities regarding children." },
        { planet: "Rahu", influence: "Creates an obsession with romance, speculation, or entertainment. The person has a highly unconventional, out-of-the-box intellect but must avoid reckless gambling." },
        { planet: "Ketu", influence: "Brings detachment from romance or having biological children. The mind is highly intuitive and drawn to ancient mantras, mysticism, or deep spiritual research." }
      ],
      faqs: [
        {
          question: 'Does the 5th house show love marriage?',
          answer: 'Yes. The 5th house governs romance and love affairs, while the 7th house governs the legal binding of marriage. If the ruler of the 5th house connects with the 7th house, it strongly indicates marrying someone you fall in love with.'
        },
        {
          question: 'What does past-life karma (Poorva Punya) have to do with this house?',
          answer: 'In Vedic philosophy, sudden strokes of luck, innate talents you are born with, and the blessing of good children are seen as the result of good deeds performed in past lives. The 5th house reveals these stored merits.'
        },
        {
          question: 'Can the 5th house predict stock market success?',
          answer: 'Yes, it is the primary house of speculation and risk-taking. Benefic influences here (like Jupiter, Mercury, or Venus) give the intelligence and luck needed for trading, while malefic afflictions warn against gambling.'
        }
      ]
    }
  },
  {
    id: '6th-house',
    name: '6th House',
    sanskritName: 'Ripu Bhava',
    title: 'The 6th House in Astrology: Enemies, Health & Daily Service',
    description: 'Explore the 6th House in astrology. Discover how it influences your physical health, daily routine, debts, enemies, and service to others.',
    significator: 'Mars (Mangal) for enemies/courage, Saturn (Shani) for disease',
    content: {
      introduction: "The 6th House, known as Ripu Bhava (the House of Enemies) and Roga Bhava (the House of Disease), brings us back to the harsh realities of the physical world. After the fun and creativity of the 5th house, the 6th house represents the daily grind, the struggles we face, and the effort required to maintain our lives. It is considered a 'Dusthana' (difficult house), but it is crucially also an 'Upachaya' (growing house), meaning that with time, discipline, and effort, you can conquer the challenges presented here.",
      whatItRepresents: "This house governs health, acute diseases, debts, enemies, and litigation/lawsuits. It is also the house of daily routine, diet, pets, and service (your job, coworkers, and employees). While it brings obstacles, it also grants the capacity to overcome them. A strong 6th house creates a resilient individual who crushes their competition, pays off debts, and recovers quickly from illness. It is a highly active house for doctors, lawyers, and military personnel.",
      keyThemes: "Diseases, debts, enemies, daily service, routine jobs, coworkers, pets, litigation, healing, and overcoming obstacles.",
      vedicVsWestern: "Western astrology often softens the 6th house, focusing heavily on daily routines, wellness, diet, and small pets (associated with Virgo). Vedic astrology takes a much more martial approach, emphasizing 'Shatru' (enemies), 'Rin' (debt), and 'Roga' (disease). In the Vedic system, having strong malefic planets in the 6th house is highly desirable, as they provide the aggressive energy needed to defeat adversaries and survive hardships.",
      planetsInHouse: [
        { planet: "Sun", influence: "Excellent placement. The person easily defeats enemies, gains high positions in service (especially government), and enjoys robust health and vitality." },
        { planet: "Moon", influence: "Can indicate a weak constitution or emotionally induced illnesses. The person is highly empathetic and may find fulfillment in healing or serving others." },
        { planet: "Mars", influence: "One of the best placements. Mars here crushes enemies, destroys debts, and makes the person highly competitive. Great for sports, military, or surgery." },
        { planet: "Mercury", influence: "The analytical mind is applied to solving daily problems. Good for accounting, law, or medicine. Can indicate nervous system stress or overthinking." },
        { planet: "Jupiter", influence: "Protects against major diseases and enemies. The person is highly respected by coworkers and serves others with wisdom, though they may struggle with weight or liver issues." },
        { planet: "Venus", influence: "Brings harmony to the workplace and good relations with coworkers. The person may work in healing or beauty industries. Must avoid overindulgence leading to health issues." },
        { planet: "Saturn", influence: "Another excellent placement. Saturn here slowly but surely grinds enemies to dust. The person is extremely hardworking and disciplined in their daily routine." },
        { planet: "Rahu", influence: "Highly favorable. Rahu in the 6th makes the person invincible against competitors. They use clever, unconventional tactics to win lawsuits or climb the corporate ladder." },
        { planet: "Ketu", influence: "Brings mysterious, hard-to-diagnose health issues. The person is detached from office politics and may find success in alternative healing, acupuncture, or isolated service." }
      ],
      faqs: [
        {
          question: 'Are planets in the 6th house always bad?',
          answer: 'No! Because the 6th house is an Upachaya (house of growth), malefic planets (Mars, Saturn, Sun, Rahu) perform exceptionally well here. They provide the strength, grit, and competitive edge needed to defeat enemies and excel in life.'
        },
        {
          question: 'How does it relate to career compared to the 10th house?',
          answer: 'The 10th house is your ultimate career path, status, and public reputation. The 6th house is your day-to-day job, your daily grind, your interactions with coworkers, and the service you provide.'
        },
        {
          question: 'What does the 6th house say about health?',
          answer: 'It governs acute illnesses, your immune system, and your dietary habits. An afflicted 6th house can indicate chronic health struggles, while a strong one indicates quick recovery and a robust constitution.'
        }
      ]
    }
  }
];

const fileContentEn = `export interface HouseData {
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
    vedicVsWestern: string;
    planetsInHouse: { planet: string; influence: string }[];
    faqs: { question: string; answer: string }[];
  };
}

export const houses: HouseData[] = ${JSON.stringify(housesEnData, null, 2)};
`;

fs.writeFileSync('src/data/houses.ts', fileContentEn);
console.log('Successfully wrote houses.ts Part 1');
