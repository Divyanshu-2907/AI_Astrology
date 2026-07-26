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
    shadowSide: string;
    fourPadas: { pada: number; description: string }[];
    compatibility: string;
    faqs: { question: string; answer: string }[];
  };
}

export const nakshatras10To18: NakshatraData[] = [
  {
    "id": "magha",
    "name": "Magha",
    "meaning": "The Magnificent / The Great One",
    "deity": "Pitris (The Ancestors)",
    "rulingPlanet": "Ketu",
    "zodiacSign": "Leo (0°00′ – 13°20′)",
    "symbol": "Royal Throne / Palanquin",
    "content": {
      "introduction": "Magha marks the beginning of the second cycle of Nakshatras, dropping directly into the royal sign of Leo. Symbolized by a royal throne or palanquin, Magha represents power, authority, lineage, and inherited wealth. Ruled by the Pitris (the divine ancestors), this Nakshatra is deeply connected to tradition, ancestral pride, and the preservation of heritage. It is the star of kings, leaders, and those who demand respect.",
      "personalityTraits": "Individuals born under Magha possess a naturally regal, dignified, and authoritative aura. They have a strong sense of self-worth and expect to be treated with respect. They are deeply loyal to their family lineage and cultural traditions. They are generous, ambitious, and highly protective of those under their care. However, they can sometimes be perceived as arrogant or overly demanding of attention.",
      "careerInterests": "Magha natives thrive in positions of power and authority. They make excellent politicians, CEOs, judges, historians, archaeologists, and leaders in any field. They also excel in professions dealing with inheritance, genetics, and managing ancestral wealth.",
      "shadowSide": "The shadow side of Magha is a crippling fear of losing status or disrespect. Their immense pride can morph into arrogance, elitism, and a sense of entitlement. If they fail to live up to their ancestral expectations, they can suffer from deep-seated feelings of inadequacy and fall into depression.",
      "fourPadas": [
        {
          "pada": 1,
          "description": "Aries Navamsha (0°00' - 3°20' Leo): Driven by Mars. Highly courageous, pioneering, and aggressive in asserting their authority. Natural leaders who lead from the front."
        },
        {
          "pada": 2,
          "description": "Taurus Navamsha (3°20' - 6°40' Leo): Driven by Venus. Focuses on the material wealth, luxury, and comforts associated with royalty and inheritance."
        },
        {
          "pada": 3,
          "description": "Gemini Navamsha (6°40' - 10°00' Leo): Driven by Mercury. The intellectual side of leadership. Excels in speech, diplomacy, and managing the affairs of the kingdom."
        },
        {
          "pada": 4,
          "description": "Cancer Navamsha (10°00' - 13°20' Leo): Driven by Moon. Deeply emotional and attached to family lineage, ancestors, and providing emotional security to their 'subjects'."
        }
      ],
      "compatibility": "Magha is highly compatible with Purva Phalguni, Ashwini, and Mula. They often struggle with Revati and Shatabhisha.",
      "faqs": [
        {
          "question": "Why does Ketu rule a royal Nakshatra?",
          "answer": "Ketu represents the past. In Magha, Ketu connects the individual directly to their past lives and ancestors (Pitris). The royalty and power they experience are often karmic rewards carried over from previous lifetimes."
        },
        {
          "question": "What is the power of Magha?",
          "answer": "Its power is \"Tyage Kshepani Shakti,\" the power to leave the physical body and establish a spiritual connection with the ancestors."
        }
      ]
    }
  },
  {
    "id": "purva-phalguni",
    "name": "Purva Phalguni",
    "meaning": "The Former Red One",
    "deity": "Bhaga (God of Delight and Wealth)",
    "rulingPlanet": "Venus",
    "zodiacSign": "Leo (13°20′ – 26°40′)",
    "symbol": "Front Legs of a Bed / Hammock",
    "content": {
      "introduction": "Purva Phalguni, residing in Leo, is the star of absolute relaxation, joy, and creation. Symbolized by the front legs of a resting bed or a hammock, it represents the reward of rest after the hard work of building a kingdom (Magha). Ruled by Bhaga, the Vedic god of delight, wealth, and marital bliss, it is an incredibly sensual, artistic, and romantic Nakshatra. It governs the joyous, playful, and creative aspects of life.",
      "personalityTraits": "Purva Phalguni natives are incredibly charming, social, and fun-loving. They seek pleasure, romance, and aesthetic beauty in all things. They are naturally artistic, musical, and have an excellent sense of style. They possess a relaxed, easygoing demeanor and attract others effortlessly. However, they can sometimes be quite lazy, preferring comfort over hard work, and can become overly indulgent in sensory pleasures.",
      "careerInterests": "They excel in fields related to entertainment, beauty, and relaxation. Good careers include acting, music, event planning, the wedding industry, fashion, luxury hospitality, and any profession that brings joy and comfort to others.",
      "shadowSide": "The primary shadow side of Purva Phalguni is extreme laziness and procrastination. They can become so addicted to comfort and pleasure that they neglect their responsibilities. Their intense desire for romance and validation can lead to superficiality or vanity.",
      "fourPadas": [
        {
          "pada": 1,
          "description": "Leo Navamsha (13°20' - 16°40' Leo): Driven by Sun. Highly dramatic, confident, and seeks to be the center of attention in social settings. Extremely creative."
        },
        {
          "pada": 2,
          "description": "Virgo Navamsha (16°40' - 20°00' Leo): Driven by Mercury. The most hardworking pada of this Nakshatra. Applies analytical skills to artistic and creative pursuits."
        },
        {
          "pada": 3,
          "description": "Libra Navamsha (20°00' - 23°20' Leo): Driven by Venus. The absolute peak of Venusian energy. Highly romantic, diplomatic, and obsessed with aesthetics and harmony."
        },
        {
          "pada": 4,
          "description": "Scorpio Navamsha (23°20' - 26°40' Leo): Driven by Mars. The most intense and passionate pada. Seeks deep, transformative experiences through romance and art."
        }
      ],
      "compatibility": "Purva Phalguni is highly compatible with Magha, Uttara Phalguni, and Bharani. They often clash with Uttara Bhadrapada and Chitra.",
      "faqs": [
        {
          "question": "Is Purva Phalguni good for marriage?",
          "answer": "Yes, it is one of the most auspicious Nakshatras for romance, dating, and marriage, as it is ruled by Bhaga (the god of marital bliss) and Venus."
        },
        {
          "question": "What is the power of Purva Phalguni?",
          "answer": "Its power is \"Prajanana Shakti,\" the power of procreation, creation, and bringing new life or artistic visions into the world."
        }
      ]
    }
  },
  {
    "id": "uttara-phalguni",
    "name": "Uttara Phalguni",
    "meaning": "The Latter Red One",
    "deity": "Aryaman (God of Patronage and Contracts)",
    "rulingPlanet": "Sun",
    "zodiacSign": "Leo (26°40′) to Virgo (10°00′)",
    "symbol": "Back Legs of a Bed",
    "content": {
      "introduction": "Uttara Phalguni bridges the signs of Leo and Virgo. Symbolized by the back legs of a bed, it represents the continuation and solid foundation of the relaxation that began in Purva Phalguni. However, ruled by Aryaman, the god of patronage, friendship, and contracts, Uttara Phalguni brings a much higher level of responsibility. It is the star of duty, alliances, and supporting others. It marks the transition from seeking personal joy to offering service to society.",
      "personalityTraits": "Individuals born under Uttara Phalguni are warm, generous, and highly dependable. They are the friends you can always count on. They possess strong leadership qualities (from the Sun) combined with a deep desire to be of service (Virgo). They are highly principled, honor their commitments, and are excellent at forming strategic alliances. They are less focused on pure pleasure than Purva Phalguni and more focused on building lasting, supportive structures.",
      "careerInterests": "They excel in roles requiring reliability, management, and service. Excellent fields include social work, human resources, counseling, politics, healing professions, administrative roles, and any career involving contracts and negotiations.",
      "shadowSide": "The shadow side of Uttara Phalguni is a tendency to become overly rigid, critical, and burdened by their responsibilities. Their desire to support everyone can lead to severe burnout. Furthermore, if they feel their loyalty is betrayed, they can become extremely cold and unforgiving.",
      "fourPadas": [
        {
          "pada": 1,
          "description": "Sagittarius Navamsha (26°40' Leo - 0°00' Virgo): Driven by Jupiter. Highly moral, philosophical, and optimistic. Focuses on leading and guiding others through wisdom."
        },
        {
          "pada": 2,
          "description": "Capricorn Navamsha (0°00' - 3°20' Virgo): Driven by Saturn. Extremely organized, disciplined, and hardworking. Focuses on building massive, practical structures of support."
        },
        {
          "pada": 3,
          "description": "Aquarius Navamsha (3°20' - 6°40' Virgo): Driven by Saturn. Highly altruistic and humanitarian. Uses their organizational skills for the betterment of large groups and society."
        },
        {
          "pada": 4,
          "description": "Pisces Navamsha (6°40' - 10°00' Virgo): Driven by Jupiter. The most compassionate and empathetic pada. Focuses heavily on spiritual service and healing others."
        }
      ],
      "compatibility": "Uttara Phalguni is highly compatible with Purva Phalguni, Anuradha, and Jyeshtha. It often faces friction with Vishakha and Ashwini.",
      "faqs": [
        {
          "question": "Why is Aryaman the deity of this Nakshatra?",
          "answer": "Aryaman represents nobility, chivalry, and the sanctity of oaths. Uttara Phalguni is the Nakshatra of keeping promises, supporting friends, and establishing legal and social contracts, especially marriage."
        },
        {
          "question": "What is the power of Uttara Phalguni?",
          "answer": "Its power is \"Chayani Shakti,\" the power of accumulation and prosperity through strategic alliances and fulfilling one's duties."
        }
      ]
    }
  },
  {
    "id": "hasta",
    "name": "Hasta",
    "meaning": "The Hand",
    "deity": "Savitar (The Sun God of Inspiration)",
    "rulingPlanet": "Moon",
    "zodiacSign": "Virgo (10°00′ – 23°20′)",
    "symbol": "A Hand / Fist",
    "content": {
      "introduction": "Hasta resides entirely within the analytical sign of Virgo and is universally recognized as the star of skill, dexterity, and craftsmanship. Symbolized by a human hand, it represents the ability to grasp, hold, and manipulate the physical world. Ruled by Savitar, the creative and inspiring form of the Sun God, and governed by the Moon, Hasta possesses incredible mental agility and the power to manifest thoughts into physical reality through manual skill.",
      "personalityTraits": "Hasta natives are incredibly skilled, detail-oriented, and hardworking. They are 'jacks of all trades' who can quickly learn how to do almost anything with their hands. They are highly intelligent, analytical, and possess a strong business sense. They are punctual, organized, and have a great sense of humor. However, their active minds can make them prone to anxiety, overthinking, and a constant need to control their environment.",
      "careerInterests": "They excel in any profession requiring manual dexterity, precision, or healing hands. This includes surgery, dentistry, massage therapy, acupuncture, mechanics, craftsmanship, astrology, palmistry, accounting, and writing.",
      "shadowSide": "The shadow side of Hasta is an extreme need for control (grasping too tightly) and a tendency towards trickery. Their cleverness can sometimes manifest as manipulation, cunning, or even theft if afflicted. They can also suffer from severe nervous tension and anxiety due to their hyper-analytical Virgo nature.",
      "fourPadas": [
        {
          "pada": 1,
          "description": "Aries Navamsha (10°00' - 13°20' Virgo): Driven by Mars. The most active and aggressive pada. Excellent for mechanics, surgery, and rapid, precise physical action."
        },
        {
          "pada": 2,
          "description": "Taurus Navamsha (13°20' - 16°40' Virgo): Driven by Venus. Highly artistic and grounded. Uses manual dexterity to create beauty, such as sculpting, painting, or jewelry making."
        },
        {
          "pada": 3,
          "description": "Gemini Navamsha (16°40' - 20°00' Virgo): Driven by Mercury. The pinnacle of intellectual and communicative skill. Excellent for writers, speakers, accountants, and traders."
        },
        {
          "pada": 4,
          "description": "Cancer Navamsha (20°00' - 23°20' Virgo): Driven by Moon. Highly empathetic and nurturing. Uses the hands for healing, such as massage therapy, Reiki, or cooking."
        }
      ],
      "compatibility": "Hasta is highly compatible with Mrigashira, Chitra, and Revati. It often struggles with Shatabhisha and Ashwini.",
      "faqs": [
        {
          "question": "What does the Hand symbol represent?",
          "answer": "It represents grasping, holding, and releasing. It signifies skill, craftsmanship, healing, but also the potential for greed or holding onto things (and people) too tightly."
        },
        {
          "question": "What is the power of Hasta?",
          "answer": "Its power is \"Hasta Sthapaniya Agama Shakti,\" the power to place one's objective in one's own hands, literally meaning the power to manifest desires into physical reality."
        }
      ]
    }
  },
  {
    "id": "chitra",
    "name": "Chitra",
    "meaning": "The Brilliant / The Beautiful",
    "deity": "Tvastar (The Celestial Architect)",
    "rulingPlanet": "Mars",
    "zodiacSign": "Virgo (23°20′) to Libra (6°40′)",
    "symbol": "A Bright Jewel or Pearl",
    "content": {
      "introduction": "Chitra bridges the signs of Virgo and Libra and is known as the 'Star of Opportunity' and the 'Star of Brilliance'. Symbolized by a glittering, multifaceted jewel or pearl, it represents aesthetics, structure, and the ultimate refinement of matter into art. Ruled by Tvastar (Vishwakarma), the celestial architect of the gods, Chitra is the Nakshatra of unparalleled creativity, design, and the illusion (Maya) of the material world.",
      "personalityTraits": "Chitra natives are incredibly charismatic, attractive, and have a profound sense of aesthetics. They are the architects, designers, and illusionists of the zodiac. They have a sharp, penetrating intellect (Mars) combined with a love for beauty and balance (Libra). They are perfectionists who are always seeking to improve and beautify their surroundings. They are deeply creative, fiercely independent, and have a magnetic presence.",
      "careerInterests": "They excel in fields involving design, structure, and aesthetics. Excellent careers include architecture, interior design, fashion, jewelry making, graphic design, surgery, photography, and the film/illusion industry.",
      "shadowSide": "The shadow side of Chitra is a superficial obsession with external beauty and a tendency to get lost in 'Maya' (illusion). They can be highly critical, narcissistic, and argumentative (due to Mars) when things are not 'perfect'. They may struggle with deep emotional intimacy because they are too focused on the polished, perfect surface.",
      "fourPadas": [
        {
          "pada": 1,
          "description": "Leo Navamsha (23°20' - 26°40' Virgo): Driven by Sun. Highly dramatic, authoritative, and focused on personal brilliance and self-expression. Excellent leaders."
        },
        {
          "pada": 2,
          "description": "Virgo Navamsha (26°40' - 30°00' Virgo): Driven by Mercury. The most analytical and perfectionist pada. Vargottama placement, making them unparalleled in technical design."
        },
        {
          "pada": 3,
          "description": "Libra Navamsha (0°00' - 3°20' Libra): Driven by Venus. Vargottama placement. The most artistic, social, and relationship-oriented pada. Highly focused on aesthetics."
        },
        {
          "pada": 4,
          "description": "Scorpio Navamsha (3°20' - 6°40' Libra): Driven by Mars. The most intense and mystical pada. Seeks to design and structure the hidden, occult, or psychological realms."
        }
      ],
      "compatibility": "Chitra is highly compatible with Vishakha, Hasta, and Swati. It often experiences intense friction with Mrigashira and Purva Bhadrapada.",
      "faqs": [
        {
          "question": "Why is Chitra associated with Maya (Illusion)?",
          "answer": "Chitra represents the beautiful, glittering jewel. While beautiful, a jewel only reflects light; it does not create it. Chitra natives must learn to see beyond the beautiful illusions of the material world to find spiritual truth."
        },
        {
          "question": "What is the power of Chitra?",
          "answer": "Its power is \"Punya Chayani Shakti,\" the power to accumulate merit in this life and properly structure and manifest one's karma into beautiful forms."
        }
      ]
    }
  },
  {
    "id": "swati",
    "name": "Swati",
    "meaning": "The Independent One / The Sword",
    "deity": "Vayu (The God of Wind)",
    "rulingPlanet": "Rahu",
    "zodiacSign": "Libra (6°40′ – 20°00′)",
    "symbol": "A Young Plant / A Sword",
    "content": {
      "introduction": "Swati resides entirely in the sign of Libra and translates to 'The Independent One' or 'The Sword'. Symbolized by a young shoot blowing in the wind, it represents extreme adaptability, freedom, and surviving against the odds. Ruled by Vayu, the God of Wind, and governed by the expansive node Rahu, Swati is a highly diplomatic, restless, and ambitious Nakshatra that seeks to balance freedom with partnership.",
      "personalityTraits": "Swati natives are fiercely independent, adaptable, and restless. Like the wind, they hate feeling caged or restricted. They are master diplomats, highly charming, and possess a sweet, communicative nature that allows them to navigate complex social situations with ease. They are late bloomers who start small (like a young shoot) but can achieve massive success later in life through sheer adaptability and persistence.",
      "careerInterests": "They excel in fields involving communication, travel, and diplomacy. Good careers include aviation, travel industry, public relations, politics, sales, independent entrepreneurship, and any profession requiring negotiation.",
      "shadowSide": "The shadow side of Swati is extreme indecisiveness and a tendency to manipulate others to maintain their own freedom. Their desire to please everyone can make them seem superficial or two-faced. Because they are ruled by Rahu, they can also suffer from deep, unquenchable material desires and extreme restlessness.",
      "fourPadas": [
        {
          "pada": 1,
          "description": "Sagittarius Navamsha (6°40' - 10°00' Libra): Driven by Jupiter. Highly philosophical, optimistic, and seeks freedom through knowledge and long-distance travel."
        },
        {
          "pada": 2,
          "description": "Capricorn Navamsha (10°00' - 13°20' Libra): Driven by Saturn. Highly ambitious and practical. Uses their diplomatic skills to climb the corporate or social ladder."
        },
        {
          "pada": 3,
          "description": "Aquarius Navamsha (13°20' - 16°40' Libra): Driven by Saturn. Extremely independent, humanitarian, and unconventional. Vargottama in essence (air in air), creating a brilliant, innovative mind."
        },
        {
          "pada": 4,
          "description": "Pisces Navamsha (16°40' - 20°00' Libra): Driven by Jupiter. The most spiritual and empathetic pada. Highly adaptable, but can be overly yielding and prone to escapism."
        }
      ],
      "compatibility": "Swati is highly compatible with Ardra, Shatabhisha, and Ashwini. It often faces intense karmic friction with Rohini and Bharani.",
      "faqs": [
        {
          "question": "What does the young shoot blowing in the wind symbolize?",
          "answer": "It symbolizes resilience and adaptability. A young shoot bends when the harsh wind blows, rather than breaking like a stiff tree. Swati natives survive and thrive by adapting to their circumstances without breaking."
        },
        {
          "question": "What is the power of Swati?",
          "answer": "Its power is \"Pradhvamsa Shakti,\" the power to scatter like the wind. This means the ability to spread ideas, influence, and oneself far and wide."
        }
      ]
    }
  },
  {
    "id": "vishakha",
    "name": "Vishakha",
    "meaning": "The Forked / Two-Branched",
    "deity": "Indra (God of the Gods) and Agni (God of Fire)",
    "rulingPlanet": "Jupiter",
    "zodiacSign": "Libra (20°00′) to Scorpio (3°20′)",
    "symbol": "Triumphal Arch / Potter's Wheel",
    "content": {
      "introduction": "Vishakha bridges the airy sign of Libra and the watery, intense sign of Scorpio. Known as the 'Star of Purpose', it is symbolized by a triumphal arch (victory) and a potter's wheel (patient creation). Uniquely ruled by two deities—Indra (ambition/power) and Agni (fire/purification)—Vishakha represents a burning, relentless drive to achieve one's goals and conquer obstacles. It is a highly ambitious, focused, and sometimes ruthless Nakshatra.",
      "personalityTraits": "Individuals born under Vishakha are fiercely ambitious, goal-oriented, and extremely determined. They possess immense patience (like the potter spinning the wheel) but also a fiery, explosive energy (Agni) when they take action. They are highly intelligent, deeply philosophical (ruled by Jupiter), and make formidable opponents. They are obsessed with achieving their ultimate goals and will endure massive hardships to cross the 'triumphal arch'.",
      "careerInterests": "They excel in fields requiring strategy, leadership, and relentless focus. Excellent careers include politics, military leadership, scientific research, law, debate, entrepreneurship, and high-level management.",
      "shadowSide": "The shadow side of Vishakha is extreme obsession, jealousy, and a 'means justify the ends' mentality. Their ambition can become so blinding that they destroy relationships in pursuit of their goals. They often suffer from an intense inner void—once they achieve their goal, they immediately feel empty and must find a new target.",
      "fourPadas": [
        {
          "pada": 1,
          "description": "Aries Navamsha (20°00' - 23°20' Libra): Driven by Mars. Highly aggressive, pioneering, and competitive. Will fiercely fight for their goals and beliefs."
        },
        {
          "pada": 2,
          "description": "Taurus Navamsha (23°20' - 26°40' Libra): Driven by Venus. Focuses their intense ambition on acquiring material wealth, luxury, and artistic perfection."
        },
        {
          "pada": 3,
          "description": "Gemini Navamsha (26°40' - 30°00' Libra): Driven by Mercury. The intellectual warrior. Excellent at debate, communication, and outsmarting their opponents."
        },
        {
          "pada": 4,
          "description": "Cancer Navamsha (0°00' - 3°20' Scorpio): Driven by Moon. The most intense and emotionally turbulent pada. Ambition is driven by deep psychological needs and occult interests."
        }
      ],
      "compatibility": "Vishakha is highly compatible with Chitra, Jyeshtha, and Shatabhisha. It often struggles with Krittika and Ashwini.",
      "faqs": [
        {
          "question": "Why is it ruled by two deities?",
          "answer": "Indra represents the desire for ultimate power, victory, and kingship, while Agni represents the intense fire, purification, and energy required to achieve it. Together, they create an unstoppable force."
        },
        {
          "question": "What is the power of Vishakha?",
          "answer": "Its power is \"Vyapana Shakti,\" the power to achieve and conquer various goals, plucking the fruits of one's hard labor."
        }
      ]
    }
  },
  {
    "id": "anuradha",
    "name": "Anuradha",
    "meaning": "Following Radha / The Spark",
    "deity": "Mitra (God of Friendship and Alliances)",
    "rulingPlanet": "Saturn",
    "zodiacSign": "Scorpio (3°20′ – 16°40′)",
    "symbol": "Lotus Flower / Triumphal Archway",
    "content": {
      "introduction": "Anuradha resides entirely within the intense, watery sign of Scorpio. Following the fierce ambition of Vishakha, Anuradha translates to 'Following Radha' (the ultimate devotee), representing the shift from purely material ambition to spiritual devotion and universal love. Symbolized by a lotus flower, which grows in muddy waters but remains pure, it is the star of success through emotional resilience, deep friendships, and spiritual awakening.",
      "personalityTraits": "Anuradha natives are deeply emotional, intensely devoted, and highly resilient. They possess a natural ability to form deep, meaningful friendships and alliances across all social boundaries. They are highly intuitive, deeply spiritual, and often have a strong interest in the occult or hidden mysteries (Scorpio influence). They are incredibly hardworking (Saturn influence) and possess the unique ability to maintain their purity and optimism even in the darkest or most difficult environments.",
      "careerInterests": "They excel in professions requiring diplomacy, deep investigation, and healing. Good careers include psychology, astrology, diplomacy, human resources, scientific research, mining, and spiritual counseling.",
      "shadowSide": "The shadow side of Anuradha is a tendency to be overly controlling, secretive, and emotionally dependent. Their deep need for connection can make them clingy or prone to intense jealousy. Because they are ruled by Saturn in the sign of Scorpio, they often face severe emotional hardships or delays early in life, leading to periods of melancholy.",
      "fourPadas": [
        {
          "pada": 1,
          "description": "Leo Navamsha (3°20' - 6°40' Scorpio): Driven by Sun. Highly dignified, proud, and seeks leadership roles within their spiritual or social communities."
        },
        {
          "pada": 2,
          "description": "Virgo Navamsha (6°40' - 10°00' Scorpio): Driven by Mercury. Highly analytical and practical. Excels at organizing people and deep, structured research."
        },
        {
          "pada": 3,
          "description": "Libra Navamsha (10°00' - 13°20' Scorpio): Driven by Venus. The most artistic and sociable pada. Excels in diplomacy, forming alliances, and creating harmony in dark situations."
        },
        {
          "pada": 4,
          "description": "Scorpio Navamsha (13°20' - 16°40' Scorpio): Driven by Mars. Vargottama placement. Extremely intense, deeply occult-oriented, and undergoes massive emotional transformations."
        }
      ],
      "compatibility": "Anuradha is highly compatible with Jyeshtha, Vishakha, and Rohini. It often clashes with Bharani and Purva Bhadrapada.",
      "faqs": [
        {
          "question": "What does the Lotus symbol mean for Anuradha?",
          "answer": "The lotus grows in muddy, stagnant water but blossoms beautifully above it, untouched by the dirt. This symbolizes the Anuradha native's ability to survive intense hardships (Scorpio mud) and bloom into spiritual purity and success."
        },
        {
          "question": "What is the power of Anuradha?",
          "answer": "Its power is \"Radhana Shakti,\" the power of worship, devotion, and the ability to achieve one's goals through universal friendship and love."
        }
      ]
    }
  },
  {
    "id": "jyeshtha",
    "name": "Jyeshtha",
    "meaning": "The Eldest / The Senior Most",
    "deity": "Indra (King of the Gods)",
    "rulingPlanet": "Mercury",
    "zodiacSign": "Scorpio (16°40′ – 30°00′)",
    "symbol": "Circular Amulet / Umbrella / Earring",
    "content": {
      "introduction": "Jyeshtha is the final Nakshatra of the second cosmic cycle, residing at the very end of the intense sign of Scorpio (the Gandanta point). Translating to 'The Eldest' or 'The Senior Most', it represents the peak of material and occult power before the soul transitions into the spiritual realm of Sagittarius. Symbolized by a circular amulet or an umbrella (symbols of protection and authority), Jyeshtha is ruled by Indra, the king of the gods. It is a star of immense authority, profound occult knowledge, and intense psychological battles.",
      "personalityTraits": "Jyeshtha natives are natural leaders, highly intelligent, and fiercely independent. They demand respect and often assume the role of the 'eldest' or the protector in their families and communities, regardless of their actual age. They are incredibly sharp, perceptive, and possess a deeply probing mind. They are fearless defenders of the weak but can also be ruthless in destroying their enemies.",
      "careerInterests": "They excel in high-level leadership, investigative, and protective roles. Excellent careers include military leadership, politics, police/detective work, occult sciences, psychology, surgery, and executive management.",
      "shadowSide": "The shadow side of Jyeshtha is intense arrogance, a massive ego, and a tendency to become dictatorial. Because they feel they know best, they can be highly controlling and refuse to take advice. They often suffer from deep insecurities and paranoia, feeling that others are trying to usurp their 'throne'.",
      "fourPadas": [
        {
          "pada": 1,
          "description": "Sagittarius Navamsha (16°40' - 20°00' Scorpio): Driven by Jupiter. Highly philosophical and moral. Uses their authority and sharp intellect to fight for justice and higher truths."
        },
        {
          "pada": 2,
          "description": "Capricorn Navamsha (20°00' - 23°20' Scorpio): Driven by Saturn. Highly disciplined, ambitious, and practical. Excellent at building and maintaining structures of power."
        },
        {
          "pada": 3,
          "description": "Aquarius Navamsha (23°20' - 26°40' Scorpio): Driven by Saturn. Unconventional, scientific, and humanitarian. Uses their authority to protect the masses and innovate."
        },
        {
          "pada": 4,
          "description": "Pisces Navamsha (26°40' - 30°00' Scorpio): Driven by Jupiter. The Gandanta point. Extremely emotional, mystical, and prone to profound spiritual crises and awakenings."
        }
      ],
      "compatibility": "Jyeshtha is highly compatible with Anuradha, Vishakha, and Magha. It often faces intense, explosive friction with Ashwini and Mula.",
      "faqs": [
        {
          "question": "Why is Jyeshtha a difficult Nakshatra?",
          "answer": "It sits at the Gandanta point—the turbulent junction between water (Scorpio) and fire (Sagittarius). It represents the painful psychological tearing of the ego as the soul prepares to give up material power for spiritual truth."
        },
        {
          "question": "What is the power of Jyeshtha?",
          "answer": "Its power is \"Arohana Shakti,\" the power to rise above, conquer, and gain supremacy over obstacles and enemies."
        }
      ]
    }
  }
];
