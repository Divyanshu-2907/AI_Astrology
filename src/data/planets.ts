export interface PlanetData {
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
    faqs: { question: string; answer: string }[];
  };
}

export const planets: PlanetData[] = [
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
      introduction: 'In astrology, the Sun is the center of the solar system and the core of your astrological identity. Known as Surya in Vedic astrology, it represents your soul, ego, core personality, and vitality. Wherever the Sun is placed in your birth chart dictates where you shine the brightest and where your life\'s primary focus lies. It is the king of the planetary cabinet, symbolizing authority, leadership, and father figures.',
      whatItRepresents: 'The Sun represents the conscious mind, the self, and the "I" of your existence. It governs your basic identity, your life purpose, and your creative life force. It dictates how you express yourself to the world and what drives you at your deepest level. Physically, the Sun is associated with the heart, the spine, and overall vitality. When the Sun is strong in a chart, the individual is often confident, radiant, and a natural leader. When weak, there may be struggles with self-esteem or finding one\'s true purpose.',
      personalityInfluence: 'Your Sun sign determines your fundamental personality traits. It dictates your outward behavior and how you naturally respond to the world. A strong Sun makes a person authoritative, dignified, and honorable, endowing them with immense willpower and determination. They are often ambitious, independent, and possess a strong sense of self. Conversely, an afflicted Sun can lead to arrogance, egotism, or a lack of self-confidence. It plays a pivotal role in shaping a person\'s career path, often pointing towards leadership roles, government positions, or creative endeavors where they can be in the spotlight.',
      vedicVsWestern: 'While both systems recognize the Sun as a vital luminary, their approach differs. In Western astrology, the Sun sign is the primary indicator of personality and the most common identifier used in daily horoscopes. It focuses heavily on the psychological traits and the ego. In Vedic astrology (Jyotish), the Sun (Surya) is considered a cruel or malefic planet (Kroora Graha) because its intense heat can burn the qualities of planets it sits near (combustion). However, it is also the Karaka (significator) of the soul (Atmakaraka) and father. Vedic astrology relies more heavily on the Moon sign (Rashi) and Ascendant (Lagna) for daily life predictions, placing the Sun as the indicator of spiritual growth, career success, and relationships with authority.',
      faqs: [
        {
          question: 'What happens when the Sun is strong in a birth chart?',
          answer: 'A strong Sun provides excellent health, leadership qualities, confidence, a strong sense of purpose, and success in career, particularly in government or authoritative roles.'
        },
        {
          question: 'What does a weak Sun indicate?',
          answer: 'A weak or afflicted Sun can indicate low self-esteem, lack of confidence, issues with authority figures or father, and a lack of clear direction in life.'
        },
        {
          question: 'Which zodiac sign does the Sun rule?',
          answer: 'The Sun is the ruler of Leo (Simha).'
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
      introduction: 'The Moon, known as Chandra or Soma in Vedic astrology, is the fastest-moving celestial body in the astrological system. It represents the mind, emotions, mother, and the subconscious. Unlike the Sun, which is your conscious identity, the Moon is your instinctual self. It governs how you feel, how you nurture and seek nurturing, and your deepest emotional needs. The Moon’s placement in your chart reveals your inner emotional landscape and your spontaneous reactions to the world around you.',
      whatItRepresents: 'The Moon governs the realm of feelings, intuition, and memories. It is intimately connected to the concept of the mother and maternal figures, reflecting how you were nurtured and how you nurture others. It dictates your emotional security and what makes you feel safe and comfortable. Physically, the Moon is associated with body fluids, the stomach, and the breasts. A well-placed Moon brings emotional stability, empathy, and a nurturing disposition, while an afflicted Moon can lead to mood swings, anxiety, and emotional volatility.',
      personalityInfluence: 'Your Moon sign is crucial in understanding your emotional responses. It colors your inner world. Individuals with a strong Moon are often deeply empathetic, intuitive, and caring. They possess a strong imagination and are highly receptive to the feelings of others. They adapt well to changes and have a natural instinct for protecting their loved ones. However, if the Moon is challenged by malefic planets, the person might struggle with emotional boundaries, clinginess, irrational fears, or deep-seated insecurities. The Moon dictates our daily moods and the subtle shifts in our emotional state.',
      vedicVsWestern: 'In Western astrology, the Moon represents the emotional self, habits, and subconscious mind, playing a secondary role to the Sun sign in popular astrology. In Vedic astrology, the Moon (Chandra) is arguably the most important planet for interpreting daily life, psychological well-being, and compatibility. The Vedic Moon sign (Janma Rashi) is the primary sign used for daily horoscopes in India. Furthermore, the Nakshatra (lunar mansion) the Moon occupies at birth is the foundational pillar of Vedic astrology, determining the starting point of a person\'s planetary periods (Dasha system) and playing a critical role in Kundli matching for marriage.',
      faqs: [
        {
          question: 'Why is the Moon sign so important in Vedic astrology?',
          answer: 'In Vedic astrology, the Moon represents the mind (Manas). Since our experience of reality is filtered through our mind, the Moon\'s placement dictates our perception, happiness, and mental peace. It also determines the Dasha system (planetary periods).'
        },
        {
          question: 'What does an exalted Moon mean?',
          answer: 'The Moon is exalted in Taurus. This placement brings emotional stability, an appreciation for beauty and comfort, strong intuition, and a generally peaceful and calm disposition.'
        },
        {
          question: 'How does the Moon affect compatibility?',
          answer: 'The Moon dictates emotional needs. In relationships, compatible Moon signs ensure emotional understanding, shared comfort zones, and a natural sympathy between partners.'
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
      introduction: 'Mars, known as Mangal or Kuja in Vedic astrology, is the fiery red planet that governs our raw energy, drive, and physical vitality. It is the celestial warrior, representing courage, ambition, and the instinct for survival. While the Sun gives you purpose and the Moon dictates how you feel, Mars determines how you act and assert yourself to achieve those goals. It is the planet of action, passion, and, occasionally, aggression.',
      whatItRepresents: 'Mars represents our physical strength, stamina, and our ability to overcome obstacles. It governs the muscular system, blood, and the immune system. Psychologically, it rules our competitive spirit, our desire to win, and our assertiveness. Mars is also associated with younger siblings, particularly brothers, and professions related to the military, sports, engineering, and surgery. A strong Mars grants fearlessness, logical thinking, and the ability to execute plans efficiently. A weak or afflicted Mars can result in a lack of drive, cowardice, or conversely, uncontrolled anger and impulsiveness.',
      personalityInfluence: 'The placement of Mars in your birth chart describes your style of taking action and how you express anger. A well-placed Mars makes a person independent, decisive, and capable of taking calculated risks. These individuals are often natural leaders in crisis situations. They are fiercely protective of what they care about and will fight for their beliefs. If Mars is negatively aspected, the individual may be prone to arguments, impatience, recklessness, and a short temper. Understanding your Mars sign helps you channel your fiery energy constructively rather than destructively.',
      vedicVsWestern: 'In Western astrology, Mars is primarily associated with the ego\'s desires, sexuality, and self-assertion. It is the ruler of Aries and the traditional ruler of Scorpio. In Vedic astrology, Mars (Mangal) is considered a natural malefic (Kroora Graha) because of its fiery, aggressive nature. Its placement is highly scrutinized, particularly regarding marriage. The "Mangal Dosha" or "Manglik" condition occurs when Mars is placed in specific houses (1st, 4th, 7th, 8th, or 12th) in a birth chart. This dosha is believed to cause fiery friction in marriage and is a key factor in Kundli matching, requiring specific remedies or a similarly placed Mars in the partner\'s chart to neutralize the effect.',
      faqs: [
        {
          question: 'What is Mangal Dosha (Manglik)?',
          answer: 'Mangal Dosha is a condition in Vedic astrology when Mars is placed in the 1st, 4th, 7th, 8th, or 12th house of a birth chart. It signifies a strong, sometimes aggressive energy that can cause friction in partnerships if not properly matched or mitigated.'
        },
        {
          question: 'What does Mars rule over in the body?',
          answer: 'Mars rules the blood, muscular system, bone marrow, and overall physical vitality and immune response.'
        },
        {
          question: 'How do I strengthen a weak Mars?',
          answer: 'Astrologically, strengthening Mars can involve wearing red coral, regular physical exercise, cultivating discipline, and participating in sports or martial arts to constructively channel its energy.'
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
      introduction: 'Mercury, known as Budh in Vedic astrology, is the planet of intellect, communication, and commerce. Orbiting closest to the Sun, it is the fastest of the planets (excluding the Moon) and represents the swiftness of thought and speech. Mercury governs how we process information, our learning style, and our ability to convey ideas to others. It is the celestial messenger, bridging the gap between the internal mind and the external world through language and logic.',
      whatItRepresents: 'Mercury represents analytical thinking, adaptability, and versatility. It governs the nervous system, the brain, and the respiratory system. It is the significator of trade, commerce, writing, education, and short-distance travel. A strong Mercury in a birth chart gives excellent communication skills, a sharp memory, a witty sense of humor, and a talent for mathematics or business. A weak or afflicted Mercury can indicate speech impediments, learning difficulties, nervousness, or a tendency toward dishonesty or manipulation.',
      personalityInfluence: 'The position of Mercury in your chart dictates your communication style and cognitive processes. Individuals with a prominent Mercury are often curious, talkative, and quick-witted. They excel in writing, speaking, teaching, and sales. They are highly adaptable and can quickly grasp new concepts. However, because Mercury is a neutral planet, it takes on the characteristics of the planets it associates with. If conjunct with a malefic planet, the intellect may be used for deceptive purposes. If conjunct with a benefic, the intellect is used for noble and constructive causes.',
      vedicVsWestern: 'The core symbolism of Mercury remains largely consistent between Western and Vedic astrology. Both systems view it as the ruler of Gemini and Virgo, governing intellect and communication. Western astrology often emphasizes Mercury\'s retrograde periods, analyzing them as times of communication breakdowns and technological glitches. In Vedic astrology, while retrograde motion is noted, Mercury (Budh) is deeply analyzed for its dignity and conjunctions. Budh is considered the Karaka for maternal uncles and friends. A strong Budh is considered essential for success in modern fields like IT, accounting, writing, and business management.',
      faqs: [
        {
          question: 'What does a Mercury Retrograde mean?',
          answer: 'Mercury retrograde is an optical illusion where the planet appears to move backwards. Astrologically, it is associated with delays, miscommunications, and the need to review, revise, and reflect rather than starting new ventures.'
        },
        {
          question: 'What professions are ruled by Mercury?',
          answer: 'Mercury rules professions involving communication, intellect, and trade. This includes writers, teachers, accountants, software developers, journalists, and salespeople.'
        },
        {
          question: 'How does Mercury behave with other planets?',
          answer: 'Mercury is highly adaptable and takes on the nature of the planets it is conjunct with. With Venus, it makes one poetic and artistic; with Mars, it makes the speech sharp and argumentative.'
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
      introduction: 'Jupiter, revered as Guru or Brihaspati in Vedic astrology, is the largest planet in our solar system and the most benefic planet in astrology. It is the planet of expansion, wisdom, luck, and abundance. Jupiter represents the higher mind, philosophy, religion, and the search for meaning in life. It acts as a protective shield, offering grace, optimism, and opportunities for growth wherever it is placed in the birth chart.',
      whatItRepresents: 'Jupiter represents higher education, spiritual teachers, law, morality, and long-distance travel. It is the primary significator of wealth (Dhana Karaka) and children (Putra Karaka). Physically, it is associated with the liver, fat, and the arterial system. A well-placed Jupiter brings profound wisdom, a generous spirit, strong moral values, financial prosperity, and a generally fortunate life. An afflicted Jupiter, while rarely actively harmful, can lead to overindulgence, financial extravagance, blind optimism, or a dogmatic approach to religion or beliefs.',
      personalityInfluence: 'The placement of Jupiter shapes a person\'s moral compass and their capacity for joy and generosity. Individuals with a strong Jupiter are often optimistic, jovial, and possessing a deep sense of faith. They are natural teachers, guides, and advisors, drawing people to them with their wisdom and positive aura. They value justice and truth. Conversely, if Jupiter is weak, a person might lack direction, struggle with financial retention, or exhibit a lack of faith and pessimism.',
      vedicVsWestern: 'In Western astrology, Jupiter is known as the "Greater Benefic," ruling Sagittarius (and traditionally Pisces), associated with luck, travel, and expansion of the mind and waistline. In Vedic astrology, Guru is deeply revered as the preceptor of the gods. Its placement is highly critical for determining overall life success, wealth, and the well-being of children. In a woman\'s Vedic birth chart, Jupiter is the primary significator of the husband (unlike Western astrology which often looks to Mars or the Sun). Jupiter\'s transit through a zodiac sign (lasting about one year) is closely watched for setting the macro-trends of a person\'s life.',
      faqs: [
        {
          question: 'Why is Jupiter considered the most benefic planet?',
          answer: 'Jupiter expands everything it touches. It is the planet of grace, wisdom, and protection. Even when placed in a difficult house, it often provides a safety net and prevents total ruin.'
        },
        {
          question: 'What does Jupiter represent in a woman\'s birth chart in Vedic astrology?',
          answer: 'In Vedic astrology, Jupiter is the Karaka (significator) for the husband in a woman\'s chart, indicating the qualities of her life partner and the overall happiness in marriage.'
        },
        {
          question: 'What is a "Guru Chandal Yoga"?',
          answer: 'This is a specific planetary combination in Vedic astrology where Jupiter is conjunct Rahu. It can indicate a person who challenges traditional beliefs, questions authority, or has an unconventional approach to religion and spirituality.'
        }
      ]
    }
  },
  {
    id: 'venus',
    name: 'Venus',
    sanskritName: 'Shukra',
    title: 'Venus (Shukra) in Astrology: Love, Beauty & Wealth',
    description: 'Explore Venus in astrology. Discover how Shukra influences your romantic relationships, aesthetics, luxuries, and artistic talents.',
    type: 'Inner Planet',
    rulingZodiacs: ['Taurus', 'Libra'],
    exaltation: 'Pisces',
    debilitation: 'Virgo',
    content: {
      introduction: 'Venus, known as Shukra in Vedic astrology, is the brightest planet in the night sky and the ultimate symbol of beauty, love, and luxury. It governs our capacity to attract and appreciate the finer things in life. Venus represents art, romance, marriage, aesthetics, and material comforts. It dictates what we value, what gives us pleasure, and how we relate to others on a romantic and social level.',
      whatItRepresents: 'Venus represents harmony, diplomacy, and the arts. It governs music, poetry, fashion, jewelry, and vehicles. Physically, it is associated with the reproductive system, kidneys, and the skin. A strong Venus in a birth chart bestows physical attractiveness, a magnetic personality, success in romance, and an inclination toward artistic pursuits. It also brings material wealth and a life filled with comforts. A weak or afflicted Venus can indicate relationship troubles, lack of satisfaction in love, financial difficulties due to overspending, or a lack of artistic appreciation.',
      personalityInfluence: 'The placement of Venus in your chart reveals your approach to love and relationships, as well as your aesthetic preferences. Individuals with a prominent Venus are often charming, graceful, and highly sociable. They seek peace and harmony and often avoid conflict. They have a refined taste and a natural appreciation for beauty in all its forms. If Venus is afflicted, the person may become overly materialistic, vain, or prone to indulging in excessive sensual pleasures at the expense of their well-being.',
      vedicVsWestern: 'Both Western and Vedic astrology regard Venus as the "Lesser Benefic" (after Jupiter), ruling Taurus and Libra, and signifying love and money. In Western astrology, Venus heavily dictates personal style, romantic attraction, and what makes a person feel loved. In Vedic astrology, Shukra is the preceptor of the Asuras (demons) and possesses the knowledge of Sanjeevani Vidya (bringing the dead back to life). It is the primary significator of marriage (Kalatra Karaka) and the wife in a man\'s chart. A strong Shukra is considered essential for marital bliss and worldly enjoyments in the Vedic system.',
      faqs: [
        {
          question: 'What does Venus signify in a man\'s birth chart?',
          answer: 'In Vedic astrology, Venus represents the wife or female partner in a man\'s chart. Its placement indicates the type of partner he will attract and the overall quality of his romantic relationships.'
        },
        {
          question: 'Which professions are associated with Venus?',
          answer: 'Venus rules professions related to beauty, art, and luxury. This includes fashion designers, actors, musicians, interior decorators, event planners, and those in the cosmetics or luxury vehicle industry.'
        },
        {
          question: 'Why is Venus exalted in Pisces?',
          answer: 'Pisces is a sign of universal love, spirituality, and boundless compassion. Venus, the planet of love, reaches its highest, most selfless, and unconditional expression in Pisces, moving beyond physical attachment to spiritual love.'
        }
      ]
    }
  },
  {
    id: 'saturn',
    name: 'Saturn',
    sanskritName: 'Shani',
    title: 'Saturn (Shani) in Astrology: Karma, Discipline & Time',
    description: 'Learn about Saturn in astrology. Discover how Shani influences your discipline, karma, challenges, longevity, and life lessons.',
    type: 'Outer Planet',
    rulingZodiacs: ['Capricorn', 'Aquarius'],
    exaltation: 'Libra',
    debilitation: 'Aries',
    content: {
      introduction: 'Saturn, known and often feared as Shani in Vedic astrology, is the furthest visible planet and the slowest moving among the traditional seven planets. It represents the boundaries of reality, time, karma, and discipline. Saturn is the ultimate teacher and taskmaster of the zodiac. While it is often associated with delays, restrictions, and hardships, its true purpose is to forge character through experience, ensuring that you learn the necessary lessons for your soul\'s evolution.',
      whatItRepresents: 'Saturn represents hard work, responsibility, structure, and endurance. It is the significator of karma, delivering the results of your past actions—good or bad. It governs old age, longevity, tradition, and the working class. Physically, it is associated with the bones, teeth, knees, and the aging process. A well-placed Saturn gives immense patience, discipline, a strong work ethic, and the ability to achieve long-term success through perseverance. A weak or afflicted Saturn can bring chronic illness, severe delays, poverty, melancholy, and a feeling of being constantly burdened.',
      personalityInfluence: 'The placement of Saturn indicates the area of life where you will face your greatest challenges, tests, and ultimately, your greatest mastery. Individuals with a strong Saturn are often serious, responsible, and highly dependable. They are pragmatic realists who understand the value of hard work. They may appear cold or detached, but they are incredibly loyal. Conversely, a challenging Saturn can make a person fearful, overly pessimistic, or rigid in their thinking.',
      vedicVsWestern: 'In Western astrology, Saturn represents restrictions, boundaries, the father figure, and the rules of society. The "Saturn Return" (around age 29) is a major astrological milestone marking the transition into true adulthood. In Vedic astrology, Shani is considered the chief malefic (Paap Graha) but also a planet of justice. The "Sade Sati" is a highly feared and respected 7.5-year period when Saturn transits over and around the natal Moon, bringing intense life changes, challenges, and karmic balancing. However, Vedic astrology also views Saturn as the significator of longevity (Ayush Karaka) and the planet that grants the highest spiritual detachment when well-placed.',
      faqs: [
        {
          question: 'What is Sade Sati?',
          answer: 'Sade Sati is a 7.5-year period in Vedic astrology when Saturn transits the 12th, 1st, and 2nd houses from your natal Moon sign. It is a period of significant transformation, often accompanied by challenges, to clear karmic debts.'
        },
        {
          question: 'Is Saturn always a "bad" planet?',
          answer: 'No. While Saturn brings challenges and delays, it is the planet of justice. It rewards hard work, discipline, and honesty. A strong Saturn is essential for building a lasting legacy and achieving true spiritual detachment.'
        },
        {
          question: 'What does a Saturn Return signify?',
          answer: 'Occurring roughly every 29 years, the Saturn Return is when Saturn returns to its exact position in your birth chart. It signifies a period of growing up, facing reality, and taking responsibility for your life path.'
        }
      ]
    }
  },
  {
    id: 'rahu',
    name: 'Rahu',
    sanskritName: 'Rahu (North Node)',
    title: 'Rahu (North Node) in Astrology: Desire, Illusion & Ambition',
    description: 'Explore Rahu in astrology. Discover how the North Node influences your deepest desires, ambitions, worldly illusions, and unconventional path.',
    type: 'Shadow Planet (Lunar Node)',
    rulingZodiacs: ['Aquarius (Co-ruler)'],
    exaltation: 'Taurus / Gemini',
    debilitation: 'Scorpio / Sagittarius',
    content: {
      introduction: 'Rahu, known as the North Node of the Moon in Western astrology, is not a physical planet but a mathematically calculated shadow planet (Chhaya Graha). It represents the point where the Moon\'s orbit crosses the ecliptic (the Sun\'s path). In Vedic mythology, Rahu is the severed head of a demon who drank the nectar of immortality. Because it is a head without a body, Rahu symbolizes insatiable desire, illusion, and the unending pursuit of worldly success and material gains.',
      whatItRepresents: 'Rahu represents obsession, ambition, sudden changes, and things that are foreign, unconventional, or taboo. It is the driving force behind our worldly desires and our urge to break free from tradition. Rahu governs technology, mass media, foreign travel, and poisons/toxins. A well-placed Rahu can grant sudden wealth, immense success, political power, and out-of-the-box thinking. An afflicted Rahu can lead to deception, addiction, phobias, a constant feeling of dissatisfaction, and a tendency to manipulate others for personal gain.',
      personalityInfluence: 'Rahu\'s placement in your chart indicates where you will have the strongest desires and where you are meant to step out of your comfort zone in this lifetime. Individuals strongly influenced by Rahu are often ambitious, highly driven, and attracted to foreign cultures or unconventional lifestyles. They are trendsetters and innovators. However, they must be careful not to fall into the trap of constant craving, as Rahu\'s nature is to promise the world but leave one feeling empty if the desires are purely selfish.',
      vedicVsWestern: 'In Western astrology, the North Node (Rahu) represents the soul\'s evolutionary path in this lifetime—the lessons we are here to learn and the direction we need to move towards, moving away from the comfort zone of the South Node. In Vedic astrology, Rahu is considered a major malefic planet, associated with Maya (illusion), materialism, and unexpected, sudden events. While Western astrology views the North Node largely positively as a spiritual destiny, Vedic astrology views Rahu with caution, acknowledging its power to grant immense worldly success but warning of its deceptive and chaotic nature.',
      faqs: [
        {
          question: 'Are Rahu and the North Node the same thing?',
          answer: 'Astronomically, yes. Both refer to the ascending lunar node. However, the interpretive approach differs; Western astrology views it as a spiritual destiny point, while Vedic astrology views it as a powerful, sometimes chaotic shadow planet of desire.'
        },
        {
          question: 'What happens during a Rahu Mahadasha?',
          answer: 'Rahu Mahadasha is an 18-year planetary period in Vedic astrology. It is often a time of massive, sudden changes, foreign travel, intense ambition, and potential worldly success, but it can also bring confusion and psychological stress.'
        },
        {
          question: 'Why is Rahu associated with illusions (Maya)?',
          answer: 'In mythology, Rahu is a head without a stomach. It can consume but never be satisfied. It creates the illusion that fulfilling the next desire will bring happiness, representing the endless cycle of materialism.'
        }
      ]
    }
  },
  {
    id: 'ketu',
    name: 'Ketu',
    sanskritName: 'Ketu (South Node)',
    title: 'Ketu (South Node) in Astrology: Karma, Liberation & Spirituality',
    description: 'Learn about Ketu in astrology. Discover how the South Node influences your past life karma, spiritual liberation, intuition, and detachment.',
    type: 'Shadow Planet (Lunar Node)',
    rulingZodiacs: ['Scorpio (Co-ruler)'],
    exaltation: 'Scorpio / Sagittarius',
    debilitation: 'Taurus / Gemini',
    content: {
      introduction: 'Ketu, known as the South Node of the Moon in Western astrology, is the mathematical counterpart to Rahu. If Rahu is the severed head of the demon, Ketu is the headless body. Ketu represents what we have already mastered in past lives, our innate talents, and ultimately, our path to spiritual liberation (Moksha). It is the planet of detachment, letting go, and spiritual insight, operating in complete contrast to Rahu\'s materialistic desires.',
      whatItRepresents: 'Ketu represents spirituality, asceticism, intuition, and past-life karma. It governs the occult, hidden knowledge, and isolation. It acts like a black hole in the birth chart, indicating an area of life where we feel detached, disinterested, or where we experience sudden losses that force us to look inward. A well-placed Ketu gives profound spiritual wisdom, strong intuition, psychic abilities, and a natural inclination towards meditation and healing. An afflicted Ketu can cause confusion, feeling lost, sudden accidents, or an inability to function in the material world.',
      personalityInfluence: 'Ketu\'s placement shows where your past-life expertise lies, making those areas feel natural and familiar to you. However, it also indicates where you must practice detachment. Individuals strongly influenced by Ketu are often highly intuitive, introverted, and spiritually inclined. They may have a natural talent for research, astrology, or healing. They often feel a sense of dissatisfaction with worldly achievements, constantly seeking a deeper meaning and connection to the divine.',
      vedicVsWestern: 'In Western astrology, the South Node (Ketu) represents our past lives, our comfort zones, and the deeply ingrained habits we need to move away from in order to grow towards our North Node destiny. In Vedic astrology, Ketu is considered a spiritual malefic. While it can cause material loss, sudden endings, and health issues, it is revered as the Moksha Karaka—the significator of spiritual liberation. Vedic astrology views Ketu as the ultimate force that strips away illusions (Maya) to reveal the naked truth of existence.',
      faqs: [
        {
          question: 'Why is Ketu called the Moksha Karaka?',
          answer: 'Moksha means spiritual liberation from the cycle of rebirth. Ketu strips away material desires and illusions, forcing the soul to look inward and seek union with the divine, making it the ultimate planet of spiritual enlightenment.'
        },
        {
          question: 'What is the relationship between Rahu and Ketu?',
          answer: 'Rahu and Ketu are exactly 180 degrees apart in the birth chart. They represent the axis of destiny. Rahu pulls you outward toward new material experiences, while Ketu pulls you inward toward detachment and spiritual reflection.'
        },
        {
          question: 'How does Ketu affect the house it is placed in?',
          answer: 'Ketu often creates a sense of detachment or dissatisfaction regarding the affairs of the house it occupies. It indicates an area where you have past-life mastery but must now learn to let go of control.'
        }
      ]
    }
  }
];
