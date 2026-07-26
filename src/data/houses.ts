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
    vedicVsWestern: string;
    planetsInHouse: { planet: string; influence: string }[];
    faqs: { question: string; answer: string }[];
  };
}

export const houses: HouseData[] = [
  {
    "id": "1st-house",
    "name": "1st House",
    "sanskritName": "Lagna Bhava",
    "title": "The 1st House (Lagna) in Astrology: Self, Identity & Body",
    "description": "Master the 1st House (Ascendant/Lagna) in astrology. Discover how it shapes your physical appearance, true personality, vitality, and your entire life path.",
    "significator": "Sun (Surya) for vitality, Moon (Chandra) for mind",
    "content": {
      "introduction": "The 1st House, also known as the Ascendant or Lagna, is the absolute foundation of your astrological birth chart. It represents the exact degree of the zodiac sign that was rising on the eastern horizon at the precise moment and location of your birth. In Vedic astrology, the Lagna is considered the anchor of the chart—every other house and planetary placement is calculated relative to this starting point. It marks your soul's entry into the physical world, setting the framework for your entire life's journey. Whatever sign falls in the 1st house becomes your rising sign, which strongly colors your outward personality, your physical body, and how the world instinctively perceives you.",
      "whatItRepresents": "The 1st House represents 'You' in the most physical, immediate, and holistic sense. It governs your physical body, appearance, complexion, overall health, and natural vitality. Beyond the physical, it is the house of self-discovery, ego, and your innate temperament. It dictates your approach to new beginnings and how you initiate actions in the world. When the 1st house and its ruling planet (the Lagnesha) are strong, the individual enjoys robust health, unshakeable confidence, a strong sense of purpose, and the ability to overcome life's obstacles. Conversely, a weak or afflicted 1st house can indicate struggles with self-identity, a lack of direction, or physical frailty and chronic health issues.",
      "keyThemes": "Self-image, physical body, appearance, beginnings, outward personality, health, longevity, ego, and how you project yourself into the world.",
      "vedicVsWestern": "In Western astrology, the Ascendant (1st house cusp) is heavily emphasized as the 'mask' you wear in public—your surface-level personality before people get to know your core Sun sign. In Vedic astrology (Jyotish), the Lagna is profoundly more significant. It is not just a mask; it is the physical manifestation of your life path. The Lagna and its Lord (Lagnesha) are seen as the supreme directors of the chart, often holding more weight in determining overall life success and physical well-being than the Sun sign itself.",
      "planetsInHouse": [
        {
          "planet": "Sun",
          "influence": "Brings natural leadership, radiant confidence, and a strong sense of self, but can sometimes make the individual overly proud or ego-driven."
        },
        {
          "planet": "Moon",
          "influence": "Creates a gentle, highly intuitive, and emotionally expressive personality. The person is often deeply empathetic but prone to mood swings."
        },
        {
          "planet": "Mars",
          "influence": "Provides incredible physical energy, courage, and a competitive drive. The person is highly independent but must guard against impulsiveness and anger."
        },
        {
          "planet": "Mercury",
          "influence": "Yields a youthful, communicative, and highly intellectual demeanor. The individual is quick-witted, adaptable, and naturally curious."
        },
        {
          "planet": "Jupiter",
          "influence": "One of the best placements. Brings optimism, wisdom, a philosophical nature, and natural protection against life's hardships. Often grants physical stature."
        },
        {
          "planet": "Venus",
          "influence": "Bestows physical beauty, charm, and a deeply diplomatic nature. The person naturally attracts others and has a strong appreciation for aesthetics."
        },
        {
          "planet": "Saturn",
          "influence": "Creates a serious, mature, and highly disciplined personality. Success may come slowly through hard work, and the person may look older than their years."
        },
        {
          "planet": "Rahu",
          "influence": "Brings intense ambition, a desire for recognition, and an unconventional approach to life. The person may frequently reinvent their identity."
        },
        {
          "planet": "Ketu",
          "influence": "Indicates a highly spiritual or detached personality. The person may struggle with self-identity or feel profoundly misunderstood by the material world."
        }
      ],
      "faqs": [
        {
          "question": "Why is the Lagna so important in Vedic Astrology?",
          "answer": "The Lagna is the anchor of the chart. All other houses (representing different areas of life) are calculated from this point. It represents your soul's entry into the physical world and dictates the primary focus, struggles, and strengths of your current life."
        },
        {
          "question": "What is the difference between my Sun sign and my Ascendant?",
          "answer": "Your Sun sign represents your core ego and deep soul motivations. The Ascendant (1st house) is your physical vehicle—your body, your immediate reactions, and how people first perceive you. In Vedic astrology, your life events are primarily timed from the Ascendant and the Moon."
        },
        {
          "question": "What happens if my 1st House is empty?",
          "answer": "An empty 1st house is very common and perfectly normal. You simply look at the zodiac sign ruling the 1st house and find where its ruling planet (the Ascendant Lord) is placed in your chart to understand the direction of your life."
        }
      ]
    }
  },
  {
    "id": "2nd-house",
    "name": "2nd House",
    "sanskritName": "Dhana Bhava",
    "title": "The 2nd House in Astrology: Wealth, Speech & Family",
    "description": "Explore the 2nd House in astrology. Discover how it dictates your accumulated wealth, personal values, speech, and early childhood family environment.",
    "significator": "Jupiter (Guru) for wealth, Mercury (Budh) for speech",
    "content": {
      "introduction": "The 2nd House in astrology is traditionally known as Dhana Bhava (the House of Wealth) and Kutumba Bhava (the House of Family). Following the birth of the self (1st house), the 2nd house represents the immediate resources you need to sustain yourself in the physical world. It is the house that dictates your financial stability, the values you hold dear, and the environment of your early childhood upbringing. It governs what you value, what you possess, and how you articulate your thoughts to the world.",
      "whatItRepresents": "This house governs accumulated wealth—your bank balances, liquid assets, investments, and material possessions (unlike the 11th house, which represents the flow of daily income). Beyond money, it is the primary house of speech (Vani), dictating how you talk, your tone of voice, and your truthfulness. It also represents the food you eat, your dietary habits, the face, the right eye, and your immediate family lineage. A strong 2nd house ensures financial security, a supportive family, and persuasive speech. Afflictions here can cause financial instability, harsh speech, or family disputes.",
      "keyThemes": "Accumulated wealth, savings, speech and voice, face, right eye, food habits, early family life, and core personal values.",
      "vedicVsWestern": "In Western astrology, the 2nd house is strongly associated with Taurus and Venus, focusing heavily on personal values, self-worth, and material possessions. Vedic astrology shares these themes but places a massive emphasis on speech (Vani) and the early childhood family (Kutumba). In Vedic analysis, the 2nd house is crucial for determining if a person will be a good speaker or singer, and what kind of sanskaras (values) they absorbed from their family during their formative years.",
      "planetsInHouse": [
        {
          "planet": "Sun",
          "influence": "Can bring wealth through government or authority figures. Speech is authoritative and commanding, but can sometimes be harsh or overly proud."
        },
        {
          "planet": "Moon",
          "influence": "Indicates fluctuating wealth. The person has a sweet, gentle voice and a deep emotional attachment to their family and financial security."
        },
        {
          "planet": "Mars",
          "influence": "Wealth is pursued aggressively and can be spent just as fast. Speech is direct, argumentative, or overly blunt. Good for debates."
        },
        {
          "planet": "Mercury",
          "influence": "Excellent for speech, writing, and business. The person is highly articulate, persuasive, and can earn wealth through communication or commerce."
        },
        {
          "planet": "Jupiter",
          "influence": "A very auspicious placement for accumulating wealth, especially through knowledge or teaching. Speech is wise, truthful, and philosophical."
        },
        {
          "planet": "Venus",
          "influence": "Attracts wealth easily and spends it on luxury, beauty, and good food. The voice is melodious, making it a great placement for singers."
        },
        {
          "planet": "Saturn",
          "influence": "Wealth accumulates slowly through hard work and extreme frugality. Speech is serious and deliberate. Can indicate early family struggles."
        },
        {
          "planet": "Rahu",
          "influence": "Creates an intense, obsessive desire for wealth and unconventional dietary habits. Speech can be highly persuasive, manipulative, or foreign-sounding."
        },
        {
          "planet": "Ketu",
          "influence": "Brings detachment from wealth and family. The person may struggle to hold onto money or prefer a minimalist lifestyle. Speech is highly intuitive."
        }
      ],
      "faqs": [
        {
          "question": "Does the 2nd house show how I will make my career?",
          "answer": "Not directly. The 10th house shows your career and the 11th shows your business profits or paycheck. The 2nd house shows your capacity to *save* and accumulate that wealth into lasting assets."
        },
        {
          "question": "How does the 2nd house affect speech?",
          "answer": "The planets in and ruling the 2nd house color your voice. Benefics like Venus or Jupiter make speech sweet and persuasive. Malefics like Mars or Rahu can make speech harsh, sarcastic, or indicate a tendency to lie or exaggerate."
        },
        {
          "question": "Why does the 2nd house represent food?",
          "answer": "The 2nd house rules the mouth, teeth, and tongue. Therefore, it governs intake—both what you speak out and what you eat. Planets here often dictate dietary preferences and potential food-related health issues."
        }
      ]
    }
  },
  {
    "id": "3rd-house",
    "name": "3rd House",
    "sanskritName": "Sahaja Bhava",
    "title": "The 3rd House in Astrology: Courage, Communication & Siblings",
    "description": "Learn about the 3rd House in astrology. Discover how it impacts your courage, communication skills, younger siblings, and short journeys.",
    "significator": "Mars (Mangal) for courage, Mercury (Budh) for communication",
    "content": {
      "introduction": "The 3rd House, known as Sahaja Bhava (House of Siblings) or Parakrama Bhava (House of Courage), is the domain of self-effort and willpower. It represents how you exert your energy to overcome challenges and interact with your immediate environment. Following the accumulation of resources in the 2nd house, the 3rd house is where you take those resources and begin to explore, communicate, and assert yourself in the local world.",
      "whatItRepresents": "This house governs younger siblings, neighbors, and short-distance travel. It is heavily tied to all forms of communication—writing, speaking, media, journalism, internet, and how you articulate your thoughts. More importantly, in Vedic astrology, it represents your courage (Parakrama), your hobbies, your skills with your hands, and the raw effort you are willing to put into achieving your goals. A strong 3rd house makes a person bold, highly communicative, and self-made. A weak 3rd house can lead to a lack of motivation, fearfulness, or strained relationships with siblings.",
      "keyThemes": "Younger siblings, courage, self-effort, communication, writing, short journeys, neighbors, hobbies, and manual skills.",
      "vedicVsWestern": "Western astrology strongly associates the 3rd house with Gemini and Mercury, focusing primarily on communication, local travel, and the lower mind (early education). Vedic astrology expands this significantly by adding the concept of 'Parakrama' (courage and valor), heavily associating the house with Mars. In Jyotish, the 3rd house is an 'Upachaya' (growing) house, meaning that challenges here improve over time through the individual's sheer willpower and effort.",
      "planetsInHouse": [
        {
          "planet": "Sun",
          "influence": "Brings immense courage, independence, and leadership skills. The person is highly self-motivated but may have ego clashes with younger siblings."
        },
        {
          "planet": "Moon",
          "influence": "Creates a highly imaginative and expressive mind. The person loves short trips and communicates with deep emotion, but courage can fluctuate with moods."
        },
        {
          "planet": "Mars",
          "influence": "An excellent placement. Grants phenomenal courage, competitive drive, and the ability to crush obstacles. However, it can cause significant friction with siblings."
        },
        {
          "planet": "Mercury",
          "influence": "Highly favorable for writers, journalists, and salespeople. The intellect is sharp, curious, and the person possesses excellent communication skills."
        },
        {
          "planet": "Jupiter",
          "influence": "Communication is philosophical, wise, and optimistic. The person has good relations with siblings and may act as a teacher or guide to them."
        },
        {
          "planet": "Venus",
          "influence": "Brings artistic talents, especially with the hands (painting, instruments). Communication is sweet, diplomatic, and the person loves pleasant short journeys."
        },
        {
          "planet": "Saturn",
          "influence": "Effort yields results slowly. The person is cautious, highly disciplined in their skills, and may experience distance or heavy responsibility regarding siblings."
        },
        {
          "planet": "Rahu",
          "influence": "Grants immense bravery and an obsession with media, internet, or publishing. The person uses unconventional methods to communicate and achieve their goals."
        },
        {
          "planet": "Ketu",
          "influence": "The person may feel detached from their siblings or local environment. Communication is highly intuitive or sparse. Good for deep, isolated research."
        }
      ],
      "faqs": [
        {
          "question": "What does an active 3rd house indicate for a career?",
          "answer": "It strongly favors careers that require constant communication, self-driven effort, or manual dexterity. This includes media, writing, sales, journalism, IT, programming, and playing musical instruments."
        },
        {
          "question": "How does it relate to siblings?",
          "answer": "The 3rd house specifically represents younger siblings and your relationship with them. (The 11th house represents elder siblings). Malefic planets here might indicate friction, competition, or distance from younger siblings."
        },
        {
          "question": "Why are malefic planets considered good here?",
          "answer": "Because the 3rd house is about fighting battles and putting in effort. Malefic planets (Mars, Saturn, Rahu) are naturally aggressive and tough, giving you the necessary grit and competitive edge to overcome obstacles."
        }
      ]
    }
  },
  {
    "id": "4th-house",
    "name": "4th House",
    "sanskritName": "Sukh Bhava",
    "title": "The 4th House in Astrology: Mother, Home & Inner Peace",
    "description": "Explore the 4th House in astrology. Discover how it influences your mother, home environment, emotional peace, real estate, and foundational happiness.",
    "significator": "Moon (Chandra) for mother and mind, Venus (Shukra) for vehicles",
    "content": {
      "introduction": "The 4th House, known as Sukh Bhava (the House of Happiness), sits at the very bottom (nadir) of the birth chart. It represents the foundational roots of your life. After exploring the immediate environment in the 3rd house, the 4th house is where you retreat for comfort, safety, and emotional nourishment. It governs your private life, your deepest psychological foundations, and the ultimate sense of inner peace.",
      "whatItRepresents": "This house governs the mother and your relationship with her, reflecting how you were nurtured. It represents your physical home, homeland, real estate, land ownership, and vehicles (conveyances). It is also the house of early education (up to high school). Most importantly, the 4th house represents the state of your inner mind and your capacity for contentment. A strong 4th house brings a peaceful mind, property ownership, supportive motherly figures, and a happy domestic life. An afflicted 4th house can cause domestic turmoil, frequent changes in residence, or a chronic lack of mental peace.",
      "keyThemes": "Mother, physical home, homeland, inner peace, happiness (Sukh), vehicles, real estate, early education, and psychological foundations.",
      "vedicVsWestern": "In both Western and Vedic astrology, the 4th house is closely tied to the home, ancestry, and the emotional core (often associated with Cancer and the Moon). However, in Vedic astrology, there is a very specific emphasis on the 4th house governing vehicles (Vahana) and physical real estate (Bhumi). It is deeply analyzed to determine if a person will own a house or luxury cars, and whether they will find true 'Sukh' (inner happiness) in their life.",
      "planetsInHouse": [
        {
          "planet": "Sun",
          "influence": "Can create a domineering atmosphere at home or ego clashes with parents. However, it gives a strong attachment to the homeland and potential for owning grand properties."
        },
        {
          "planet": "Moon",
          "influence": "The Moon is completely at home here. Brings deep emotional attachment to the mother, a love for the domestic environment, and a need for emotional security at home."
        },
        {
          "planet": "Mars",
          "influence": "Can cause significant domestic arguments or a restless mind (creating Mangal Dosha). However, it is excellent for acquiring real estate, land, and working in construction."
        },
        {
          "planet": "Mercury",
          "influence": "Brings a lively, intellectual, and communicative home environment. Excellent for early education and often indicates running a business from home."
        },
        {
          "planet": "Jupiter",
          "influence": "Brings immense peace, a large and comfortable home, and a wise, spiritual mother. The person finds great happiness and contentment in domestic life."
        },
        {
          "planet": "Venus",
          "influence": "Ensures a beautiful, luxurious, and harmonious home. The person loves decorating, owns fine vehicles, and enjoys immense comforts and pleasures in private life."
        },
        {
          "planet": "Saturn",
          "influence": "Can indicate a cold, strict, or impoverished early home environment. The person may struggle to find inner peace and may live far away from their birthplace."
        },
        {
          "planet": "Rahu",
          "influence": "Creates a chaotic or highly unconventional home environment. The person may desire massive properties or frequently move to foreign lands, feeling restless at home."
        },
        {
          "planet": "Ketu",
          "influence": "Brings deep detachment from the homeland, mother, or physical properties. The person seeks spiritual peace rather than material comforts and may prefer extreme isolation."
        }
      ],
      "faqs": [
        {
          "question": "Why is the 4th house related to vehicles?",
          "answer": "In traditional astrology, vehicles are seen as a form of comfort and conveyance (Vahana), which falls under the 4th house's domain of seeking physical and mental comfort. Benefics here often grant luxury cars."
        },
        {
          "question": "How do I read my relationship with my mother?",
          "answer": "The planets situated in the 4th house, the planet that rules the 4th house, and the placement of the Moon (the natural significator of the mother) collectively describe the nature of your mother and your emotional bond with her."
        },
        {
          "question": "What does a malefic in the 4th house mean for my happiness?",
          "answer": "Malefics (like Mars, Saturn, or Rahu) here can disrupt inner peace, causing anxiety, domestic arguments, or a feeling of being unsettled. Remedies often involve leaving the birthplace or practicing deep meditation to calm the mind."
        }
      ]
    }
  },
  {
    "id": "5th-house",
    "name": "5th House",
    "sanskritName": "Putra Bhava",
    "title": "The 5th House in Astrology: Creativity, Children & Intellect",
    "description": "Learn about the 5th House in astrology. Discover how it influences your creative expression, intellect, romantic affairs, children, and past-life karma.",
    "significator": "Jupiter (Guru) for children and wisdom",
    "content": {
      "introduction": "The 5th House, known as Putra Bhava (the House of Children) and Vidya Bhava (the House of Knowledge), is the center of creation and joy. After establishing a secure base in the 4th house, the 5th house is where you express yourself uniquely to the world. Whether it is creating art, giving birth to children, pursuing romantic love, or generating brilliant new ideas, the 5th house governs all things that flow outwards from your heart and mind.",
      "whatItRepresents": "This house governs children (progeny), intelligence, higher education, and romantic affairs. It is the house of fun, sports, and creative self-expression. It also strongly governs Speculation (stock markets, gambling, risk-taking). Crucially, in Vedic astrology, it is the house of 'Poorva Punya'—the good karma and spiritual merits you carry over from past lives. Benefic planets here indicate a sharp mind, happy children, success in romance, and natural luck. Afflictions can cause issues with childbirth, heartbreak, or losses in speculation.",
      "keyThemes": "Children, romance, intellect, creativity, speculation, sports, mantras, spiritual initiation, and past-life merits (karma).",
      "vedicVsWestern": "Western astrology associates the 5th house with Leo and the Sun, heavily focusing on romance, creative expression, theater, and fun. Vedic astrology fully agrees with these themes but adds a profound spiritual and karmic layer. In Jyotish, the 5th house represents your spiritual intelligence (Buddhi), your ability to learn and chant Mantras, and the exact karmic rewards you are receiving in this life due to past-life good deeds.",
      "planetsInHouse": [
        {
          "planet": "Sun",
          "influence": "Brings strong intelligence, a flair for drama, and leadership in creative fields. However, its intense heat can sometimes cause delays or friction regarding children."
        },
        {
          "planet": "Moon",
          "influence": "Creates a highly romantic, imaginative, and nurturing individual. Excellent for creative writing or arts, and indicates a deep emotional bond with children."
        },
        {
          "planet": "Mars",
          "influence": "Brings a highly competitive approach to sports, romance, and speculation. The mind is sharp and analytical, but impulsive risks can lead to losses. Can cause arguments with children."
        },
        {
          "planet": "Mercury",
          "influence": "Outstanding for intellect, education, and learning. The person is highly analytical, excellent at writing or programming, and loves playing games or solving puzzles."
        },
        {
          "planet": "Jupiter",
          "influence": "A beautiful placement granting profound wisdom, high morals, and excellent education. However, as the significator of children, its placement here can occasionally cause slight delays in childbirth (Karako Bhava Nasaya)."
        },
        {
          "planet": "Venus",
          "influence": "Brings immense success in romance, the arts, and entertainment. The person is highly creative, loves luxury and fun, and usually has beautiful, artistic children."
        },
        {
          "planet": "Saturn",
          "influence": "Romance is taken very seriously or delayed. Education may involve heavy, structured subjects. Can cause significant delays or responsibilities regarding children."
        },
        {
          "planet": "Rahu",
          "influence": "Creates an obsession with romance, speculation, or entertainment. The person has a highly unconventional, out-of-the-box intellect but must avoid reckless gambling."
        },
        {
          "planet": "Ketu",
          "influence": "Brings detachment from romance or having biological children. The mind is highly intuitive and drawn to ancient mantras, mysticism, or deep spiritual research."
        }
      ],
      "faqs": [
        {
          "question": "Does the 5th house show love marriage?",
          "answer": "Yes. The 5th house governs romance and love affairs, while the 7th house governs the legal binding of marriage. If the ruler of the 5th house connects with the 7th house, it strongly indicates marrying someone you fall in love with."
        },
        {
          "question": "What does past-life karma (Poorva Punya) have to do with this house?",
          "answer": "In Vedic philosophy, sudden strokes of luck, innate talents you are born with, and the blessing of good children are seen as the result of good deeds performed in past lives. The 5th house reveals these stored merits."
        },
        {
          "question": "Can the 5th house predict stock market success?",
          "answer": "Yes, it is the primary house of speculation and risk-taking. Benefic influences here (like Jupiter, Mercury, or Venus) give the intelligence and luck needed for trading, while malefic afflictions warn against gambling."
        }
      ]
    }
  },
  {
    "id": "6th-house",
    "name": "6th House",
    "sanskritName": "Ripu Bhava",
    "title": "The 6th House in Astrology: Enemies, Health & Daily Service",
    "description": "Explore the 6th House in astrology. Discover how it influences your physical health, daily routine, debts, enemies, and service to others.",
    "significator": "Mars (Mangal) for enemies/courage, Saturn (Shani) for disease",
    "content": {
      "introduction": "The 6th House, known as Ripu Bhava (the House of Enemies) and Roga Bhava (the House of Disease), brings us back to the harsh realities of the physical world. After the fun and creativity of the 5th house, the 6th house represents the daily grind, the struggles we face, and the effort required to maintain our lives. It is considered a 'Dusthana' (difficult house), but it is crucially also an 'Upachaya' (growing house), meaning that with time, discipline, and effort, you can conquer the challenges presented here.",
      "whatItRepresents": "This house governs health, acute diseases, debts, enemies, and litigation/lawsuits. It is also the house of daily routine, diet, pets, and service (your job, coworkers, and employees). While it brings obstacles, it also grants the capacity to overcome them. A strong 6th house creates a resilient individual who crushes their competition, pays off debts, and recovers quickly from illness. It is a highly active house for doctors, lawyers, and military personnel.",
      "keyThemes": "Diseases, debts, enemies, daily service, routine jobs, coworkers, pets, litigation, healing, and overcoming obstacles.",
      "vedicVsWestern": "Western astrology often softens the 6th house, focusing heavily on daily routines, wellness, diet, and small pets (associated with Virgo). Vedic astrology takes a much more martial approach, emphasizing 'Shatru' (enemies), 'Rin' (debt), and 'Roga' (disease). In the Vedic system, having strong malefic planets in the 6th house is highly desirable, as they provide the aggressive energy needed to defeat adversaries and survive hardships.",
      "planetsInHouse": [
        {
          "planet": "Sun",
          "influence": "Excellent placement. The person easily defeats enemies, gains high positions in service (especially government), and enjoys robust health and vitality."
        },
        {
          "planet": "Moon",
          "influence": "Can indicate a weak constitution or emotionally induced illnesses. The person is highly empathetic and may find fulfillment in healing or serving others."
        },
        {
          "planet": "Mars",
          "influence": "One of the best placements. Mars here crushes enemies, destroys debts, and makes the person highly competitive. Great for sports, military, or surgery."
        },
        {
          "planet": "Mercury",
          "influence": "The analytical mind is applied to solving daily problems. Good for accounting, law, or medicine. Can indicate nervous system stress or overthinking."
        },
        {
          "planet": "Jupiter",
          "influence": "Protects against major diseases and enemies. The person is highly respected by coworkers and serves others with wisdom, though they may struggle with weight or liver issues."
        },
        {
          "planet": "Venus",
          "influence": "Brings harmony to the workplace and good relations with coworkers. The person may work in healing or beauty industries. Must avoid overindulgence leading to health issues."
        },
        {
          "planet": "Saturn",
          "influence": "Another excellent placement. Saturn here slowly but surely grinds enemies to dust. The person is extremely hardworking and disciplined in their daily routine."
        },
        {
          "planet": "Rahu",
          "influence": "Highly favorable. Rahu in the 6th makes the person invincible against competitors. They use clever, unconventional tactics to win lawsuits or climb the corporate ladder."
        },
        {
          "planet": "Ketu",
          "influence": "Brings mysterious, hard-to-diagnose health issues. The person is detached from office politics and may find success in alternative healing, acupuncture, or isolated service."
        }
      ],
      "faqs": [
        {
          "question": "Are planets in the 6th house always bad?",
          "answer": "No! Because the 6th house is an Upachaya (house of growth), malefic planets (Mars, Saturn, Sun, Rahu) perform exceptionally well here. They provide the strength, grit, and competitive edge needed to defeat enemies and excel in life."
        },
        {
          "question": "How does it relate to career compared to the 10th house?",
          "answer": "The 10th house is your ultimate career path, status, and public reputation. The 6th house is your day-to-day job, your daily grind, your interactions with coworkers, and the service you provide."
        },
        {
          "question": "What does the 6th house say about health?",
          "answer": "It governs acute illnesses, your immune system, and your dietary habits. An afflicted 6th house can indicate chronic health struggles, while a strong one indicates quick recovery and a robust constitution."
        }
      ]
    }
  },
  {
    "id": "7th-house",
    "name": "7th House",
    "sanskritName": "Kalatra Bhava",
    "title": "The 7th House in Astrology: Marriage, Partnerships & The Public",
    "description": "Learn about the 7th House in astrology. Discover how it influences your marriage, life partner, business partnerships, contracts, and public dealings.",
    "significator": "Venus (Shukra)",
    "content": {
      "introduction": "The 7th House, known as Kalatra Bhava (the House of Spouse), is situated exactly opposite the 1st house on the astrological wheel. While the 1st house is the 'Self', the 7th house is the 'Other'. It represents the mirror to your soul, focusing on how you relate to the world on a one-to-one basis. This house governs all committed partnerships, primarily marriage, but also vital business relationships and legal contracts.",
      "whatItRepresents": "This house governs your spouse, the nature and happiness of your marriage, business partnerships, and all legally binding agreements. It also relates to how you interact with the public, your popularity, and even open enemies (those who oppose you directly, unlike the hidden enemies of the 6th house). A strong 7th house indicates a supportive, loving spouse and success in business partnerships. Afflictions here can cause marital discord, delays in marriage, or betrayal by partners.",
      "keyThemes": "Marriage, spouse, business partnerships, contracts, public image, one-on-one relationships, foreign travel for business, and open enemies.",
      "vedicVsWestern": "Both systems universally associate the 7th house with marriage and partnerships. In Vedic astrology, however, the 7th house is scrutinized meticulously through planetary periods (Dashas) and the Navamsha chart (D9) to predict the exact timing of marriage and the physical/psychological traits of the spouse. It is also considered a 'Maraka' (death-inflicting) house, because losing oneself in another (marriage) or the culmination of desires can symbolically represent the end of the individual ego.",
      "planetsInHouse": [
        {
          "planet": "Sun",
          "influence": "Can bring a powerful, authoritative, or wealthy spouse. However, ego clashes and dominance issues are highly likely in the marriage."
        },
        {
          "planet": "Moon",
          "influence": "Brings a gentle, caring, and emotionally sensitive spouse. The person seeks deep emotional connection in marriage, but relationships can fluctuate with moods."
        },
        {
          "planet": "Mars",
          "influence": "Creates Mangal Dosha (Kuja Dosha). Indicates a passionate but highly argumentative marriage. The spouse is aggressive and independent. Excellent for dynamic business partnerships."
        },
        {
          "planet": "Mercury",
          "influence": "The spouse is youthful, talkative, and highly intellectual. Communication is the foundation of the marriage. Good for trade and commerce."
        },
        {
          "planet": "Jupiter",
          "influence": "Highly auspicious for marriage. Brings a wise, loyal, and spiritual spouse. The marriage is harmonious, and the person gains wealth and status through partnerships."
        },
        {
          "planet": "Venus",
          "influence": "The natural significator of marriage placed in its own house. Brings a beautiful, artistic, and romantic spouse. However, too much Venusian energy can sometimes lead to excessive indulgence or high expectations."
        },
        {
          "planet": "Saturn",
          "influence": "Gains directional strength (Digbala) here. Indicates a late marriage to a mature, serious, or older partner. The marriage is based on duty, loyalty, and practical foundation rather than pure romance."
        },
        {
          "planet": "Rahu",
          "influence": "Indicates an unconventional marriage, often to someone from a different culture, religion, or foreign land. The person may have obsessive desires regarding relationships."
        },
        {
          "planet": "Ketu",
          "influence": "The person may feel detached from their spouse or traditional marriage structures. They seek a deeply spiritual connection or may experience sudden relationship endings."
        }
      ],
      "faqs": [
        {
          "question": "How do I know the characteristics of my future spouse?",
          "answer": "Look at the zodiac sign ruling the 7th house, the planets placed inside it, and the condition of the 7th house lord. For example, Mercury connected to the 7th house suggests a youthful and communicative partner."
        },
        {
          "question": "Is the 7th house only about romance?",
          "answer": "No. While the 5th house rules romance and dating, the 7th house rules committed, legally binding partnerships. This includes business partners and long-term marital commitments."
        },
        {
          "question": "What is a Maraka house?",
          "answer": "In Vedic astrology, the 2nd and 7th houses are Maraka (death-inflicting) houses. Because the 7th is the farthest point from the 1st house (birth/self), it represents the sunset of life and the exhaustion of physical energy."
        }
      ]
    }
  },
  {
    "id": "8th-house",
    "name": "8th House",
    "sanskritName": "Ayu Bhava / Randhra Bhava",
    "title": "The 8th House in Astrology: Transformation, Occult & Longevity",
    "description": "Explore the 8th House in astrology. Discover how it influences sudden life changes, hidden wealth, occult sciences, deep trauma, and longevity.",
    "significator": "Saturn (Shani) for longevity",
    "content": {
      "introduction": "The 8th House is the most mysterious, profound, and often misunderstood house in astrology. Known as Randhra Bhava (the House of Vulnerability/Hidden Things) and Ayu Bhava (the House of Longevity), it is a Dusthana (difficult house) that rules the unseen. It governs the dark, hidden depths of the human experience, bringing sudden transformations, crises, and ultimate rebirth. It is the house of the phoenix rising from the ashes.",
      "whatItRepresents": "This house governs longevity, death, sudden events (accidents, sudden windfalls, or sudden losses), hidden wealth (inheritance, lottery, spouse's wealth, taxes), and the occult sciences (astrology, magic, psychology, deep research). It is a house of profound psychological transformation, secrets, and deep intimacy. Planets here often cause sudden upheavals and painful ego-deaths, but they also provide unparalleled spiritual depth and the ability to see beyond the material veil.",
      "keyThemes": "Longevity, death and rebirth, sudden changes, inheritance, occult knowledge, deep research, secrets, hidden wealth, trauma, and psychological transformation.",
      "vedicVsWestern": "Western astrology associates the 8th house with Scorpio and Pluto, focusing heavily on sex, death, taxes, shared resources, and psychological depths. Vedic astrology aligns with this but places a massive emphasis on 'Ayu' (longevity) and sudden, unpredictable karmic events. In Jyotish, the 8th house is the most secretive house, and planets placed here often have their material significations destroyed or hidden, while their spiritual or research-oriented qualities are magnified.",
      "planetsInHouse": [
        {
          "planet": "Sun",
          "influence": "Can indicate a struggle with authority or a sudden loss of reputation, but gives profound spiritual insight and potential inheritance from the father."
        },
        {
          "planet": "Moon",
          "influence": "Creates intense emotional depth, strong intuition, and an interest in the occult. The person may experience sudden emotional fluctuations or possess healing abilities."
        },
        {
          "planet": "Mars",
          "influence": "Forms a strong Mangal Dosha. The person is fearless and drawn to dangerous situations or deep research. Must be cautious of sudden accidents or surgeries."
        },
        {
          "planet": "Mercury",
          "influence": "An excellent placement for researchers, psychologists, investigators, and astrologers. The mind loves to probe deep secrets and uncover hidden truths."
        },
        {
          "planet": "Jupiter",
          "influence": "Protects longevity and brings sudden wealth through inheritance or marriage. The person has a deep, philosophical interest in the occult and life after death."
        },
        {
          "planet": "Venus",
          "influence": "Can bring wealth through the spouse (alimony, joint finances). The person seeks deep, intense, and transformative romantic and physical intimacy."
        },
        {
          "planet": "Saturn",
          "influence": "Excellent for longevity (Saturn is the Karaka of the 8th house). Brings a long life but one that may involve chronic struggles. The person is deeply serious about the mysteries of life."
        },
        {
          "planet": "Rahu",
          "influence": "Creates a fascination with the dark, taboo, or occult subjects. Can bring sudden, massive, but unstable wealth. The person must avoid shady financial dealings."
        },
        {
          "planet": "Ketu",
          "influence": "Highly spiritual placement. The person has natural psychic abilities and is detached from material wealth. They may experience sudden spiritual awakenings through loss."
        }
      ],
      "faqs": [
        {
          "question": "Does the 8th house predict death?",
          "answer": "While it is the house of longevity (Ayu), it is more accurately the house of \"transformation.\" It shows how you undergo massive life changes and ego-deaths, not necessarily physical death."
        },
        {
          "question": "Is it a bad house to have planets in?",
          "answer": "Materially, it can be challenging as it brings sudden, unpredictable events and delays. However, spiritually and intellectually, it is phenomenal. It creates top-tier researchers, surgeons, astrologers, and spiritual masters."
        },
        {
          "question": "How does it relate to wealth?",
          "answer": "The 8th house represents \"unearned\" or hidden wealth. This includes inheritance, lottery winnings, insurance payouts, tax returns, and the wealth of your spouse."
        }
      ]
    }
  },
  {
    "id": "9th-house",
    "name": "9th House",
    "sanskritName": "Bhagya Bhava",
    "title": "The 9th House in Astrology: Fortune, Dharma & Higher Knowledge",
    "description": "Learn about the 9th House in astrology. Discover how it influences your luck, religious beliefs, philosophy, father figures, and long-distance travel.",
    "significator": "Jupiter (Guru) for wisdom, Sun (Surya) for father",
    "content": {
      "introduction": "The 9th House, known as Bhagya Bhava (the House of Fortune) and Dharma Bhava (the House of Righteousness), is considered the most auspicious and fortunate house (Trikona) in Vedic astrology. After surviving the transformative crises of the 8th house, the soul seeks higher meaning and divine grace in the 9th house. It represents your Dharma (righteous path), your luck, and the grace you receive in this life as a result of good karma from past lives.",
      "whatItRepresents": "This house governs religion, philosophy, higher education (universities and advanced degrees), long-distance travel, and foreign cultures. Crucially, in Vedic astrology, it represents the father, your gurus, and spiritual teachers. A strong 9th house brings natural luck, a strong moral compass, a deep inclination towards spirituality and truth, and a life where obstacles seem to clear away effortlessly. It is the highest protective shield in the birth chart.",
      "keyThemes": "Luck, fortune (Bhagya), Dharma, religion, philosophy, father, gurus/teachers, long-distance travel, higher education, and divine grace.",
      "vedicVsWestern": "Western astrology aligns the 9th house with Sagittarius and Jupiter, focusing heavily on higher education, long-distance travel, broadcasting, and broad-minded philosophy. Vedic astrology deeply emphasizes 'Dharma' (duty/righteousness) and 'Bhagya' (luck). In Jyotish, the 9th house is also the primary house of the Father (representing his teachings and guidance), whereas Western astrology often assigns the father to the 4th or 10th houses.",
      "planetsInHouse": [
        {
          "planet": "Sun",
          "influence": "Brings strong morals, leadership in religious or educational institutions, and a powerful father figure. The person is highly principled and seeks truth."
        },
        {
          "planet": "Moon",
          "influence": "Creates a highly imaginative and empathetic philosopher. The person loves long-distance travel and feels an emotional connection to their faith and teachers."
        },
        {
          "planet": "Mars",
          "influence": "The person acts aggressively on their beliefs. They may become a crusader for their religion or philosophy, but must avoid becoming overly dogmatic or arguing with their father."
        },
        {
          "planet": "Mercury",
          "influence": "Excellent for higher education, writing, and publishing. The person approaches religion and philosophy with logic, curiosity, and a desire to learn constantly."
        },
        {
          "planet": "Jupiter",
          "influence": "The best possible placement. Jupiter is in its own element here. Brings immense luck, divine protection, deep wisdom, and a natural inclination to teach or guide others."
        },
        {
          "planet": "Venus",
          "influence": "The person loves traveling to beautiful foreign lands and may marry someone from a different culture. They have a harmonious, loving approach to spirituality."
        },
        {
          "planet": "Saturn",
          "influence": "Faith and wisdom come slowly through hard experience. The person is highly traditional, disciplined in their religious practices, and respects ancient structures."
        },
        {
          "planet": "Rahu",
          "influence": "Creates a desire to explore foreign cultures and unconventional philosophies. The person may reject traditional religion in favor of unique, foreign, or highly individualized spiritual paths."
        },
        {
          "planet": "Ketu",
          "influence": "Brings deep, innate spiritual wisdom from past lives. The person is naturally detached from dogmatic religion and seeks direct, mystical connection with the divine."
        }
      ],
      "faqs": [
        {
          "question": "Why is the 9th house called the house of luck?",
          "answer": "It represents the grace of the divine and the culmination of past-life good deeds. When this house is strong, the universe seems to naturally support your endeavors, bringing right opportunities at the right time."
        },
        {
          "question": "Does it represent the father?",
          "answer": "In Vedic astrology, yes. The 9th house is the primary house of the father (Pitru Bhava), representing his teachings, his influence on your morals, and your overall relationship with him."
        },
        {
          "question": "How does it relate to travel?",
          "answer": "While the 3rd house rules short, local trips, the 9th house rules long-distance travel, international journeys, and pilgrimages, particularly travel that broadens your horizons and perspective."
        }
      ]
    }
  },
  {
    "id": "10th-house",
    "name": "10th House",
    "sanskritName": "Karma Bhava",
    "title": "The 10th House in Astrology: Career, Status & Karma",
    "description": "Explore the 10th House in astrology. Discover how it influences your career trajectory, public reputation, authority, and worldly achievements.",
    "significator": "Sun, Mercury, Jupiter, Saturn (Multiple Karakas)",
    "content": {
      "introduction": "The 10th House, known as Karma Bhava (the House of Action), is the highest point in the birth chart (the Midheaven). It represents the peak of your visible life, your career, and the mark you leave on the world. It is the house of action, duty, and worldly achievements. While the 4th house is your private foundation, the 10th house is how the public, society, and history will remember you.",
      "whatItRepresents": "This house governs your profession, career trajectory, public reputation, status, and authority. It also dictates your relationship with the government, authority figures, and large corporations. Planets in the 10th house are highly visible to the world and strongly dictate the nature of your career. A strong 10th house brings fame, power, executive leadership, and massive professional success. It is the most powerful angular (Kendra) house.",
      "keyThemes": "Career, profession, public status, reputation, fame, authority, government, executive power, and worldly karma.",
      "vedicVsWestern": "Both Western and Vedic systems view the 10th house as the pinnacle of career and public life, associated with Capricorn and Saturn. Vedic astrology takes it a step further by calling it 'Karma Bhava'—the house of the actions you are destined to perform in this world. It is heavily analyzed alongside the Dashamsha (D10) divisional chart to determine precise career paths, periods of promotion, and professional downfalls.",
      "planetsInHouse": [
        {
          "planet": "Sun",
          "influence": "Gains directional strength (Digbala) here. The ultimate placement for leadership, CEO roles, government positions, and fame. The person naturally commands respect."
        },
        {
          "planet": "Moon",
          "influence": "Career may involve the public, nurturing, food, or psychology. The person's public image is seen as caring, but career path may have many emotional fluctuations."
        },
        {
          "planet": "Mars",
          "influence": "Gains directional strength (Digbala). Brings ruthless ambition, executive power, and unparalleled drive. Excellent for military, engineering, business, and competitive fields."
        },
        {
          "planet": "Mercury",
          "influence": "Highly favorable for careers in communication, IT, writing, commerce, and accounting. The person is known for their sharp intellect and professional adaptability."
        },
        {
          "planet": "Jupiter",
          "influence": "Brings immense respect, an honorable reputation, and a career in teaching, law, finance, or advising. The person is seen as a moral and wise leader."
        },
        {
          "planet": "Venus",
          "influence": "Career involves art, beauty, fashion, entertainment, or diplomacy. The person is highly popular in their profession and creates harmonious work environments."
        },
        {
          "planet": "Saturn",
          "influence": "The natural ruler of the 10th house. Brings immense, lasting success, but only through intense hard work, delay, and discipline. Favorable for politics, heavy industry, or administration."
        },
        {
          "planet": "Rahu",
          "influence": "Creates a massive, almost obsessive drive for worldly power and status. The person can achieve sudden, astronomical fame or success, often in unconventional or modern fields."
        },
        {
          "planet": "Ketu",
          "influence": "The person feels detached from traditional career climbing. They may change jobs frequently or find ultimate success in spiritual fields, healing, or working behind the scenes."
        }
      ],
      "faqs": [
        {
          "question": "How does the 10th house differ from the 6th house (jobs)?",
          "answer": "The 6th house is your daily grind, your service, and your interactions with coworkers. The 10th house is your overarching career trajectory, your title, and how the public views your professional status."
        },
        {
          "question": "Which planets are best in the 10th house?",
          "answer": "The Sun and Mars gain directional strength (Digbala) here, making them incredibly powerful for achieving high status, leadership, and crushing professional obstacles."
        },
        {
          "question": "Does an empty 10th house mean I won't have a career?",
          "answer": "Not at all. If the 10th house is empty, you look at the planet that rules the zodiac sign in the 10th house (the 10th Lord). Its placement and strength will dictate your career success."
        }
      ]
    }
  },
  {
    "id": "11th-house",
    "name": "11th House",
    "sanskritName": "Labha Bhava",
    "title": "The 11th House in Astrology: Gains, Friends & Desires",
    "description": "Learn about the 11th House in astrology. Discover how it influences your financial gains, social networks, elder siblings, and fulfillment of ultimate desires.",
    "significator": "Jupiter (Guru)",
    "content": {
      "introduction": "The 11th House, known as Labha Bhava (the House of Gains), is the house of fulfillment and rewards. After you perform your worldly duties in the 10th house, the 11th house represents the paycheck, the profits, and the recognition you receive. It is considered the strongest Upachaya (growing) house, where almost all planets—benefic or malefic—yield highly positive material results over time.",
      "whatItRepresents": "This house governs financial gains, business profits, regular income, large social networks, friendships, and elder siblings. Most importantly, it is the house of fulfilling your highest hopes and desires. It represents the communities you belong to and your ability to network. Any planet placed here tends to bring material gains related to its nature, making it a highly desirable placement for wealth generation.",
      "keyThemes": "Income, financial gains (Labha), fulfillment of desires, elder siblings, large social networks, friendships, community, and business profits.",
      "vedicVsWestern": "Western astrology associates the 11th house with Aquarius, focusing heavily on humanitarian efforts, large groups, friendships, and hopes for the future. Vedic astrology shares the focus on networks and elder siblings but heavily emphasizes 'Labha'—concrete material gains and business profits. In Jyotish, a strong 11th house is the ultimate signature for becoming wealthy and having your worldly desires fulfilled.",
      "planetsInHouse": [
        {
          "planet": "Sun",
          "influence": "Brings powerful, authoritative friends and gains from the government or leadership roles. The person is a natural leader in their social circles."
        },
        {
          "planet": "Moon",
          "influence": "Creates a vast network of friends, particularly females. Income may fluctuate, but the person is highly popular and emotionally connected to their community."
        },
        {
          "planet": "Mars",
          "influence": "Excellent for massive financial gains through real estate, engineering, or aggressive business tactics. The person has ambitious friends but may argue with elder siblings."
        },
        {
          "planet": "Mercury",
          "influence": "Gains come through commerce, writing, networking, and IT. The person has a huge, diverse network of intellectual friends and business contacts."
        },
        {
          "planet": "Jupiter",
          "influence": "Highly auspicious for wealth. Brings steady, ethical gains, wise friends, and fulfillment of noble desires. The person is highly respected in their community."
        },
        {
          "planet": "Venus",
          "influence": "Brings gains through art, beauty, women, or luxury goods. The person has a glamorous social circle and loves attending high-society events."
        },
        {
          "planet": "Saturn",
          "influence": "Gains come slowly but surely through extreme hard work and older, mature networks. Ultimately leads to massive, stable wealth later in life."
        },
        {
          "planet": "Rahu",
          "influence": "One of the best placements for Rahu. Brings astronomical, sudden wealth, often through foreign networks, technology, or unconventional means. Highly ambitious."
        },
        {
          "planet": "Ketu",
          "influence": "The person is detached from their social circle and material gains. They may experience fluctuating income but possess a highly spiritual network of friends."
        }
      ],
      "faqs": [
        {
          "question": "Are malefic planets really good in the 11th house?",
          "answer": "Yes! Malefics like Saturn, Rahu, and Mars do exceptionally well in the 11th house. They provide the relentless ambition, strategy, and drive needed to amass massive wealth and fulfill desires."
        },
        {
          "question": "How is it different from the 2nd house of wealth?",
          "answer": "The 11th house is the *flow* of income—your daily paycheck, business profits, or ROI. The 2nd house is what you actually *save* and accumulate in your bank account after expenses."
        },
        {
          "question": "What does the 11th house say about siblings?",
          "answer": "While the 3rd house represents younger siblings, the 11th house specifically represents elder siblings and your relationship with them."
        }
      ]
    }
  },
  {
    "id": "12th-house",
    "name": "12th House",
    "sanskritName": "Vyaya Bhava",
    "title": "The 12th House in Astrology: Endings, Losses & Liberation",
    "description": "Explore the 12th House in astrology. Discover how it influences expenses, isolation, foreign lands, sleep, subconscious, and spiritual liberation (Moksha).",
    "significator": "Saturn (Shani) for sorrow, Ketu for liberation",
    "content": {
      "introduction": "The 12th House, known as Vyaya Bhava (the House of Expenditure), is the final house of the zodiac, completing the soul's journey. It is a house of endings, dissolution, and letting go. While it is considered a Dusthana (difficult house) in terms of material success, it is the ultimate and most profound house for spiritual growth and liberation. It represents the space where the ego dissolves back into the infinite.",
      "whatItRepresents": "This house governs expenses, losses, isolation (hospitals, ashrams, prisons, monasteries), foreign lands, and the subconscious mind. It also represents sleep, dreams, bed pleasures, and Moksha (final spiritual liberation). Planets here tend to lose their material strength, directing their energy inward or toward foreign/unseen realms. A prominent 12th house often takes a person far away from their birthplace or pulls them into deep spiritual or charitable work.",
      "keyThemes": "Losses, expenses, foreign travel, isolation, sleep, dreams, subconscious, hospitals, ashrams, hidden enemies, and Moksha (spiritual liberation).",
      "vedicVsWestern": "Western astrology links the 12th house with Pisces and Neptune, focusing on the subconscious, dreams, hidden enemies, and psychological undoing. Vedic astrology shares this but strongly emphasizes 'Vyaya' (financial and physical expenses/losses) and 'Moksha' (enlightenment). In the modern globalized world, Vedic astrologers also heavily rely on the 12th house to predict foreign settlement, working for multinational corporations, and importing/exporting.",
      "planetsInHouse": [
        {
          "planet": "Sun",
          "influence": "Can indicate a loss of ego or struggles with the father. The person may find success in foreign lands or working behind the scenes in government or hospitals."
        },
        {
          "planet": "Moon",
          "influence": "Creates a highly imaginative, deeply subconscious mind. The person needs isolation to recharge emotionally. Can indicate vivid dreams or a mother who lived far away."
        },
        {
          "planet": "Mars",
          "influence": "Forms a mild Mangal Dosha. The person may have hidden anger or sleep issues. High energy is spent on foreign travels, martial arts, or charitable work."
        },
        {
          "planet": "Mercury",
          "influence": "The mind is highly active at night, causing overthinking or insomnia. Excellent for deep research, coding, or learning foreign languages."
        },
        {
          "planet": "Jupiter",
          "influence": "Brings immense spiritual protection and a charitable nature. The person spends money on good causes and has a deep understanding of philosophy and the afterlife."
        },
        {
          "planet": "Venus",
          "influence": "The only planet that truly thrives in the 12th house. Brings luxurious sleep, bed pleasures, success in foreign lands, and a love for high-end comforts."
        },
        {
          "planet": "Saturn",
          "influence": "The person may experience feelings of isolation or depression. Success comes in foreign lands or through solitary, disciplined work. Sleep may be restricted."
        },
        {
          "planet": "Rahu",
          "influence": "Creates an intense desire to travel abroad or explore altered states of consciousness. The person may have unusual sleep patterns or secret expenses."
        },
        {
          "planet": "Ketu",
          "influence": "The ultimate placement for Moksha. The person has vivid spiritual dreams, deep intuition, and a natural detachment from the material world. Highly mystical."
        }
      ],
      "faqs": [
        {
          "question": "Does the 12th house mean I will be poor?",
          "answer": "Not necessarily. It means your expenses might be high. In modern times, a strong 12th house is actually excellent for generating wealth through multinational business, foreign clients, or importing/exporting."
        },
        {
          "question": "Why is it the house of Moksha?",
          "answer": "Because it represents the final dissolution of the ego (which was born in the 1st house). It is where the soul learns to detach from material desires, surrender control, and seek ultimate spiritual liberation."
        },
        {
          "question": "Why is Venus good in the 12th house?",
          "answer": "The 12th house rules \"bed pleasures\" and luxurious isolation. Venus naturally signifies comfort, luxury, and romance, making it uniquely capable of extracting worldly pleasure from this otherwise spiritual house."
        }
      ]
    }
  }
];
