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

export const nakshatras1To9: NakshatraData[] = [
  {
    "id": "ashwini",
    "name": "Ashwini",
    "meaning": "The Horsewoman",
    "deity": "Ashwini Kumaras (Physicians of the Gods)",
    "rulingPlanet": "Ketu",
    "zodiacSign": "Aries (0°00′ – 13°20′)",
    "symbol": "Horse's Head",
    "content": {
      "introduction": "Ashwini is the very first Nakshatra of the zodiac, marking the true beginning of the astrological cycle. Residing entirely within the fiery sign of Aries, it is symbolized by a horse's head, representing incredible speed, untamed power, and the dawn of new beginnings. Governed by the Ashwini Kumaras—the celestial twin physicians who possess the power to cure any illness and bring the dead back to life—this Nakshatra carries powerful healing energy, miraculous vitality, and the urge to initiate action rapidly. It is the spark of life that bursts forth from nothingness.",
      "personalityTraits": "Individuals born under Ashwini are pioneers, trailblazers, and initiators. They are exceptionally swift in their actions, quick thinkers, and highly energetic. They approach life with an innocent, almost childlike enthusiasm and absolutely love starting new projects or going on adventures. They are courageous, fiercely independent, and possess a strong desire for freedom. Their dynamic, youthful energy makes them natural leaders who can inspire others simply by their presence.",
      "careerInterests": "Ashwini natives excel in professions requiring speed, courage, and healing. They make excellent surgeons, doctors, paramedics, alternative healers, athletes, military personnel, aviators, and entrepreneurs. They thrive in dynamic, fast-paced environments where quick decision-making is a matter of life and death.",
      "shadowSide": "The shadow side of Ashwini is a severe lack of patience and a tendency to leave things unfinished. Because they are so focused on the thrill of the start, they often lose interest when projects require long-term endurance. They can also be overly impulsive, stubborn, and aggressive, jumping into situations without forethought.",
      "fourPadas": [
        {
          "pada": 1,
          "description": "Aries Navamsha (0°00' - 3°20' Aries): Driven by Mars. Highly energetic, athletic, and pioneering, but prone to excessive aggression and impulsiveness."
        },
        {
          "pada": 2,
          "description": "Taurus Navamsha (3°20' - 6°40' Aries): Driven by Venus. Brings stability, material desires, and a focus on physical beauty and grace. Less impulsive."
        },
        {
          "pada": 3,
          "description": "Gemini Navamsha (6°40' - 10°00' Aries): Driven by Mercury. Highly communicative, intellectual, and humorous. Excellent for rapid decision-making and writing."
        },
        {
          "pada": 4,
          "description": "Cancer Navamsha (10°00' - 13°20' Aries): Driven by Moon. Deeply empathetic and healing. This pada focuses heavily on the medical and nurturing side of the Ashwini Kumaras."
        }
      ],
      "compatibility": "Ashwini is most compatible with Shatabhisha, Pushya, and Swati. They often clash with Jyeshtha and Anuradha due to opposing energetic frequencies.",
      "faqs": [
        {
          "question": "What is the special power of Ashwini Nakshatra?",
          "answer": "Its special power is \"Shidhra Vyapani Shakti,\" which translates to the power to quickly reach things or achieve goals. It is the ultimate energy of rapid healing and swift action."
        },
        {
          "question": "Why is Ketu the ruling planet of Ashwini?",
          "answer": "Ketu represents past life karma, liberation, and deep instincts. In Ashwini, Ketu's energy manifests as innate, instinctual knowledge from past lives, creating a sudden urge to burst forth and initiate new karmic cycles."
        }
      ]
    }
  },
  {
    "id": "bharani",
    "name": "Bharani",
    "meaning": "The Bearer",
    "deity": "Yama (God of Death and Justice)",
    "rulingPlanet": "Venus",
    "zodiacSign": "Aries (13°20′ – 26°40′)",
    "symbol": "Yoni (Female Reproductive Organ)",
    "content": {
      "introduction": "Bharani is the second Nakshatra, located entirely in the fiery sign of Aries. Its symbol is the Yoni, representing the female reproductive organ, which signifies creation, birth, and the bearing of life. Paradoxically, its ruling deity is Yama, the God of Death and Justice. This duality makes Bharani a star of massive, sweeping transformation. It represents the ultimate cycle of life: birth, death, and rebirth. It is an incredibly passionate, creative, and intense lunar mansion that deals with the extremes of existence.",
      "personalityTraits": "Bharani natives are intense, highly passionate, and possess unbreakable willpower. They are creative forces of nature who are never afraid of massive undertakings, struggles, or controversy. They are deeply committed to their beliefs and can be quite extreme in their views—seeing the world in black and white. They possess a magnetic, attractive personality, a strong sense of social justice, and a natural ability to endure profound hardships and emerge stronger.",
      "careerInterests": "They excel in fields involving life, death, creation, and justice. This includes gynecology, obstetrics, psychology, law, the arts, creative industries, and professions dealing with transformation, such as crisis management, mortuary sciences, or high-level administration.",
      "shadowSide": "The shadow side of Bharani is a tendency towards extremes. They can be incredibly stubborn, unforgiving, and prone to sudden outbursts of anger. Their strong Venusian desires can sometimes lead to overindulgence in sensual pleasures, while their connection to Yama can make them overly judgmental or deeply melancholic.",
      "fourPadas": [
        {
          "pada": 1,
          "description": "Leo Navamsha (13°20' - 16°40' Aries): Driven by Sun. Highly creative, dramatic, and self-centered. Focuses on personal willpower and leadership."
        },
        {
          "pada": 2,
          "description": "Virgo Navamsha (16°40' - 20°00' Aries): Driven by Mercury. Analytical, practical, and highly organized. Brings a sense of structure to the chaotic Bharani energy."
        },
        {
          "pada": 3,
          "description": "Libra Navamsha (20°00' - 23°20' Aries): Driven by Venus. The most harmonious and artistic pada. Focuses on relationships, justice, and balancing extremes."
        },
        {
          "pada": 4,
          "description": "Scorpio Navamsha (23°20' - 26°40' Aries): Driven by Mars. The most intense and transformative pada. Deals heavily with occult, deep psychology, and dramatic rebirth."
        }
      ],
      "compatibility": "Bharani is highly compatible with Revati, Purva Phalguni, and Chitra. It often struggles with Anuradha and Purva Bhadrapada.",
      "faqs": [
        {
          "question": "Why is Bharani associated with both birth and death?",
          "answer": "It represents the extreme boundaries of physical existence. Birth (creation) requires massive struggle, pain, and transformation, just as death does. Bharani is the energy of enduring those profound transitions."
        },
        {
          "question": "What is the special power of Bharani?",
          "answer": "Its power is \"Apabharani Shakti,\" the power to take things away or to cleanse and remove impurities, acting as a cosmic reset button to make way for new creation."
        }
      ]
    }
  },
  {
    "id": "krittika",
    "name": "Krittika",
    "meaning": "The Cutter",
    "deity": "Agni (God of Fire)",
    "rulingPlanet": "Sun",
    "zodiacSign": "Aries (26°40′) to Taurus (10°00′)",
    "symbol": "Razor or Knife",
    "content": {
      "introduction": "Krittika is the third Nakshatra, bridging the dynamic sign of Aries and the stable sign of Taurus. Known as the 'Star of Fire', it is symbolized by a razor or knife, representing the cutting away of impurities and the burning of negativity. Ruled by Agni, the Vedic God of Fire, Krittika is highly purifying, penetrating, and illuminating. It is the energy of the sacred flame that destroys ignorance, falsehoods, and darkness to reveal the absolute truth.",
      "personalityTraits": "People born under Krittika are sharp, direct, and possess a highly penetrating intellect. They are highly ambitious, self-motivated, and have a strong sense of pride and dignity. Like fire, they can be incredibly warm, nurturing, and protective of their loved ones, but also highly destructive if provoked. They value truth above all else and have a sharp tongue that can easily cut through lies. They are excellent critics, analysts, and protectors.",
      "careerInterests": "They thrive in roles that require precision, analysis, authority, and transformation. Excellent fields include surgery, the military, engineering, law enforcement, critical analysis, auditing, and professions involving fire, cooking (chefs), or metallurgy.",
      "shadowSide": "The shadow side of Krittika is a harsh, critical, and cutting nature. They can be overly blunt, hurting others' feelings with their direct words. Their fiery temper can cause sudden destruction in relationships, and their high expectations can lead to perfectionism and intolerance of weakness.",
      "fourPadas": [
        {
          "pada": 1,
          "description": "Sagittarius Navamsha (26°40' Aries - 0°00' Taurus): Driven by Jupiter. Highly philosophical, moral, and exploratory. Known as the 'military commander' of the zodiac."
        },
        {
          "pada": 2,
          "description": "Capricorn Navamsha (0°00' - 3°20' Taurus): Driven by Saturn. Highly practical, disciplined, and material-focused. Excellent for building lasting structures and wealth."
        },
        {
          "pada": 3,
          "description": "Aquarius Navamsha (3°20' - 6°40' Taurus): Driven by Saturn. Humanitarian, unconventional, and visionary. Uses the cutting edge of Krittika to bring societal change."
        },
        {
          "pada": 4,
          "description": "Pisces Navamsha (6°40' - 10°00' Taurus): Driven by Jupiter. The most nurturing and spiritual pada. Uses fire to heal and guide others, rather than to destroy."
        }
      ],
      "compatibility": "Krittika is highly compatible with Jyeshtha, Pushya, and Shatabhisha. It often faces intense friction with Vishakha and Swati.",
      "faqs": [
        {
          "question": "Is Krittika a malefic Nakshatra?",
          "answer": "It is considered a \"mixed\" or fierce Nakshatra. While its cutting and fiery nature can be harsh in a social context, its ultimate goal is purification and removing what is false to protect what is true."
        },
        {
          "question": "What is the power of Krittika?",
          "answer": "Its power is \"Dahana Shakti,\" the cosmic power to burn away negativity, severe attachments, and purify the soul through the fire of truth."
        }
      ]
    }
  },
  {
    "id": "rohini",
    "name": "Rohini",
    "meaning": "The Red One / The Growing One",
    "deity": "Brahma (The Creator)",
    "rulingPlanet": "Moon",
    "zodiacSign": "Taurus (10°00′ – 23°20′)",
    "symbol": "Ox Cart / Chariot",
    "content": {
      "introduction": "Rohini is the fourth Nakshatra, located entirely within the stable, earthly sign of Taurus. It is universally considered the Moon's absolute favorite Nakshatra. It is the star of immense growth, fertility, and agriculture. Symbolized by an ox cart carrying a bountiful harvest, Rohini is deeply connected to nature, material abundance, and the creation of physical beauty. It is an incredibly sensual, fertile, and productive lunar mansion that desires comfort and stability.",
      "personalityTraits": "Rohini natives are generally very attractive, charming, and possess a calm, stable, and deeply soothing demeanor. They absolutely love luxury, comfort, fine food, and the finer things in life. They are highly creative, deeply emotional, and fiercely loyal to their families. Because they are grounded in Taurus, they have a natural 'green thumb'—not just in agriculture, but in growing wealth and businesses. They are the ultimate manifestors.",
      "careerInterests": "They excel in fields related to beauty, nature, wealth, and hospitality. This includes agriculture, real estate, fashion, arts, banking, interior design, the hospitality industry, and anything related to nurturing and growing physical assets.",
      "shadowSide": "The shadow side of Rohini stems from their deep attachment to the material world. Their love for comforts can quickly turn into immense stubbornness, possessiveness, jealousy, or shallow materialism. They may struggle to adapt to change or spiritual concepts because they are so anchored to physical pleasures.",
      "fourPadas": [
        {
          "pada": 1,
          "description": "Aries Navamsha (10°00' - 13°20' Taurus): Driven by Mars. The most active and passionate pada of Rohini. Focuses on rapid growth and acquiring material possessions quickly."
        },
        {
          "pada": 2,
          "description": "Taurus Navamsha (13°20' - 16°40' Taurus): Driven by Venus. Vargottama (same sign in D1 and D9). Represents the peak of material abundance, beauty, and sensual fulfillment."
        },
        {
          "pada": 3,
          "description": "Gemini Navamsha (16°40' - 20°00' Taurus): Driven by Mercury. Focuses on commerce, communication, and intellectualizing the arts. Highly sociable and business-oriented."
        },
        {
          "pada": 4,
          "description": "Cancer Navamsha (20°00' - 23°20' Taurus): Driven by Moon. The most emotional and nurturing pada. Deeply attached to family, home, and psychological security."
        }
      ],
      "compatibility": "Rohini is highly compatible with Mrigashira, Anuradha, and Ashwini. It often struggles with Swati and Mula.",
      "faqs": [
        {
          "question": "Why is Rohini considered the Moon's favorite?",
          "answer": "In Vedic mythology, the Moon (Chandra) was married to the 27 Nakshatras (daughters of Daksha) but loved Rohini the most due to her unparalleled beauty, charm, and fertile nature. Astrologically, the Moon is exalted (reaches peak power) in Taurus within this Nakshatra."
        },
        {
          "question": "What is the power of Rohini?",
          "answer": "Its power is \"Rohana Shakti,\" the ultimate power to make things grow, flourish, and prosper in the physical world."
        }
      ]
    }
  },
  {
    "id": "mrigashira",
    "name": "Mrigashira",
    "meaning": "The Deer's Head",
    "deity": "Soma (The Moon God)",
    "rulingPlanet": "Mars",
    "zodiacSign": "Taurus (23°20′) to Gemini (6°40′)",
    "symbol": "Deer's Head",
    "content": {
      "introduction": "Mrigashira is the fifth Nakshatra, bridging the grounded sign of Taurus and the airy sign of Gemini. Known as the 'Searching Star', it is symbolized by a deer roaming freely through the forest, representing the soul's restless search for truth, meaning, and new experiences. Ruled by Soma (the Moon God) but governed by the energetic planet Mars, it is a highly curious, gentle, and exploratory Nakshatra, driven by an endless desire to discover what lies beyond the horizon.",
      "personalityTraits": "Individuals born under Mrigashira are highly intellectual, deeply curious, and constantly seeking knowledge. They are gentle, sensitive, and have a profound love for travel, poetry, and debate. They possess a charming and captivating persona. However, their restless nature can make them anxious, fickle, and prone to changing their minds frequently. They are excellent researchers and communicators but may struggle to find ultimate satisfaction in one place or one partner.",
      "careerInterests": "They thrive in investigative, communicative, and creative roles. Excellent careers include research, journalism, writing, the travel industry, astrology, teaching, engineering, and any field requiring continuous exploration and mental stimulation.",
      "shadowSide": "The shadow side of Mrigashira is a chronic lack of satisfaction and deep-seated anxiety. Like a deer constantly darting around looking for predators, they can be highly suspicious, nervous, and unable to commit. Their constant searching can lead to exhaustion and a feeling of never truly 'arriving'.",
      "fourPadas": [
        {
          "pada": 1,
          "description": "Leo Navamsha (23°20' - 26°40' Taurus): Driven by Sun. Highly creative and confident. Focuses on searching for self-expression and creative leadership."
        },
        {
          "pada": 2,
          "description": "Virgo Navamsha (26°40' - 30°00' Taurus): Driven by Mercury. The most analytical and communicative pada. Excellent for deep research, editing, and intellectual pursuits."
        },
        {
          "pada": 3,
          "description": "Libra Navamsha (0°00' - 3°20' Gemini): Driven by Venus. Focuses heavily on relationships. The search is directed towards finding the perfect partner or perfect aesthetic."
        },
        {
          "pada": 4,
          "description": "Scorpio Navamsha (3°20' - 6°40' Gemini): Driven by Mars. The most intense pada. The search turns inward to the occult, hidden mysteries, and psychological depths."
        }
      ],
      "compatibility": "Mrigashira is highly compatible with Rohini, Punarvasu, and Hasta. It often clashes with Ashlesha and Jyeshtha.",
      "faqs": [
        {
          "question": "Why is it called the Searching Star?",
          "answer": "Just as a deer constantly moves through the forest looking for food and sensing danger, Mrigashira natives are always mentally and physically searching for new experiences, knowledge, and ultimate fulfillment."
        },
        {
          "question": "What is the power of Mrigashira?",
          "answer": "Its power is \"Prinana Shakti,\" the power to give fulfillment and joy through exploration, guiding the soul towards its ultimate spiritual destination."
        }
      ]
    }
  },
  {
    "id": "ardra",
    "name": "Ardra",
    "meaning": "The Moist One / The Tear Drop",
    "deity": "Rudra (The Fierce Form of Shiva)",
    "rulingPlanet": "Rahu",
    "zodiacSign": "Gemini (6°40′ – 20°00′)",
    "symbol": "Teardrop / Human Head",
    "content": {
      "introduction": "Ardra resides entirely in the intellectual sign of Gemini and is widely considered one of the most intense and volatile Nakshatras. Symbolized by a teardrop, it represents sorrow, suffering, and the subsequent purification that follows a massive storm. Ruled by Rudra, the fierce, howling god of storms and destruction, Ardra signifies the necessary destruction of the old to make way for the new. It is the star of deep psychological transformation, intellectual brilliance, and profound emotional catharsis.",
      "personalityTraits": "Ardra natives possess highly active, analytical, and sometimes chaotic minds. They are incredibly intelligent, perceptive, and capable of deep, obsessive research. They often experience significant upheavals, emotional storms, or sudden losses in life, which serve to awaken them spiritually. They can be highly critical, sharp-tongued, and rebellious against authority. However, once they have undergone their own healing, they are deeply compassionate and powerful guides for others.",
      "careerInterests": "They excel in analytical, technological, and healing professions. Because they understand pain and complex systems, they make excellent IT professionals, software developers, psychologists, psychiatrists, deep researchers, astrologers, and crisis managers.",
      "shadowSide": "The shadow side of Ardra is immense anger, cynicism, and a tendency to create storms where none need to exist. They can be incredibly self-destructive, holding onto grudges and drowning in sorrow. Their sharp intellect can be used maliciously to hurt others with cutting words when they feel emotionally overwhelmed.",
      "fourPadas": [
        {
          "pada": 1,
          "description": "Sagittarius Navamsha (6°40' - 10°00' Gemini): Driven by Jupiter. The most philosophical pada. Seeks the deeper meaning behind the storms of life and uses intellect for higher learning."
        },
        {
          "pada": 2,
          "description": "Capricorn Navamsha (10°00' - 13°20' Gemini): Driven by Saturn. Highly practical and disciplined. Uses the intense Ardra energy to build solid, material foundations after a crisis."
        },
        {
          "pada": 3,
          "description": "Aquarius Navamsha (13°20' - 16°40' Gemini): Driven by Saturn. Highly scientific, unconventional, and visionary. Excellent for technological innovation and breaking societal norms."
        },
        {
          "pada": 4,
          "description": "Pisces Navamsha (16°40' - 20°00' Gemini): Driven by Jupiter. The most emotional and compassionate pada. Focuses on resolving sorrow through deep spirituality and healing."
        }
      ],
      "compatibility": "Ardra is highly compatible with Ashwini, Swati, and Shatabhisha. It often faces intense karmic friction with Purva Phalguni and Magha.",
      "faqs": [
        {
          "question": "Is Ardra an unlucky Nakshatra?",
          "answer": "No, but it is undoubtedly intense. It brings necessary storms and tears to wash away illusions. The suffering it brings is usually a cosmic catalyst for profound spiritual awakening and intellectual breakthroughs."
        },
        {
          "question": "What is the power of Ardra?",
          "answer": "Its power is \"Yatna Shakti,\" the power to make a supreme effort and achieve goals through sheer struggle, determination, and surviving the storm."
        }
      ]
    }
  },
  {
    "id": "punarvasu",
    "name": "Punarvasu",
    "meaning": "Return of the Light",
    "deity": "Aditi (Mother of the Gods)",
    "rulingPlanet": "Jupiter",
    "zodiacSign": "Gemini (20°00′) to Cancer (3°20′)",
    "symbol": "Quiver of Arrows",
    "content": {
      "introduction": "Punarvasu literally translates to the 'Return of the Light' or 'Good Again'. Following the destructive storm and tears of Ardra, Punarvasu represents renewal, restoration, and the dawn after the dark night. Symbolized by a quiver of arrows, it signifies the safe return of energy, hope, and resources. Ruled by Aditi, the boundless and infinitely nurturing mother goddess, it is a highly optimistic, pure, and spiritually elevated Nakshatra.",
      "personalityTraits": "Punarvasu natives are known for their unwavering optimism, benevolence, and profound philosophical outlook. They have a strong sense of morality and are deeply nurturing to everyone around them. They possess an incredible ability to bounce back from failures—truly embodying the 'return of the light'. They are simple, content, and often possess strong spiritual or religious beliefs. They love the comfort of home and family but also have a deep love for travel and expanding their horizons.",
      "careerInterests": "They excel in teaching, philosophy, religious roles, writing, acting, the travel industry, architecture, and any profession related to building, restoring, or nurturing society. They are excellent counselors.",
      "shadowSide": "The shadow side of Punarvasu is a tendency to be overly idealistic or naive, which can lead to them being taken advantage of. Because they always expect the 'light to return', they may lack the necessary aggression to fight for themselves or may fail to see the true dark intentions of others. They can also struggle with commitment, constantly seeking the next horizon.",
      "fourPadas": [
        {
          "pada": 1,
          "description": "Aries Navamsha (20°00' - 23°20' Gemini): Driven by Mars. The most active and pioneering pada. Focuses on adventuring, traveling, and spreading knowledge aggressively."
        },
        {
          "pada": 2,
          "description": "Taurus Navamsha (23°20' - 26°40' Gemini): Driven by Venus. Focuses on material comforts, hospitality, and nurturing the physical senses. Highly stable and artistic."
        },
        {
          "pada": 3,
          "description": "Gemini Navamsha (26°40' - 30°00' Gemini): Driven by Mercury. Highly intellectual, communicative, and scientific. Vargottama pada, maximizing the communicative power of Gemini."
        },
        {
          "pada": 4,
          "description": "Cancer Navamsha (0°00' - 3°20' Cancer): Driven by Moon. The most spiritual and nurturing pada. Deeply maternal, focused on providing profound emotional safety and healing."
        }
      ],
      "compatibility": "Punarvasu is highly compatible with Pushya, Shravana, and Purva Bhadrapada. It often struggles with Jyeshtha and Mula.",
      "faqs": [
        {
          "question": "What does the Quiver of Arrows symbolize?",
          "answer": "It symbolizes that their \"arrows\" (energy, resources, efforts) can be shot out into the world, but they will always magically return to the quiver. It represents endless renewable energy, safety, and a home to return to."
        },
        {
          "question": "What is the power of Punarvasu?",
          "answer": "Its power is \"Vastuva Prapana Shakti,\" the extraordinary power to gain or recover wealth, property, and lost items, ensuring that what belongs to them will always return."
        }
      ]
    }
  },
  {
    "id": "pushya",
    "name": "Pushya",
    "meaning": "The Nourisher",
    "deity": "Brihaspati (Jupiter / Priest of the Gods)",
    "rulingPlanet": "Saturn",
    "zodiacSign": "Cancer (3°20′ – 16°40′)",
    "symbol": "Cow's Udder / Lotus",
    "content": {
      "introduction": "Pushya is widely considered the most auspicious of all 27 Nakshatras. Residing entirely within the emotional sign of Cancer, it translates directly to 'The Nourisher' and is symbolized by a cow's udder. It represents ultimate care, spiritual growth, and unconditional nourishment. Ruled by the deity Brihaspati (Jupiter) but governed by the planet Saturn, it creates a rare, beautiful synergy of profound spiritual wisdom combined with absolute discipline, patience, and structure.",
      "personalityTraits": "Pushya natives are highly dependable, caring, and deeply spiritual individuals. They are the ultimate caregivers of the zodiac, offering emotional, material, and spiritual support to those around them. They deeply respect tradition, elders, and religious customs. They are hardworking, patient, and possess a calm, almost regal demeanor. They are incredibly reliable and make excellent, devoted parents.",
      "careerInterests": "They excel in caring, teaching, and traditional professions. Excellent fields include education, nursing, hospitality, the food industry, real estate, religious leadership, local politics, and counseling. They are the pillars of their communities.",
      "shadowSide": "The shadow side of Pushya is that they can become overly orthodox, rigid, and dogmatic in their beliefs due to Saturn's influence. Because of their incredibly giving nature, they are easily taken advantage of by energy vampires. They can also suffer from repressed emotions, putting everyone else's needs above their own until they burn out.",
      "fourPadas": [
        {
          "pada": 1,
          "description": "Leo Navamsha (3°20' - 6°40' Cancer): Driven by Sun. Highly dignified and leadership-oriented. Nurtures others by taking charge and providing strong, paternal guidance."
        },
        {
          "pada": 2,
          "description": "Virgo Navamsha (6°40' - 10°00' Cancer): Driven by Mercury. Highly analytical and service-oriented. Excellent for nursing, accounting, and practical, day-to-day caregiving."
        },
        {
          "pada": 3,
          "description": "Libra Navamsha (10°00' - 13°20' Cancer): Driven by Venus. Focuses on social harmony, diplomacy, and creating beautiful, comforting environments for others to heal in."
        },
        {
          "pada": 4,
          "description": "Scorpio Navamsha (13°20' - 16°40' Cancer): Driven by Mars. The most intense and mystical pada. Nurtures the soul through deep psychological transformation and occult wisdom."
        }
      ],
      "compatibility": "Pushya is highly compatible with Krittika, Ashwini, and Anuradha. It often faces friction with Purva Phalguni and Dhanishta.",
      "faqs": [
        {
          "question": "Why is Pushya considered so auspicious?",
          "answer": "It represents the pure, unselfish nourishment of a mother (the cow's udder) combined with the ultimate wisdom of Jupiter. Any new endeavor (except marriage) started under Pushya is said to be highly successful and divinely protected."
        },
        {
          "question": "What is the power of Pushya?",
          "answer": "Its power is \"Brahmavarchasa Shakti,\" the unique power to harness spiritual energy and create immense spiritual and physical radiance."
        }
      ]
    }
  },
  {
    "id": "ashlesha",
    "name": "Ashlesha",
    "meaning": "The Entwiner",
    "deity": "Nagas (Serpent Deities)",
    "rulingPlanet": "Mercury",
    "zodiacSign": "Cancer (16°40′ – 30°00′)",
    "symbol": "Coiled Serpent",
    "content": {
      "introduction": "Ashlesha is the final Nakshatra of the first cosmic cycle, residing at the very end of the water sign Cancer. Symbolized by a coiled serpent, it represents the mystical, hidden, and sometimes dangerous aspects of life. It is the star of deep psychological insight, Kundalini awakening, and intense clinging or attachment. It marks the difficult transition from the emotional, watery realm of Cancer into the fierce, fiery realm of Leo (the Gandanta point).",
      "personalityTraits": "Ashlesha natives are highly perceptive, intuitive, and almost hypnotic in their presence. They possess a penetrating intellect and can easily see through any deception. They are fiercely protective of their loved ones, often 'coiling' around them to keep them safe. They are intensely private and possess immense hidden strength. They are profound strategic thinkers who never forget a slight.",
      "careerInterests": "They excel in fields requiring deep investigation, strategy, and psychology. Good careers include research, psychology, espionage, politics, law, pharmaceuticals, toxicology, chemistry, and astrology.",
      "shadowSide": "The shadow side of Ashlesha is paranoia, manipulation, and possessiveness. They can be incredibly secretive and hold deep-seated resentments. Like a snake, they have a sharp, venomous tongue when threatened and can strike without warning. Their tendency to 'cling' to people can become suffocating.",
      "fourPadas": [
        {
          "pada": 1,
          "description": "Sagittarius Navamsha (16°40' - 20°00' Cancer): Driven by Jupiter. The most spiritual and philosophical pada. Seeks to understand the deep mysteries of life and karma."
        },
        {
          "pada": 2,
          "description": "Capricorn Navamsha (20°00' - 23°20' Cancer): Driven by Saturn. Highly ambitious and strategic. Uses their psychological insight to build material wealth and overcome enemies."
        },
        {
          "pada": 3,
          "description": "Aquarius Navamsha (23°20' - 26°40' Cancer): Driven by Saturn. Unconventional and scientific. Excellent for deep research, especially in fringe sciences or technology."
        },
        {
          "pada": 4,
          "description": "Pisces Navamsha (26°40' - 30°00' Cancer): Driven by Jupiter. The Gandanta (karmic knot) point. Extremely emotional, mystical, and prone to deep spiritual awakenings or profound illusions."
        }
      ],
      "compatibility": "Ashlesha is highly compatible with Punarvasu, Anuradha, and Jyeshtha. It often clashes fiercely with Mula and Purva Ashadha.",
      "faqs": [
        {
          "question": "Is Ashlesha a dangerous Nakshatra?",
          "answer": "It is a sharp, mystical, and intense Nakshatra. Like a serpent, it is not inherently evil, but it will absolutely strike if provoked. It requires a high level of spiritual maturity to handle its intense, penetrating Kundalini energy."
        },
        {
          "question": "What is the power of Ashlesha?",
          "answer": "Its power is \"Visasleshana Shakti,\" the power to inflict poison or to paralyze enemies, which translates metaphorically to the power of intense concentration, binding, and overpowering opponents."
        }
      ]
    }
  }
];
