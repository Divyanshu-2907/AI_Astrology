const fs = require('fs');

const planets = [
  {
    id: 'sun',
    name: 'Sun',
    sanskritName: 'Surya',
    title: 'The Sun (Surya) in Astrology: Ego, Soul & Vitality',
    description: 'Learn about the Sun in astrology. Discover how Surya influences your ego, soul, vitality, career, and overall life path in Vedic and Western astrology.',
    type: 'Luminary / Inner Planet',
    rulingZodiacs: ['Leo'],
    exaltation: 'Aries',
    debilitation: 'Libra',
    content: {
      introduction: "In astrology, the Sun is the center of the solar system and the core of your astrological identity. Known as Surya in Vedic astrology, it represents your soul, ego, core personality, and vitality. Wherever the Sun is placed in your birth chart dictates where you shine the brightest and where your life's primary focus lies. It is the king of the planetary cabinet, symbolizing authority, leadership, and father figures. Understanding your Sun placement is the first step to unlocking your life's ultimate purpose. Unlike the faster moving Moon which governs your daily shifting emotions, the Sun provides the stable, unwavering foundation of who you truly are at your core. It is the source of all light, meaning it illuminates the house it occupies, bringing focus and energy to those specific life themes.",
      whatItRepresents: "The Sun represents the conscious mind, the self, and the 'I' of your existence. It governs your basic identity, your life purpose, and your creative life force. It dictates how you express yourself to the world and what drives you at your deepest level. Physically, the Sun is intimately associated with the heart, the spine, the right eye in men (left in women), and overall physical vitality. When the Sun is strong in a chart, the individual is often confident, radiant, and a natural leader who easily commands respect. They possess an inner nobility and a strong moral compass. When weak or afflicted by malefic planets, there may be profound struggles with self-esteem, a lack of clear direction, issues with authority figures, or physical ailments related to the heart or vitality. The Sun also represents the government, royalty, and high-ranking officials.",
      personalityInfluence: "Your Sun sign determines your fundamental personality traits. It dictates your outward behavior and how you naturally respond to the world around you. A strong Sun makes a person authoritative, dignified, and honorable, endowing them with immense willpower and determination. They are often ambitious, independent, and possess a strong sense of self that cannot be easily swayed by others. They thrive in positions of power and responsibility. Conversely, an afflicted Sun can lead to arrogance, unchecked egotism, or conversely, a complete lack of self-confidence where the individual constantly seeks external validation. The Sun plays a pivotal role in shaping a person's career path, often pointing towards leadership roles, government positions, politics, management, or creative endeavors where they can be in the spotlight and receive the recognition they deeply crave.",
      vedicVsWestern: "While both systems recognize the Sun as a vital luminary, their approach differs significantly. In Western astrology, the Sun sign is the primary indicator of personality and the most common identifier used in daily horoscopes. It focuses heavily on the psychological traits and the ego. In Vedic astrology (Jyotish), the Sun (Surya) is considered a cruel or mild malefic planet (Kroora Graha) because its intense heat can burn and destroy the qualities of planets it sits too close to—a condition known as combustion. However, it is also deeply revered as the Karaka (significator) of the soul (Atmakaraka) and the father (Pitri Karaka). Vedic astrology relies more heavily on the Moon sign (Rashi) and Ascendant (Lagna) for daily life predictions, placing the Sun as the long-term indicator of spiritual growth, career success, and relationships with authority.",
      houseInfluences: [
        { house: 1, influence: "Brings strong vitality, leadership skills, and a magnetic personality. The person is often ambitious and seeks recognition, but may struggle with pride." },
        { house: 2, influence: "Focuses energy on accumulating wealth and resources. Indicates a strong, authoritative voice and potential financial gains through government or leadership roles." },
        { house: 3, influence: "Enhances courage, communication skills, and short journeys. The person is fiercely independent and may take on a leadership role among siblings." },
        { house: 4, influence: "Can create friction in the home life due to the Sun's fiery nature, but indicates strong ties to property, the mother, and a desire to rule the domestic sphere." },
        { house: 5, influence: "Excellent for creative intelligence, speculative gains, and politics. However, its heat can sometimes cause delays or difficulties concerning children." },
        { house: 6, influence: "A strong placement that helps defeat enemies and overcome diseases. Indicates success in administrative roles, public health, or government service." },
        { house: 7, influence: "Can cause ego clashes in marriage and partnerships. The spouse may be authoritative or hold a high position, requiring compromise to maintain harmony." },
        { house: 8, influence: "Indicates deep transformative experiences, potential interest in the occult, and longevity, though it can bring struggles with authority or father figures." },
        { house: 9, influence: "Brings strong moral convictions, higher learning, and spiritual inclinations. Indicates good fortune, travel, and a potentially authoritative father or guru." },
        { house: 10, influence: "The Sun receives directional strength (Digbala) here. Guarantees career success, public recognition, leadership roles, and strong organizational abilities." },
        { house: 11, influence: "Fulfills desires and brings powerful, influential friends. Indicates financial gains through government or large organizations and a strong social network." },
        { house: 12, influence: "Suggests a need for solitude and spiritual reflection. Can indicate success in foreign lands or working in isolated environments like hospitals or ashrams." }
      ],
      faqs: [
        {
          question: "What happens when the Sun is exalted in a birth chart?",
          answer: "When the Sun is exalted in Aries, it operates at its highest potential. It provides excellent health, unparalleled leadership qualities, immense confidence, a strong sense of purpose, and high chances of success in career, particularly in government, military, or executive roles."
        },
        {
          question: "What does a debilitated Sun in Libra indicate?",
          answer: "A debilitated Sun in Libra can indicate low self-esteem, a lack of confidence, and an over-reliance on others for validation. The individual may struggle to assert their authority, face issues with their father, or have a lack of clear direction in life."
        },
        {
          question: "What is Sun combustion in astrology?",
          answer: "Combustion occurs when a planet gets too close to the Sun (usually within 8-10 degrees). The Sun's intense heat 'burns' the planet, weakening its external manifestations, though it may internalize the planet's qualities."
        },
        {
          question: "How does the Sun affect my career?",
          answer: "The Sun is the natural significator of career and public life. A strong Sun points towards roles where you are the boss, manager, or center of attention. It favors government jobs, politics, medicine, and entrepreneurship."
        },
        {
          question: "How can I strengthen a weak Sun?",
          answer: "Astrological remedies for a weak Sun include waking up early to offer water to the rising Sun (Surya Arghya), respecting your father and authority figures, reciting the Aditya Hridaya Stotra, and wearing a Ruby gemstone (after consulting an astrologer)."
        }
      ]
    }
  },
  {
    id: 'moon',
    name: 'Moon',
    sanskritName: 'Chandra',
    title: 'The Moon (Chandra) in Astrology: Emotions, Mind & Intuition',
    description: 'Explore the Moon in astrology. Discover how Chandra influences your emotions, subconscious mind, instincts, and motherly figures in Vedic astrology.',
    type: 'Luminary / Inner Planet',
    rulingZodiacs: ['Cancer'],
    exaltation: 'Taurus',
    debilitation: 'Scorpio',
    content: {
      introduction: "The Moon, known as Chandra or Soma in Vedic astrology, is the fastest-moving celestial body in the astrological system. It represents the mind, emotions, mother, and the subconscious. Unlike the Sun, which is your conscious identity and ego, the Moon is your instinctual self. It governs how you feel, how you nurture and seek nurturing, and your deepest emotional needs. The Moon's placement in your chart reveals your inner emotional landscape and your spontaneous reactions to the world around you. Because it moves so quickly, changing signs every two and a half days, it is the primary indicator of daily fluctuations in mood and circumstances.",
      whatItRepresents: "The Moon governs the realm of feelings, intuition, memories, and receptivity. It is intimately connected to the concept of the mother and maternal figures, reflecting how you were nurtured as a child and how you nurture others as an adult. It dictates your emotional security and what makes you feel safe and comfortable at home. Physically, the Moon is associated with body fluids, the stomach, the breasts, and the left eye in men (right in women). A well-placed Moon brings emotional stability, empathy, a nurturing disposition, and a peaceful mind. An afflicted Moon can lead to severe mood swings, anxiety, depression, emotional volatility, and a restless mind.",
      personalityInfluence: "Your Moon sign is absolutely crucial in understanding your emotional responses; it colors your inner world. Individuals with a strong Moon are often deeply empathetic, intuitive, and caring. They possess a strong imagination and are highly receptive to the feelings and needs of others. They adapt well to changes and have a natural instinct for protecting their loved ones. However, if the Moon is challenged by malefic planets like Saturn, Rahu, or Ketu, the person might struggle with emotional boundaries, clinginess, irrational fears, deep-seated insecurities, or a sense of emotional isolation. The Moon dictates our daily moods and the subtle shifts in our psychological state.",
      vedicVsWestern: "In Western astrology, the Moon represents the emotional self, habits, and subconscious mind, but it generally plays a secondary role to the Sun sign in popular astrology. In Vedic astrology, the Moon (Chandra) is arguably the most important planet for interpreting daily life, psychological well-being, and compatibility. The Vedic Moon sign (Janma Rashi) is the primary sign used for daily horoscopes in India. Furthermore, the exact Nakshatra (lunar mansion) the Moon occupies at the time of birth is the foundational pillar of Vedic astrology, determining the starting point of a person's planetary periods (Vimshottari Dasha system) and playing a critical role in Kundli matching (Ashtakoot) for marriage.",
      houseInfluences: [
        { house: 1, influence: "Makes the person highly empathetic, attractive, and emotionally expressive. They are deeply connected to their environment but can be moody or overly sensitive." },
        { house: 2, influence: "Indicates a strong emotional attachment to family and financial security. Wealth may fluctuate, but intuition plays a key role in making money." },
        { house: 3, influence: "Brings a creative and imaginative mind. The person communicates with emotion and has strong ties to siblings, though their interests may change frequently." },
        { house: 4, influence: "The Moon is at home here. Indicates a deep love for the mother, home, and heritage. The person seeks ultimate emotional security in their domestic life." },
        { house: 5, influence: "Enhances creativity, romance, and a love for children. The mind is playful and intuitive, making them excellent in arts or speculative ventures." },
        { house: 6, influence: "Can indicate emotional stress related to work or health. The person finds comfort in serving others or caring for pets, but must guard against anxiety." },
        { house: 7, influence: "The person seeks emotional fulfillment through partnerships and marriage. The spouse is often nurturing, but the relationship may experience emotional fluctuations." },
        { house: 8, influence: "A challenging placement indicating deep, intense emotions, strong intuition, and a fascination with the occult. The person may experience sudden emotional transformations." },
        { house: 9, influence: "Brings a philosophical and spiritual mind. The person finds emotional comfort in religion, long-distance travel, and higher learning." },
        { house: 10, influence: "Indicates a career that involves the public, nurturing, or women. The person's public image is seen as caring, though their career path may have many changes." },
        { house: 11, influence: "Finds emotional security through friendships and social networks. The person is well-liked and gains through social connections and elder siblings." },
        { house: 12, influence: "Suggests a deeply private emotional life. The person needs solitude to recharge and may have strong spiritual or psychic abilities, or reside in a foreign land." }
      ],
      faqs: [
        {
          question: "Why is the Moon sign so important in Vedic astrology?",
          answer: "In Vedic astrology, the Moon represents the mind (Manas). Since our entire experience of reality is filtered through our mind, the Moon's placement dictates our perception, happiness, and mental peace. It also determines the starting point of your life's Dasha system."
        },
        {
          question: "What does an exalted Moon in Taurus mean?",
          answer: "The Moon is exalted in Taurus, where it finds ultimate stability. This placement brings emotional calmness, an appreciation for beauty and comfort, strong intuition, financial stability, and a generally peaceful and patient disposition."
        },
        {
          question: "What is a Kemadruma Yoga?",
          answer: "Kemadruma Yoga occurs when there are no planets (except the Sun) in the houses immediately before and after the Moon. It can indicate a sense of deep loneliness, mental restlessness, or lack of support, though it is often cancelled by other planetary aspects."
        },
        {
          question: "How does the Moon affect relationship compatibility?",
          answer: "The Moon dictates our deepest emotional needs and how we give and receive love. In relationships, compatible Moon signs ensure emotional understanding, shared comfort zones, and a natural sympathy and telepathy between partners."
        },
        {
          question: "How can I calm a restless or afflicted Moon?",
          answer: "Remedies for an afflicted Moon include meditating, practicing pranayama (breathing exercises), maintaining a good relationship with your mother, drinking water from a silver vessel, and offering milk or water to a Shivling on Mondays."
        }
      ]
    }
  },
  {
    id: 'mars',
    name: 'Mars',
    sanskritName: 'Mangal',
    title: 'Mars (Mangal) in Astrology: Action, Energy & Drive',
    description: 'Learn about Mars in astrology. Discover how Mangal influences your ambition, energy, physical strength, and competitive spirit.',
    type: 'Inner Planet',
    rulingZodiacs: ['Aries', 'Scorpio'],
    exaltation: 'Capricorn',
    debilitation: 'Cancer',
    content: {
      introduction: "Mars, known as Mangal or Kuja in Vedic astrology, is the fiery red planet that governs our raw energy, drive, and physical vitality. It is the celestial warrior and commander-in-chief of the planetary cabinet, representing courage, ambition, and the instinct for survival. While the Sun gives you your overarching purpose and the Moon dictates how you feel, Mars determines exactly how you act and assert yourself to achieve those goals. It is the planet of action, passion, desire, and, occasionally, conflict and aggression.",
      whatItRepresents: "Mars represents our physical strength, stamina, and our ability to overcome obstacles and enemies. It governs the muscular system, blood, bone marrow, and the immune system. Psychologically, it rules our competitive spirit, our desire to win, our sexuality, and our assertiveness. Mars is also associated with younger siblings, particularly brothers, as well as land and real estate. It rules professions requiring courage and precision, such as the military, sports, engineering, construction, and surgery. A strong Mars grants fearlessness, logical thinking, and the ability to execute plans efficiently. A weak or afflicted Mars can result in a lack of drive, cowardice, procrastination, or conversely, uncontrolled anger, impulsiveness, and a tendency toward accidents.",
      personalityInfluence: "The placement of Mars in your birth chart describes your style of taking action and how you express your anger. A well-placed Mars makes a person independent, decisive, and capable of taking calculated risks. These individuals are often natural leaders in crisis situations; they do not panic but instead take immediate action. They are fiercely protective of what they care about and will boldly fight for their beliefs. If Mars is negatively aspected, the individual may be prone to arguments, impatience, recklessness, and a short temper. Understanding your Mars sign helps you channel your fiery energy constructively into passions and projects rather than destructively into conflicts.",
      vedicVsWestern: "In Western astrology, Mars is primarily associated with the ego's desires, sexuality, and self-assertion. It is the ruler of Aries and the traditional ruler of Scorpio. In Vedic astrology, Mars (Mangal) is considered a natural malefic (Kroora Graha) because of its fiery, aggressive, and sometimes destructive nature. Its placement is highly scrutinized, particularly regarding marriage and domestic harmony. The dreaded 'Mangal Dosha' or 'Manglik' condition occurs when Mars is placed in specific houses in a birth chart, which is believed to cause fiery friction in marriage and is a key factor in Kundli matching.",
      houseInfluences: [
        { house: 1, influence: "Creates a dynamic, energetic, and sometimes aggressive personality. The person is a natural leader, fiercely independent, but must guard against impulsiveness and head injuries." },
        { house: 2, influence: "Indicates a direct, sometimes harsh way of speaking. The person is driven to accumulate wealth, often through real estate, but may experience arguments within the family." },
        { house: 3, influence: "An excellent placement for Mars. Brings immense courage, strong willpower, and success in competitive fields. However, it can cause friction with younger siblings." },
        { house: 4, influence: "Can create domestic disputes and unrest in the home. The person is highly protective of their family and may gain wealth through property and real estate." },
        { house: 5, influence: "Brings a competitive and passionate approach to romance and sports. The person has a sharp intellect but may experience conflicts or delays regarding children." },
        { house: 6, influence: "One of the best positions for Mars. The person crushes their enemies, overcomes diseases, and excels in competitive environments, law, or medicine." },
        { house: 7, influence: "Creates strong passions in marriage but can lead to significant conflicts, arguments, and power struggles with the partner. This is a primary placement for Mangal Dosha." },
        { house: 8, influence: "Indicates intense desires, potential for sudden transformations, and a strong interest in the occult. It can bring unexpected challenges and is considered a Manglik placement." },
        { house: 9, influence: "The person may aggressively defend their beliefs or challenge traditional religious views. They are highly independent thinkers and may travel extensively." },
        { house: 10, influence: "Mars receives directional strength (Digbala) here. Guarantees massive career success, extreme ambition, and leadership in fields like engineering, military, or management." },
        { house: 11, influence: "Highly favorable for achieving goals and gaining wealth. The person has a strong network of influential friends and the drive to fulfill their highest ambitions." },
        { house: 12, influence: "Can lead to hidden anger, restless sleep, and expenses. The person may find success working behind the scenes or in foreign lands, but must manage stress." }
      ],
      faqs: [
        {
          question: "What is Mangal Dosha (Manglik)?",
          answer: "Mangal Dosha occurs in Vedic astrology when Mars is placed in the 1st, 4th, 7th, 8th, or 12th house of a birth chart. It signifies a strong, aggressive energy that can cause friction, arguments, or dominance in partnerships if not properly matched with another Manglik."
        },
        {
          question: "What does an exalted Mars in Capricorn signify?",
          answer: "In Capricorn, Mars's fiery energy is channeled through discipline and structure. It creates an incredibly hardworking, strategic, and unstoppable individual who can achieve massive success in their career and overcome any obstacle."
        },
        {
          question: "What does Mars rule over in the human body?",
          answer: "Mars rules the blood, the muscular system, bone marrow, and the overall physical vitality and immune response. A strong Mars grants excellent physical stamina and quick recovery from illness."
        },
        {
          question: "How does Mars affect my career?",
          answer: "Mars drives ambition and execution. It favors careers requiring physical energy, technical skill, or courage, such as the armed forces, police, surgery, engineering, construction, sports, and entrepreneurship."
        },
        {
          question: "How do I pacify a negative Mars?",
          answer: "To calm an afflicted Mars, astrologers often recommend practicing anger management, engaging in rigorous physical exercise or martial arts, donating blood, and reciting the Hanuman Chalisa to channel the fiery energy constructively."
        }
      ]
    }
  },
  {
    id: 'mercury',
    name: 'Mercury',
    sanskritName: 'Budh',
    title: 'Mercury (Budh) in Astrology: Communication, Intellect & Logic',
    description: 'Explore Mercury in astrology. Discover how Budh influences your communication style, learning abilities, logic, and analytical thinking.',
    type: 'Inner Planet',
    rulingZodiacs: ['Gemini', 'Virgo'],
    exaltation: 'Virgo',
    debilitation: 'Pisces',
    content: {
      introduction: "Mercury, known as Budh in Vedic astrology, is the planet of intellect, communication, and commerce. Orbiting closest to the Sun, it is the fastest of the planets (excluding the Moon) and represents the swiftness of thought, speech, and movement. Mercury governs how we process information, our learning style, our analytical capabilities, and our ability to convey ideas to others. It is the celestial messenger, bridging the gap between the internal mind and the external world through language, logic, and reasoning. It is the planet of youth, curiosity, and endless inquiry.",
      whatItRepresents: "Mercury represents analytical thinking, adaptability, logic, and versatility. It governs the nervous system, the brain, the skin, and the respiratory system. It is the chief significator of trade, commerce, writing, education, accounting, and short-distance travel. A strong Mercury in a birth chart gives excellent communication skills, a sharp and retentive memory, a witty sense of humor, and a natural talent for mathematics, programming, or business. A weak or afflicted Mercury can indicate speech impediments, learning difficulties, nervousness, anxiety, or a tendency toward dishonesty, gossip, or manipulation.",
      personalityInfluence: "The position of Mercury in your chart dictates your communication style and cognitive processes. Individuals with a prominent Mercury are often curious, talkative, restless, and quick-witted. They excel in writing, public speaking, teaching, and sales. They are highly adaptable chameleons who can quickly grasp new concepts and blend into different social environments. However, because Mercury is a neutral, highly impressionable planet, it takes on the characteristics of the planets it associates with. If conjunct with a malefic planet like Saturn or Mars, the intellect may be used for deceptive, harsh, or overly critical purposes. If conjunct with a benefic like Jupiter or Venus, the intellect is used for noble, artistic, and constructive causes.",
      vedicVsWestern: "The core symbolism of Mercury remains largely consistent between Western and Vedic astrology. Both systems view it as the ruler of Gemini and Virgo, governing intellect and communication. Western astrology often places a heavy emphasis on Mercury's frequent retrograde periods, analyzing them as times of communication breakdowns and technological glitches. In Vedic astrology, while retrograde motion is noted, Mercury (Budh) is deeply analyzed for its dignity and conjunctions. Budh is considered the Karaka for maternal uncles and friends. A strong Budh is considered absolutely essential for success in modern fields like IT, accounting, writing, astrology, and business management.",
      houseInfluences: [
        { house: 1, influence: "Creates a youthful, intellectual, and communicative personality. The person is quick-witted, highly adaptable, and often possesses a good sense of humor." },
        { house: 2, influence: "Indicates a polite, persuasive, and intelligent speaker. The person can generate wealth through speech, writing, accounting, or business ventures." },
        { house: 3, influence: "Mercury is very comfortable here. Brings excellent writing and communication skills, frequent short travels, and strong relationships with siblings and neighbors." },
        { house: 4, influence: "Indicates a lively and intellectual home environment. The person may pursue higher education and property matters through logical and calculated means." },
        { house: 5, influence: "Excellent for intelligence, education, and analytical thinking. The person enjoys intellectual games, writing, and has a strong speculative mind for investments." },
        { house: 6, influence: "Brings strong analytical skills for solving problems, winning debates, and organizing details. Favorable for careers in law, medicine, or accounting." },
        { house: 7, influence: "The person seeks a highly intellectual and communicative partner. Favorable for business partnerships, trade, and negotiations." },
        { house: 8, influence: "Indicates a deeply probing and investigative mind. The person may be interested in research, astrology, or the occult, but may experience nervous anxiety." },
        { house: 9, influence: "Brings a logical approach to religion and philosophy. The person loves higher learning, publishing, and traveling to gain knowledge." },
        { house: 10, influence: "Highly favorable for a career in communications, writing, IT, or business. The person is known for their intellect, adaptability, and professional speaking skills." },
        { house: 11, influence: "The person has a wide network of intelligent and influential friends. They gain financially through commerce, networking, and intellectual pursuits." },
        { house: 12, influence: "Indicates a highly imaginative but sometimes anxious mind. The person may excel in research, foreign languages, or writing behind the scenes." }
      ],
      faqs: [
        {
          question: "What does a Mercury Retrograde mean?",
          answer: "Mercury retrograde is an optical illusion where the planet appears to move backwards from Earth's perspective. Astrologically, it represents a period of review. It is associated with delays, miscommunications, and technological glitches, making it a bad time to sign contracts but a good time to revisit old projects."
        },
        {
          question: "What happens when Mercury is exalted?",
          answer: "Mercury is exalted in its own sign of Virgo. This creates an incredibly sharp, organized, and analytical mind. These individuals possess flawless logic, extreme attention to detail, and often excel in fields requiring precision like accounting, programming, or editing."
        },
        {
          question: "Why is Mercury considered a 'neutral' planet?",
          answer: "Mercury has a highly impressionable and youthful nature. It does not have a strong independent agenda; rather, it acts like a mirror. It behaves as a benefic when associated with benefic planets (Jupiter, Venus) and as a malefic when associated with malefic planets (Saturn, Mars, Rahu)."
        },
        {
          question: "What professions are ruled by Mercury?",
          answer: "Mercury rules all professions involving communication, intellect, logic, and trade. This includes writers, teachers, accountants, software developers, journalists, salespeople, astrologers, and business owners."
        },
        {
          question: "How can I improve my Mercury?",
          answer: "To strengthen Mercury, astrologers recommend practicing clear communication, continuously learning new skills or languages, feeding green grass to cows, and wearing an Emerald gemstone (only after proper chart consultation)."
        }
      ]
    }
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    sanskritName: 'Guru / Brihaspati',
    title: 'Jupiter (Guru) in Astrology: Wisdom, Expansion & Luck',
    description: 'Learn about Jupiter in astrology. Discover how Guru influences your wisdom, luck, spirituality, wealth, and higher learning.',
    type: 'Outer Planet',
    rulingZodiacs: ['Sagittarius', 'Pisces'],
    exaltation: 'Cancer',
    debilitation: 'Capricorn',
    content: {
      introduction: "Jupiter, revered as Guru or Brihaspati in Vedic astrology, is the largest planet in our solar system and the most naturally benefic planet in astrology. It is the planet of expansion, wisdom, luck, abundance, and grace. Jupiter represents the higher mind, philosophy, religion, and the search for ultimate meaning in life. It acts as a protective shield, offering optimism, divine guidance, and opportunities for growth wherever it is placed in the birth chart. While other planets may cause struggle, Jupiter brings ease and blessings.",
      whatItRepresents: "Jupiter represents higher education, spiritual teachers, law, morality, and long-distance travel. It is the primary significator of wealth (Dhana Karaka) and children (Putra Karaka). Physically, it is associated with the liver, fat accumulation, and the arterial system. A well-placed Jupiter brings profound wisdom, a generous and forgiving spirit, strong moral values, financial prosperity, and a generally fortunate life. It makes one a natural counselor or teacher. An afflicted Jupiter, while rarely actively harmful or malicious, can lead to overindulgence, financial extravagance, blind optimism, laziness, or a dogmatic, preachy approach to religion or beliefs.",
      personalityInfluence: "The placement of Jupiter shapes a person's moral compass and their capacity for joy and generosity. Individuals with a strong Jupiter are often highly optimistic, jovial, and possessing a deep sense of faith that things will work out. They are natural teachers, guides, and advisors, drawing people to them with their wisdom and positive aura. They highly value justice, truth, and ethical behavior. Conversely, if Jupiter is weak or afflicted by Rahu, a person might lack direction, struggle with retaining wealth, exhibit a lack of faith, or become hypocritical in their beliefs.",
      vedicVsWestern: "In Western astrology, Jupiter is known as the 'Greater Benefic,' ruling Sagittarius (and traditionally Pisces), associated with luck, travel, and the expansion of the mind and waistline. In Vedic astrology, Guru is deeply revered as the preceptor of the gods. Its placement is highly critical for determining overall life success, wealth accumulation, and the well-being of children. In a woman's Vedic birth chart, Jupiter is the primary significator of the husband and the overall happiness in marriage (unlike Western astrology which often looks to Mars or the Sun). Jupiter's transit through a zodiac sign (lasting about one year) is closely watched by Vedic astrologers for setting the macro-trends of a person's life.",
      houseInfluences: [
        { house: 1, influence: "Brings a highly optimistic, generous, and philosophical personality. The person is physically robust, well-respected, and acts as a guiding light for others." },
        { house: 2, influence: "Highly favorable for accumulating wealth, speaking words of wisdom, and enjoying a harmonious, supportive family life. The person is charitable and well-spoken." },
        { house: 3, influence: "The person has a philosophical mind and communicates with wisdom. Brings good relations with siblings, though they may lack aggressive ambition." },
        { house: 4, influence: "Brings immense happiness, domestic peace, and large properties. The mother is often a source of great wisdom, and the home is a place of spiritual learning." },
        { house: 5, influence: "An excellent placement for higher education, deep intelligence, and spiritual practices. However, as the Karaka of children, placement here can sometimes cause slight delays in childbirth." },
        { house: 6, influence: "Protects against major diseases and enemies. The person may work in healing professions, law, or social service, but must guard against liver or weight issues." },
        { house: 7, influence: "Brings a wise, loyal, and supportive spouse. Favorable for marriage and business partnerships, bringing expansion and wealth through joint ventures." },
        { house: 8, influence: "Protects against sudden accidents and grants a long life. The person has a deep intuition and may benefit financially through inheritance or their spouse." },
        { house: 9, influence: "Jupiter is at home here. Grants profound wisdom, good fortune, strong religious/spiritual beliefs, and highly beneficial relationships with teachers and the father." },
        { house: 10, influence: "Brings a highly respected and ethical career. The person is seen as an authority figure, teacher, or advisor, often finding success in law, education, or finance." },
        { house: 11, influence: "Fulfills desires and brings vast financial gains. The person has a large network of influential, wise friends and elder siblings who offer great support." },
        { house: 12, influence: "Indicates strong spiritual inclinations, charitable nature, and success in foreign lands. The person spends money on good causes and is protected from major losses." }
      ],
      faqs: [
        {
          question: "Why is Jupiter considered the most benefic planet?",
          answer: "Jupiter expands everything it touches with positive energy. It is the planet of grace, wisdom, and divine protection. Even when placed in a difficult house or undergoing a harsh transit, Jupiter often provides a safety net and prevents total ruin."
        },
        {
          question: "What does Jupiter represent in a woman's birth chart in Vedic astrology?",
          answer: "In Vedic astrology, Jupiter (Guru) is the primary Karaka (significator) for the husband in a woman's chart. Its placement, dignity, and aspects indicate the qualities of her life partner and the overall happiness and longevity of the marriage."
        },
        {
          question: "What is a 'Guru Chandal Yoga'?",
          answer: "This is a specific planetary combination in Vedic astrology where Jupiter is conjunct with Rahu. It can indicate a person who challenges traditional beliefs, questions authority, or has an unconventional, sometimes rebellious approach to religion and spirituality."
        },
        {
          question: "How does an exalted Jupiter behave?",
          answer: "Exalted in Cancer, Jupiter expresses its highest form of compassion, emotional wisdom, and nurturing grace. It brings immense luck, strong intuition, and a deep desire to care for and elevate humanity."
        },
        {
          question: "What remedies strengthen Jupiter?",
          answer: "To strengthen Jupiter, one should respect teachers and elders, donate to educational or religious institutions, wear yellow clothing on Thursdays, and wear a Yellow Sapphire (Pukhraj) gemstone after proper astrological consultation."
        }
      ]
    }
  }
];

const fileContent = `export interface PlanetData {
  id: string;
  name: string;
  sanskritName: string;
  title: string;
  description: string;
  type: string;
  rulingZodiacs: string[];
  exaltation: string;
  debilitation: string;
  content: {
    introduction: string;
    whatItRepresents: string;
    personalityInfluence: string;
    vedicVsWestern: string;
    houseInfluences: { house: number; influence: string }[];
    faqs: { question: string; answer: string }[];
  };
}

export const planets: PlanetData[] = ${JSON.stringify(planets, null, 2)};
`;

fs.writeFileSync('src/data/planets.ts', fileContent);
console.log('Successfully wrote first 5 planets to planets.ts');
