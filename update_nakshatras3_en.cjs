const fs = require('fs');

const nakshatras19To27 = [
  {
    id: 'mula',
    name: 'Mula',
    meaning: 'The Root',
    deity: 'Nirriti (Goddess of Destruction and Dissolution)',
    rulingPlanet: 'Ketu',
    zodiacSign: 'Sagittarius (0°00′ – 13°20′)',
    symbol: 'A Tied Bunch of Roots',
    content: {
      introduction: "Mula is the 19th Nakshatra and marks the beginning of the final cosmic cycle. It resides entirely in the expansive sign of Sagittarius but begins at the treacherous Gandanta point (the transition from water to fire). Symbolized by a tied bunch of roots, Mula represents the core, the foundation, and getting to the absolute bottom of things. Ruled by Nirriti, the goddess of dissolution and destruction, and governed by Ketu, Mula is a Nakshatra of massive upheaval, uprooting the old to discover the ultimate spiritual truth hidden beneath the surface.",
      personalityTraits: "Mula natives possess incredibly probing, investigative, and philosophical minds. They are never satisfied with surface-level explanations and have a compulsion to dig deep—whether into scientific research, psychology, or spirituality. They often experience sudden reversals of fortune, losses, or massive life changes that force them to detach from the material world. They are highly resilient, direct, and possess a raw, untamed energy.",
      careerInterests: "They excel in any field requiring deep investigation or dealing with roots/foundations. Excellent careers include scientific research, psychology, archaeology, mining, alternative medicine (herbalism/roots), investigative journalism, and spiritual asceticism.",
      shadowSide: "The shadow side of Mula is self-destruction and extreme volatility. They can completely uproot their own lives (destroying relationships or careers) on an impulse. Because they are ruled by the goddess of destruction, they can be highly aggressive, cynical, and cause massive pain to others by uncovering truths that were meant to stay hidden.",
      fourPadas: [
        { pada: 1, description: "Aries Navamsha (0°00' - 3°20' Sagittarius): Driven by Mars. The most aggressive and destructive pada. Focuses on aggressively uprooting falsehoods and enemies." },
        { pada: 2, description: "Taurus Navamsha (3°20' - 6°40' Sagittarius): Driven by Venus. Focuses on material roots and foundations. Excellent for accumulating wealth through earthly resources (mining, farming)." },
        { pada: 3, description: "Gemini Navamsha (6°40' - 10°00' Sagittarius): Driven by Mercury. The intellectual researcher. Focuses on communication, writing, and digging into intellectual mysteries." },
        { pada: 4, description: "Cancer Navamsha (10°00' - 13°20' Sagittarius): Driven by Moon. The most emotional and healing pada. Uses the uprooting energy to heal psychological trauma and family karma." }
      ],
      compatibility: "Mula is highly compatible with Purva Ashadha, Magha, and Ashwini. It often faces immense friction with Jyeshtha, Ashlesha, and Revati.",
      faqs: [
        {
          question: 'Why is Mula considered a difficult Nakshatra?',
          answer: 'Because it demands total detachment. Mula will systematically destroy or "uproot" anything in the native\'s life that is built on an illusion or false foundation, forcing them toward spiritual truth.'
        },
        {
          question: 'What is the power of Mula?',
          answer: 'Its power is "Barhana Shakti," the power to ruin, destroy, and break things apart in order to crush the ego and reveal the divine root.'
        }
      ]
    }
  },
  {
    id: 'purva-ashadha',
    name: 'Purva Ashadha',
    meaning: 'The Early Invincible One',
    deity: 'Apas (The Water Goddess)',
    rulingPlanet: 'Venus',
    zodiacSign: 'Sagittarius (13°20′ – 26°40′)',
    symbol: 'An Elephant Tusk / Winnowing Basket',
    content: {
      introduction: "Purva Ashadha resides entirely in the fiery sign of Sagittarius and translates to 'The Early Invincible One'. Symbolized by an elephant tusk (representing aggressive strength) or a winnowing basket (separating grain from chaff), it is a Nakshatra of immense conviction, purification, and unbeatable resolve. Uniquely, though it sits in a fire sign, it is ruled by Apas, the Goddess of Water, creating a powerful dynamic of boiling water—intense emotional purification and unstoppable momentum.",
      personalityTraits: "Individuals born under Purva Ashadha are fiercely independent, highly opinionated, and possess an unshakable belief in themselves. Once they set their mind on a goal, they are virtually invincible in their pursuit of it. They are highly intelligent, philosophical, and have a strong sense of justice. They possess a natural charisma and often inspire others, but they refuse to be told what to do.",
      careerInterests: "They thrive in roles where they can lead, debate, and inspire. Good careers include law, politics, motivational speaking, the Navy/marine industries, teaching, debate, and any profession requiring absolute conviction.",
      shadowSide: "The shadow side of Purva Ashadha is an extreme level of stubbornness and a massive ego. Because they feel they are 'invincible', they rarely take advice and often have to learn things the hard way through failure. They can be incredibly argumentative and possess a 'holier-than-thou' attitude.",
      fourPadas: [
        { pada: 1, description: "Leo Navamsha (13°20' - 16°40' Sagittarius): Driven by Sun. Highly dignified, proud, and seeks leadership roles. Focuses heavily on personal victory and honor." },
        { pada: 2, description: "Virgo Navamsha (16°40' - 20°00' Sagittarius): Driven by Mercury. The intellectual warrior. Uses the winnowing basket to separate truth from falsehood through intense analysis." },
        { pada: 3, description: "Libra Navamsha (20°00' - 23°20' Sagittarius): Driven by Venus. Vargottama placement. The most socially adept and artistic pada, achieving invincibility through charm and alliances." },
        { pada: 4, description: "Scorpio Navamsha (23°20' - 26°40' Sagittarius): Driven by Mars. The most intense and occult-oriented pada. Uses their invincible energy to conquer hidden fears and mysteries." }
      ],
      compatibility: "Purva Ashadha is highly compatible with Mula, Uttara Ashadha, and Revati. It often clashes with Ashlesha and Punarvasu.",
      faqs: [
        {
          question: 'Why is it called the Invincible Star?',
          answer: 'Because of their sheer willpower. Even when they fail or are defeated objectively, they refuse to accept defeat mentally. Their inner conviction remains unbroken.'
        },
        {
          question: 'What is the power of Purva Ashadha?',
          answer: 'Its power is "Varchaskara Shakti," the power to bring invigoration, absolute confidence, and the energy to win.'
        }
      ]
    }
  },
  {
    id: 'uttara-ashadha',
    name: 'Uttara Ashadha',
    meaning: 'The Latter Invincible One',
    deity: 'The Ten Vishvedevas (Universal Gods)',
    rulingPlanet: 'Sun',
    zodiacSign: 'Sagittarius (26°40′) to Capricorn (10°00′)',
    symbol: 'An Elephant Tusk / Small Bed',
    content: {
      introduction: "Uttara Ashadha bridges the philosophical sign of Sagittarius and the highly practical sign of Capricorn. Translating to 'The Latter Invincible One', it takes the raw, aggressive conviction of Purva Ashadha and channels it into structured, long-lasting victory. Ruled by the Ten Vishvedevas (the universal gods of goodness, truth, and time), this Nakshatra is deeply aligned with dharma (righteous duty), universal law, and achieving unquestionable success through patience and sheer enduring effort.",
      personalityTraits: "Uttara Ashadha natives are the ultimate achievers of the zodiac. They are highly disciplined, responsible, and possess an unparalleled work ethic. They are deeply committed to truth, morality, and doing what is right for society as a whole. They are less argumentative than Purva Ashadha and more focused on proving their invincibility through actual, undeniable results. They possess immense patience and are highly respected by their peers.",
      careerInterests: "They excel in high-level leadership, government, and structural roles. Excellent fields include politics, the military, executive management, law, architecture, religious leadership, and any career requiring immense responsibility.",
      shadowSide: "The shadow side of Uttara Ashadha is extreme rigidity and a tendency to become a workaholic. They can be overly harsh on themselves and others when standards aren't met. Because they are so focused on universal duty, they often struggle with personal intimacy and may neglect their families in favor of their careers.",
      fourPadas: [
        { pada: 1, description: "Sagittarius Navamsha (26°40' Sagittarius - 0°00' Capricorn): Driven by Jupiter. Highly moral and philosophical. Seeks victory through spreading truth and religious teachings." },
        { pada: 2, description: "Capricorn Navamsha (0°00' - 3°20' Capricorn): Driven by Saturn. Vargottama placement. The absolute peak of discipline and material success. Unstoppable work ethic." },
        { pada: 3, description: "Aquarius Navamsha (3°20' - 6°40' Capricorn): Driven by Saturn. Humanitarian and scientific. Seeks structured victory for the benefit of the masses and society at large." },
        { pada: 4, description: "Pisces Navamsha (6°40' - 10°00' Capricorn): Driven by Jupiter. The most spiritual pada. Uses their immense endurance and power to heal and uplift humanity." }
      ],
      compatibility: "Uttara Ashadha is highly compatible with Shravana, Purva Ashadha, and Revati. It often struggles with Magha and Vishakha.",
      faqs: [
        {
          question: 'What is the difference between Purva and Uttara Ashadha?',
          answer: 'Purva Ashadha is the inner feeling of invincibility and the aggressive pursuit of a goal. Uttara Ashadha is the actual, structural manifestation of that victory through patience, time, and universal alignment.'
        },
        {
          question: 'What is the power of Uttara Ashadha?',
          answer: 'Its power is "Apradhrisya Shakti," the power to grant an unchallengeable, permanent victory that aligns with cosmic law.'
        }
      ]
    }
  },
  {
    id: 'shravana',
    name: 'Shravana',
    meaning: 'Hearing / The One Who Listens',
    deity: 'Vishnu (The Preserver of the Universe)',
    rulingPlanet: 'Moon',
    zodiacSign: 'Capricorn (10°00′ – 23°20′)',
    symbol: 'An Ear / Three Footprints',
    content: {
      introduction: "Shravana resides entirely within the structured sign of Capricorn. Translating to 'Hearing' and symbolized by an ear, it is the Nakshatra of listening, learning, and oral traditions. Ruled by Lord Vishnu, the preserver of the universe, Shravana is deeply connected to maintaining cosmic order through the transmission of sacred knowledge. It is the star of scholars, teachers, and those who seek wisdom by quietly listening to the universe.",
      personalityTraits: "Shravana natives are highly intelligent, perceptive, and excellent listeners. They are lifelong students who have a deep respect for teachers, ancient texts, and oral traditions. They possess a calm, peaceful demeanor and are incredibly patient. Despite being in ambitious Capricorn, their ambition is usually directed toward acquiring knowledge, organizing information, and achieving spiritual or academic excellence. They are highly dependable and well-spoken.",
      careerInterests: "They excel in fields involving communication, education, and preservation. Good careers include teaching, counseling, translation, linguistics, music/audio engineering, writing, journalism, and religious scholarship.",
      shadowSide: "The shadow side of Shravana is a tendency to be overly rigid or dogmatic about the knowledge they acquire. They can become 'know-it-alls' who refuse to listen to opposing viewpoints. They can also suffer from excessive gossip, either being the victim of it or spreading it, as the 'ear' hears both sacred truths and mundane lies.",
      fourPadas: [
        { pada: 1, description: "Aries Navamsha (10°00' - 13°20' Capricorn): Driven by Mars. Highly logical and argumentative. Uses their listening skills to find flaws in others' arguments and win debates." },
        { pada: 2, description: "Taurus Navamsha (13°20' - 16°40' Capricorn): Driven by Venus. Highly musical and artistic. Focuses on the beauty of sound and material stability through acquired knowledge." },
        { pada: 3, description: "Gemini Navamsha (16°40' - 20°00' Capricorn): Driven by Mercury. The peak of communication and journalism. Incredible ability to process, organize, and transmit massive amounts of data." },
        { pada: 4, description: "Cancer Navamsha (20°00' - 23°20' Capricorn): Driven by Moon. The most empathetic and nurturing pada. Uses listening to heal others, making excellent psychologists and counselors." }
      ],
      compatibility: "Shravana is highly compatible with Uttara Ashadha, Dhanishta, and Punarvasu. It often faces friction with Mula and Magha.",
      faqs: [
        {
          question: 'What do the Three Footprints symbolize?',
          answer: 'They represent the three steps of Vamana (an avatar of Vishnu) which conquered the Earth, the Sky, and the Underworld. It symbolizes Shravana\'s ability to conquer all realms through the power of absolute knowledge and listening.'
        },
        {
          question: 'What is the power of Shravana?',
          answer: 'Its power is "Samhanana Shakti," the power to connect, link things together, and organize the universe through listening and spoken word.'
        }
      ]
    }
  },
  {
    id: 'dhanishta',
    name: 'Dhanishta',
    meaning: 'The Wealthiest / The Most Benevolent',
    deity: 'The Eight Vasus (Gods of Material Elements)',
    rulingPlanet: 'Mars',
    zodiacSign: 'Capricorn (23°20′) to Aquarius (6°40′)',
    symbol: 'A Musical Drum (Mridangam)',
    content: {
      introduction: "Dhanishta bridges the highly practical sign of Capricorn and the visionary sign of Aquarius. Translating to 'The Wealthiest', it is a star of immense material abundance, fame, and rhythm. Symbolized by a musical drum (Mridangam), it represents the heartbeat of the universe, perfect timing, and the ability to organize people. Ruled by the Eight Vasus (gods of the material elements) and governed by Mars, Dhanishta is highly active, charitable, and musically inclined.",
      personalityTraits: "Individuals born under Dhanishta possess a natural sense of rhythm, timing, and organization. They are highly ambitious, energetic, and possess incredible leadership skills. They are usually very wealthy or have the innate ability to generate wealth. They are deeply charitable and love to use their resources to help others. They are highly social, love music and dance, and often find themselves in the public eye.",
      careerInterests: "They excel in fields involving rhythm, organization, wealth, and the public. Excellent careers include music, dance, event management, high finance, real estate, politics, military strategy, and large-scale philanthropy.",
      shadowSide: "The shadow side of Dhanishta is a tendency toward extreme materialism and a massive ego. Their desire for fame and recognition can make them superficial or overly concerned with their public image. They often face significant challenges in marriage and romantic partnerships due to their intense, independent Mars energy and their focus on career/public life.",
      fourPadas: [
        { pada: 1, description: "Leo Navamsha (23°20' - 26°40' Capricorn): Driven by Sun. Highly dramatic, authoritative, and focused on attaining public fame and leadership positions." },
        { pada: 2, description: "Virgo Navamsha (26°40' - 30°00' Capricorn): Driven by Mercury. Highly analytical and organized. Uses their sense of timing and structure to generate massive material wealth and businesses." },
        { pada: 3, description: "Libra Navamsha (0°00' - 3°20' Aquarius): Driven by Venus. The most artistic and musical pada. Excels in the entertainment industry and building vast social networks." },
        { pada: 4, description: "Scorpio Navamsha (3°20' - 6°40' Aquarius): Driven by Mars. The most intense and occult-oriented pada. Uses their rhythm to tap into deep psychological and hidden universal energies." }
      ],
      compatibility: "Dhanishta is highly compatible with Shatabhisha, Purva Bhadrapada, and Shravana. It often struggles heavily with Mrigashira and Chitra.",
      faqs: [
        {
          question: 'Why does Dhanishta often struggle with marriage?',
          answer: 'It is considered a "celibate" or highly independent Nakshatra. The intense focus on universal rhythm, public life, and material acquisition often leaves little room for the deep, emotional compromise required in a traditional marriage.'
        },
        {
          question: 'What is the power of Dhanishta?',
          answer: 'Its power is "Khyapayitri Shakti," the power to bestow fame, abundance, and the ability to make one the center of attention.'
        }
      ]
    }
  },
  {
    id: 'shatabhisha',
    name: 'Shatabhisha',
    meaning: 'A Hundred Physicians / A Hundred Stars',
    deity: 'Varuna (God of Cosmic Waters and the Night Sky)',
    rulingPlanet: 'Rahu',
    zodiacSign: 'Aquarius (6°40′ – 20°00′)',
    symbol: 'An Empty Circle / A Thousand Flowers',
    content: {
      introduction: "Shatabhisha resides entirely within the eccentric, intellectual sign of Aquarius. Translating to 'A Hundred Physicians', it is the ultimate Nakshatra of healing, secrecy, and the occult. Symbolized by an empty circle, it represents boundaries, containment, and the deep, hidden mysteries of the universe (the void). Ruled by Varuna, the god of cosmic waters, and governed by the shadowy planet Rahu, Shatabhisha is incredibly secretive, scientifically brilliant, and highly unconventional.",
      personalityTraits: "Shatabhisha natives are the ultimate introverts and independent thinkers of the zodiac. They possess brilliant, highly analytical, and often eccentric minds. They are deeply interested in puzzles, astronomy, astrology, and fringe sciences. They are fiercely private, keeping their true thoughts hidden behind a veil. They possess incredible healing abilities, often finding cures where others have failed. They are strictly honest but can appear cold or emotionally detached.",
      careerInterests: "They excel in fields involving healing, secrets, and advanced science. Good careers include medicine, research, astrology, astronomy, aviation, psychology, cryptography, intelligence (spies), and alternative healing.",
      shadowSide: "The shadow side of Shatabhisha is extreme isolation, secrecy, and paranoia. Their need for privacy can cause them to completely cut themselves off from society. They can be incredibly stubborn, opinionated, and highly critical of others. Their emotional detachment can make it very difficult for them to form intimate relationships.",
      fourPadas: [
        { pada: 1, description: "Sagittarius Navamsha (6°40' - 10°00' Aquarius): Driven by Jupiter. Highly philosophical and optimistic. Focuses on healing humanity through expanding knowledge and spiritual truth." },
        { pada: 2, description: "Capricorn Navamsha (10°00' - 13°20' Aquarius): Driven by Saturn. Highly practical and organized. Excellent at structuring scientific research or building physical boundaries/containment." },
        { pada: 3, description: "Aquarius Navamsha (13°20' - 16°40' Aquarius): Driven by Saturn. Vargottama placement. The peak of eccentricity, genius, and humanitarian vision. Highly detached and futuristic." },
        { pada: 4, description: "Pisces Navamsha (16°40' - 20°00' Aquarius): Driven by Jupiter. The most emotional and mystical pada. Uses deep empathy and intuition (the cosmic waters) to heal profound psychological wounds." }
      ],
      compatibility: "Shatabhisha is highly compatible with Dhanishta, Ashwini, and Swati. It often faces immense friction with Hasta and Punarvasu.",
      faqs: [
        {
          question: 'What does the Empty Circle symbolize?',
          answer: 'It symbolizes both a boundary (protecting secrets and keeping things out) and the cosmic void (the infinite potential from which all creation springs). It represents their secretive and boundless nature.'
        },
        {
          question: 'What is the power of Shatabhisha?',
          answer: 'Its power is "Bheshaja Shakti," the supreme power to heal and cure any illness, whether physical, mental, or spiritual.'
        }
      ]
    }
  },
  {
    id: 'purva-bhadrapada',
    name: 'Purva Bhadrapada',
    meaning: 'The Early Blessed One / The First of the Blessed Feet',
    deity: 'Aja Ekapada (The One-Footed Goat / A Form of Rudra)',
    rulingPlanet: 'Jupiter',
    zodiacSign: 'Aquarius (20°00′) to Pisces (3°20′)',
    symbol: 'Swords / Front Legs of a Funeral Cot',
    content: {
      introduction: "Purva Bhadrapada bridges the visionary sign of Aquarius and the deeply spiritual sign of Pisces. Symbolized by swords or the front legs of a funeral cot, it represents the burning away of the ego and the painful transition from the material world to the spiritual. Ruled by Aja Ekapada (a fierce, fiery form of Rudra), it is a Nakshatra of intense penance, extreme passion, and profound occult transformation. It deals with the darkest aspects of the human psyche to reach the highest light.",
      personalityTraits: "Individuals born under Purva Bhadrapada possess incredibly intense, passionate, and often deeply philosophical minds. They are highly unique, often eccentric, and are completely unafraid of the dark, taboo, or macabre aspects of life. They are deeply committed to their ideals and can undergo extreme penance or self-sacrifice to achieve their spiritual or societal goals. They have a powerful, sometimes intimidating presence.",
      careerInterests: "They excel in fields dealing with death, transformation, and deep philosophy. Excellent careers include mortuary sciences, psychology, occultism, astrology, extreme sports, radical politics, and any profession requiring intense focus and sacrifice.",
      shadowSide: "The shadow side of Purva Bhadrapada is extreme volatility, anger, and a fascination with the dark side of life. They can become overly cynical, destructive, or prone to extreme anxiety and nervous tension. Their intense focus on their own ideals can make them incredibly judgmental and intolerant of others.",
      fourPadas: [
        { pada: 1, description: "Aries Navamsha (20°00' - 23°20' Aquarius): Driven by Mars. Highly aggressive, pioneering, and argumentative. Focuses intensely on destroying false structures and fighting for their ideals." },
        { pada: 2, description: "Taurus Navamsha (23°20' - 26°40' Aquarius): Driven by Venus. Channels their intense energy into the occult arts, extreme physical endurance, or profound artistic expression." },
        { pada: 3, description: "Gemini Navamsha (26°40' - 30°00' Aquarius): Driven by Mercury. The intellectual revolutionary. Uses brilliant communication and deep research to shock society into awakening." },
        { pada: 4, description: "Cancer Navamsha (0°00' - 3°20' Pisces): Driven by Moon. The most emotional and deeply spiritual pada. Focuses on extreme empathy and healing through acknowledging universal pain." }
      ],
      compatibility: "Purva Bhadrapada is highly compatible with Uttara Bhadrapada, Dhanishta, and Punarvasu. It often struggles with Bharani and Purva Phalguni.",
      faqs: [
        {
          question: 'Why is a funeral cot its symbol?',
          answer: 'It represents the death of the ego and the end of the material journey. Purva Bhadrapada prepares the soul to leave the physical world and enter the infinite spiritual ocean of Pisces.'
        },
        {
          question: 'What is the power of Purva Bhadrapada?',
          answer: 'Its power is "Yajamana Udyamana Shakti," the power of spiritual elevation through intense fire, penance, and self-sacrifice.'
        }
      ]
    }
  },
  {
    id: 'uttara-bhadrapada',
    name: 'Uttara Bhadrapada',
    meaning: 'The Latter Blessed One / The Second of the Blessed Feet',
    deity: 'Ahir Budhnya (The Serpent of the Deep Sea)',
    rulingPlanet: 'Saturn',
    zodiacSign: 'Pisces (3°20′ – 16°40′)',
    symbol: 'Back Legs of a Funeral Cot / A Serpent',
    content: {
      introduction: "Uttara Bhadrapada resides entirely within the deep, spiritual waters of Pisces. Symbolized by the back legs of a funeral cot, it represents the cooling down of the intense fire experienced in Purva Bhadrapada and the soul's peaceful transition into the cosmic ocean. Ruled by Ahir Budhnya (the serpent of the deep sea) and governed by Saturn, it is a Nakshatra of immense wisdom, profound emotional depth, extreme patience, and Kundalini awakening.",
      personalityTraits: "Uttara Bhadrapada natives are the old souls of the zodiac. They possess incredible patience, profound wisdom, and a deeply calm, serene exterior that hides an ocean of emotional depth. They are highly compassionate, charitable, and willing to sacrifice for others. They are deeply spiritual and have a strong connection to the occult, but unlike Purva Bhadrapada, their energy is cooling, nurturing, and focused on ultimate liberation (Moksha).",
      careerInterests: "They excel in fields requiring deep wisdom, patience, and isolation. Good careers include spiritual teaching, psychology, charity work, writing, research, astrology, and roles in isolated places like ashrams, hospitals, or prisons.",
      shadowSide: "The shadow side of Uttara Bhadrapada is extreme laziness, isolation, and a tendency to completely withdraw from the world. Because they are so focused on the spiritual realm, they may neglect their physical duties or material needs. They can also suffer from deep, unexplainable melancholy or escapism.",
      fourPadas: [
        { pada: 1, description: "Leo Navamsha (3°20' - 6°40' Pisces): Driven by Sun. Highly dignified and proud. Seeks to use their deep spiritual wisdom to lead and illuminate the masses." },
        { pada: 2, description: "Virgo Navamsha (6°40' - 10°00' Pisces): Driven by Mercury. Highly analytical and practical. Focuses on organizing spiritual knowledge and bringing structure to the chaotic ocean of Pisces." },
        { pada: 3, description: "Libra Navamsha (10°00' - 13°20' Pisces): Driven by Venus. Highly artistic and balanced. Seeks to create universal harmony, peace, and beauty through deep compassion." },
        { pada: 4, description: "Scorpio Navamsha (13°20' - 16°40' Pisces): Driven by Mars. The most intense and occult-oriented pada. Deals with extreme Kundalini awakening and navigating the darkest depths of the subconscious." }
      ],
      compatibility: "Uttara Bhadrapada is highly compatible with Purva Bhadrapada, Revati, and Anuradha. It often clashes with Purva Phalguni and Chitra.",
      faqs: [
        {
          question: 'What does the Serpent of the Deep Sea symbolize?',
          answer: 'Ahir Budhnya represents the dormant Kundalini energy residing at the base of the spine, as well as the profound, hidden wisdom that lies at the very bottom of the cosmic ocean, completely detached from the surface waves of the material world.'
        },
        {
          question: 'What is the power of Uttara Bhadrapada?',
          answer: 'Its power is "Varshodyamana Shakti," the power to bring the cooling rain (spiritual grace) that extinguishes the fires of material suffering.'
        }
      ]
    }
  },
  {
    id: 'revati',
    name: 'Revati',
    meaning: 'The Wealthy / The Nourisher',
    deity: 'Pushan (The Nourisher and Guide of Souls)',
    rulingPlanet: 'Mercury',
    zodiacSign: 'Pisces (16°40′ – 30°00′)',
    symbol: 'A Drum / A Fish Swimming in the Sea',
    content: {
      introduction: "Revati is the 27th and absolute final Nakshatra of the zodiac, located at the very end of Pisces (the final Gandanta point). Translating to 'The Wealthy', it represents the ultimate culmination of the soul's journey. Symbolized by a fish swimming in the sea, it signifies total merging with the cosmic ocean. Ruled by Pushan, the gentle deity who nourishes flocks and safely guides souls to the afterlife, Revati is a Nakshatra of supreme empathy, unconditional love, and ultimate liberation (Moksha).",
      personalityTraits: "Revati natives are the most gentle, compassionate, and empathetic individuals in the zodiac. They possess a sweet, refined nature and absolutely cannot stand to see others suffer—including animals. They are highly intuitive, deeply romantic, and incredibly imaginative. They are dreamers who often seem to have one foot in this world and one foot in the spiritual realm. They are incredibly generous and act as safe harbors for lost souls.",
      careerInterests: "They excel in fields involving nurturing, imagination, and animals. Excellent careers include animal welfare, psychology, charity work, the arts, writing, orphanage management, foster care, and spiritual guidance.",
      shadowSide: "The shadow side of Revati is extreme hypersensitivity and a complete lack of boundaries. They are so empathetic that they absorb the pain of everyone around them, leading to severe emotional exhaustion. They are highly prone to escapism, illusion, and being easily taken advantage of by those who prey on their boundless generosity.",
      fourPadas: [
        { pada: 1, description: "Sagittarius Navamsha (16°40' - 20°00' Pisces): Driven by Jupiter. Highly philosophical and optimistic. Focuses on guiding others through higher knowledge and spiritual teachings." },
        { pada: 2, description: "Capricorn Navamsha (20°00' - 23°20' Pisces): Driven by Saturn. Brings structure to the boundless empathy of Revati. Highly practical in their charity and focused on building institutions for the needy." },
        { pada: 3, description: "Aquarius Navamsha (23°20' - 26°40' Pisces): Driven by Saturn. Highly humanitarian and visionary. Focuses on large-scale social change and universal brotherhood." },
        { pada: 4, description: "Pisces Navamsha (26°40' - 30°00' Pisces): Driven by Jupiter. The ultimate Gandanta point. Vargottama placement. The peak of spiritual merging, extreme empathy, and complete dissolution of the ego." }
      ],
      compatibility: "Revati is highly compatible with Uttara Bhadrapada, Bharani, and Pushya. It often faces intense karmic friction with Mula and Vishakha.",
      faqs: [
        {
          question: 'Why is Revati considered the Wealthy Nakshatra?',
          answer: 'While it can bring material wealth, its true wealth is spiritual. Revati possesses the ultimate accumulated wisdom, karma, and spiritual merit of all previous 26 Nakshatras combined.'
        },
        {
          question: 'What is the power of Revati?',
          answer: 'Its power is "Kshiradyapani Shakti," the supreme power to nourish, protect, and provide safe passage for the soul into the next world.'
        }
      ]
    }
  }
];


const fileContentEn = `export interface NakshatraData {
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
    shadowSide: string;
    fourPadas: { pada: number; description: string }[];
    compatibility: string;
    faqs: { question: string; answer: string }[];
  };
}

export const nakshatras19To27: NakshatraData[] = ${JSON.stringify(nakshatras19To27, null, 2)};
`;

fs.writeFileSync('src/data/nakshatras3.ts', fileContentEn);
console.log('Successfully wrote nakshatras3.ts');
