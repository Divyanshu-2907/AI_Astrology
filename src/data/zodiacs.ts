export interface ZodiacData {
  id: string;
  name: string;
  sanskritName: string;
  element: string;
  quality: string;
  rulingPlanet: string;
  symbol: string;
  content: {
    introduction: string;
    personalityTraits: string;
    loveAndRelationships: string;
    careerAndMoney: string;
    faqs: { question: string; answer: string }[];
  };
}

export const zodiacs: ZodiacData[] = [
  {
    id: 'aries',
    name: 'Aries',
    sanskritName: 'Mesha',
    element: 'Fire',
    quality: 'Cardinal (Movable)',
    rulingPlanet: 'Mars',
    symbol: 'The Ram',
    content: {
      introduction: 'Aries, known as Mesha in Vedic astrology, is the first sign of the zodiac. Marking the beginning of the astrological year, Aries represents birth, initiation, and the raw, fiery energy of new beginnings. Ruled by Mars, the planet of war and action, Aries is a cardinal fire sign characterized by its boldness, courage, and pioneering spirit.',
      personalityTraits: 'Aries individuals are natural-born leaders. They are dynamic, energetic, and highly competitive. They love taking charge and are rarely afraid to venture into the unknown. They possess a childlike innocence and enthusiasm but can also be impulsive, impatient, and quick-tempered. They thrive on challenges and despise stagnation.',
      loveAndRelationships: 'In love, Aries is passionate, direct, and spontaneous. They pursue their romantic interests with the same vigor they apply to their goals. They need a partner who can keep up with their high energy and respect their need for independence. While fiercely loyal, they easily get bored if the relationship lacks excitement.',
      careerAndMoney: 'Aries excel in careers that allow them to lead, innovate, and work independently. They make excellent entrepreneurs, military personnel, athletes, surgeons, and managers. They are driven to succeed but can sometimes struggle with follow-through on long-term projects, preferring the thrill of the startup phase.',
      faqs: [
        {
          question: 'What is the biggest weakness of Aries?',
          answer: 'Impatience and a quick temper. Because they move so fast, they often get frustrated with those who cannot keep their pace, leading to impulsive decisions or harsh words.'
        },
        {
          question: 'Are Aries good leaders?',
          answer: 'Yes, they are excellent at initiating projects and rallying troops. However, they must learn to delegate and follow through to be truly effective long-term leaders.'
        }
      ]
    }
  },
  {
    id: 'taurus',
    name: 'Taurus',
    sanskritName: 'Vrishabha',
    element: 'Earth',
    quality: 'Fixed',
    rulingPlanet: 'Venus',
    symbol: 'The Bull',
    content: {
      introduction: 'Taurus, known as Vrishabha, is the second sign of the zodiac. Following the fiery burst of Aries, Taurus grounds that energy into the earth, establishing stability, value, and physical form. Ruled by Venus, the planet of love and beauty, Taurus is a fixed earth sign known for its endurance, sensuality, and love for material comforts.',
      personalityTraits: 'Taurus natives are the anchor of the zodiac. They are incredibly reliable, patient, and hardworking. They value stability and security above all else. They possess a deep appreciation for art, good food, and luxury. While they are usually calm and easygoing, like the Bull, they can be fiercely stubborn once they have made up their minds.',
      loveAndRelationships: 'In relationships, Taurus is devoted, sensual, and protective. They take their time getting to know someone, preferring long-term stability over fleeting romances. They express love through physical touch and material gifts. However, their desire for security can sometimes manifest as possessiveness or jealousy.',
      careerAndMoney: 'Taurus excels in fields that require patience, aesthetics, and financial acumen. They make great bankers, chefs, artists, architects, real estate agents, and farmers. They are excellent at accumulating wealth and managing resources effectively over time.',
      faqs: [
        {
          question: 'Why is Taurus known for being stubborn?',
          answer: 'Taurus is a "Fixed" sign, meaning they prefer stability and resist change. Once they establish a comfortable routine or belief, it takes immense effort to make them budge.'
        },
        {
          question: 'What brings a Taurus true happiness?',
          answer: 'A stable environment, sensual comforts (like good food and soft fabrics), financial security, and a peaceful, aesthetically pleasing home.'
        }
      ]
    }
  },
  {
    id: 'gemini',
    name: 'Gemini',
    sanskritName: 'Mithuna',
    element: 'Air',
    quality: 'Mutable (Dual)',
    rulingPlanet: 'Mercury',
    symbol: 'The Twins',
    content: {
      introduction: 'Gemini, known as Mithuna, is the third sign of the zodiac. It introduces duality, communication, and intellectual curiosity to the astrological wheel. Ruled by Mercury, the planet of intellect and commerce, Gemini is a mutable air sign characterized by its quick wit, adaptability, and insatiable desire to gather information.',
      personalityTraits: 'Gemini individuals are the ultimate social butterflies. They are highly intelligent, articulate, and fiercely curious. They have a versatile nature and can easily adapt to any situation. Because they are represented by twins, they often have two distinct sides to their personality. They are fun-loving and youthful but can sometimes be inconsistent, nervous, or easily distracted.',
      loveAndRelationships: 'For a Gemini, mental stimulation is the key to a successful relationship. They need a partner who can engage them in deep conversations and keep them intellectually on their toes. They enjoy variety and can be flirtatious, often fearing the routine of a traditional, stagnant relationship.',
      careerAndMoney: 'Gemini excels in careers that involve communication, writing, and multitasking. They thrive in fast-paced environments like journalism, sales, public relations, teaching, and software development. They easily grasp new concepts but may struggle to stick with one career path for life.',
      faqs: [
        {
          question: 'Are Geminis truly "two-faced"?',
          answer: 'Not necessarily in a malicious way. Their dual nature means they can easily see multiple sides of an issue and adapt their personality to fit their environment, which can sometimes be misinterpreted as being fake.'
        },
        {
          question: 'What is a Gemini\'s greatest strength?',
          answer: 'Their adaptability and communication skills. They can quickly learn new things and effortlessly connect with people from all walks of life.'
        }
      ]
    }
  },
  {
    id: 'cancer',
    name: 'Cancer',
    sanskritName: 'Karka',
    element: 'Water',
    quality: 'Cardinal (Movable)',
    rulingPlanet: 'Moon',
    symbol: 'The Crab',
    content: {
      introduction: 'Cancer, known as Karka, is the fourth sign of the zodiac. It represents the foundation of the emotional self, home, and family. Ruled by the Moon, the celestial body governing emotions and intuition, Cancer is a cardinal water sign known for its deep empathy, protective nature, and strong connection to the past.',
      personalityTraits: 'Cancer natives are deeply intuitive and sentimental. They are the nurturers of the zodiac, always seeking to protect and care for their loved ones. Like the crab, they have a tough outer shell to protect their soft, vulnerable interior. They are highly imaginative, loyal, and patriotic, but can also be moody, clingy, and overly sensitive to criticism.',
      loveAndRelationships: 'In love, Cancer seeks deep emotional security and a traditional family life. They love fiercely and unconditionally. They are romantic and devoted partners but require constant reassurance. If they feel unappreciated, they tend to retreat into their shell and hold onto past grievances.',
      careerAndMoney: 'Cancer excels in careers that involve caregiving, history, and the home. They make excellent nurses, chefs, real estate agents, historians, teachers, and human resources professionals. They are usually quite frugal and excellent at saving money for the future.',
      faqs: [
        {
          question: 'Why are Cancers so moody?',
          answer: 'Being ruled by the Moon, their emotional state fluctuates rapidly, much like the lunar phases and the ocean tides. They deeply feel the energies of the people and environment around them.'
        },
        {
          question: 'How do you win a Cancer\'s trust?',
          answer: 'Through consistency, emotional validation, and making them feel safe. Once they let you past their hard outer shell, they are loyal for life.'
        }
      ]
    }
  },
  {
    id: 'leo',
    name: 'Leo',
    sanskritName: 'Simha',
    element: 'Fire',
    quality: 'Fixed',
    rulingPlanet: 'Sun',
    symbol: 'The Lion',
    content: {
      introduction: 'Leo, known as Simha, is the fifth sign of the zodiac. It is the sign of self-expression, creativity, and royal authority. Ruled by the Sun, the center of our solar system, Leo is a fixed fire sign characterized by its warmth, radiance, and undeniable magnetic presence. They are the kings and queens of the astrological jungle.',
      personalityTraits: 'Leos are natural-born stars. They are charismatic, confident, and love being in the spotlight. They have a huge heart, are incredibly generous, and fiercely loyal to their "pride." They are creative and dramatic, bringing life to any party. However, their need for admiration can sometimes turn into arrogance, vanity, or stubbornness.',
      loveAndRelationships: 'In romance, Leo is passionate, theatrical, and extremely generous. They treat their partners like royalty and expect the same in return. They need to feel adored and appreciated. While they have a strong ego, they are fiercely protective and loyal to the one they love.',
      careerAndMoney: 'Leo thrives in careers where they can be in charge, express their creativity, or be in the public eye. They excel in acting, politics, management, entertainment, fashion, and as CEOs. They love luxury and tend to spend lavishly to maintain a regal lifestyle.',
      faqs: [
        {
          question: 'Is Leo\'s confidence real or a facade?',
          answer: 'While they genuinely possess strong self-belief, their confidence is also deeply tied to external validation. If they feel unappreciated, their bright light can quickly turn into self-doubt.'
        },
        {
          question: 'What is a Leo\'s best quality?',
          answer: 'Their immense generosity and warm heart. A true Leo will go out of their way to protect and uplift those they care about.'
        }
      ]
    }
  },
  {
    id: 'virgo',
    name: 'Virgo',
    sanskritName: 'Kanya',
    element: 'Earth',
    quality: 'Mutable (Dual)',
    rulingPlanet: 'Mercury',
    symbol: 'The Maiden / Virgin',
    content: {
      introduction: 'Virgo, known as Kanya, is the sixth sign of the zodiac. It represents purity, service, and analytical intelligence. Ruled by Mercury, the planet of communication and intellect, Virgo is a mutable earth sign characterized by its practicality, attention to detail, and deep desire to improve the world around them.',
      personalityTraits: 'Virgos are the perfectionists of the zodiac. They are highly analytical, organized, and hardworking. They possess a sharp intellect and a keen eye for detail that others easily miss. They are deeply devoted to helping others and serving their community. However, their pursuit of perfection can make them overly critical, anxious, and prone to overthinking.',
      loveAndRelationships: 'In love, Virgo is practical, loyal, and supportive. They express love through acts of service rather than grand romantic gestures. They take their time choosing a partner, analyzing every detail to ensure compatibility. They need a partner who appreciates their help and respects their need for cleanliness and order.',
      careerAndMoney: 'Virgo excels in careers that require precision, analysis, and service. They make excellent doctors, editors, accountants, data analysts, nutritionists, and organizers. They are highly responsible with money and prefer a frugal, well-planned lifestyle over extravagance.',
      faqs: [
        {
          question: 'Why are Virgos so critical?',
          answer: 'Their critical nature stems from a genuine desire to improve things. They easily spot flaws because their minds are wired to seek perfection and efficiency, though they can struggle to turn off this inner critic.'
        },
        {
          question: 'What does the "Virgin" symbol mean?',
          answer: 'It does not literally mean virginity, but rather "purity of intent." It symbolizes an independent, self-contained nature and a desire to remain pure from the chaotic illusions of the world.'
        }
      ]
    }
  },
  {
    id: 'libra',
    name: 'Libra',
    sanskritName: 'Tula',
    element: 'Air',
    quality: 'Cardinal (Movable)',
    rulingPlanet: 'Venus',
    symbol: 'The Scales',
    content: {
      introduction: 'Libra, known as Tula, is the seventh sign of the zodiac. Marking the halfway point of the astrological year, it shifts the focus from "self" to "others." Ruled by Venus, the planet of love and aesthetics, Libra is a cardinal air sign focused on balance, harmony, justice, and partnerships. It is the only sign symbolized by an inanimate object—the Scales.',
      personalityTraits: 'Libras are the ultimate diplomats. They are charming, fair-minded, and highly sociable. They strive for peace and harmony in all aspects of life, avoiding conflict at all costs. They possess a refined taste and a deep appreciation for art and beauty. However, their constant weighing of pros and cons can make them notoriously indecisive and prone to people-pleasing.',
      loveAndRelationships: 'For a Libra, a partnership is essential. They feel most complete when they are in a balanced, romantic relationship. They are attentive, romantic, and fair partners. They thrive on intellectual and aesthetic connection but must be careful not to lose their own identity in the pursuit of keeping their partner happy.',
      careerAndMoney: 'Libra excels in careers that require diplomacy, aesthetics, and justice. They make great lawyers, mediators, interior designers, HR professionals, artists, and diplomats. They enjoy luxurious items but generally try to maintain a balanced budget.',
      faqs: [
        {
          question: 'Why are Libras so indecisive?',
          answer: 'Because they are symbolized by the scales, they literally weigh every possible option to ensure fairness and avoid making a "wrong" choice that might upset the harmony.'
        },
        {
          question: 'What is Libra\'s greatest strength?',
          answer: 'Their ability to see all sides of an argument and bring people together. They are masterful mediators and bring a sense of grace and diplomacy to any situation.'
        }
      ]
    }
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    sanskritName: 'Vrishchika',
    element: 'Water',
    quality: 'Fixed',
    rulingPlanet: 'Mars (and Pluto in Western)',
    symbol: 'The Scorpion',
    content: {
      introduction: 'Scorpio, known as Vrishchika, is the eighth sign of the zodiac. It is the sign of profound transformation, intimacy, and the occult. Ruled traditionally by Mars (the warrior), Scorpio is a fixed water sign known for its intense emotional depth, secrecy, and unparalleled resilience. It is often considered the most powerful and misunderstood sign of the zodiac.',
      personalityTraits: 'Scorpios are intensely passionate, fiercely loyal, and incredibly perceptive. They possess a penetrating gaze and a psychological depth that allows them to see through any lie. They are resourceful, brave, and determined. However, their intensity can also manifest as jealousy, possessiveness, secrecy, and a tendency to hold deep grudges. They never forget a kindness, nor a betrayal.',
      loveAndRelationships: 'In relationships, Scorpio seeks complete emotional and physical merging. They crave deep, transformative intimacy and demand absolute loyalty. They are fiercely protective of their partners. Earning a Scorpio\'s trust takes time, but once earned, they are the most devoted partners. Betrayal, however, will result in the sting of the scorpion.',
      careerAndMoney: 'Scorpio thrives in careers that involve research, investigation, and crisis management. They excel as surgeons, detectives, psychologists, researchers, occultists, and financial advisors. They have a knack for uncovering hidden truths and managing other people\'s money (8th house matters).',
      faqs: [
        {
          question: 'Why is Scorpio associated with transformation?',
          answer: 'Scorpio rules the 8th house of death and rebirth. They frequently go through periods of intense struggle, only to "shed their skin" and rise from the ashes stronger than before, like a Phoenix.'
        },
        {
          question: 'Are Scorpios dangerous?',
          answer: 'Only if betrayed. Scorpios value loyalty above all else. They are highly protective and will defend themselves and their loved ones fiercely if threatened.'
        }
      ]
    }
  },
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    sanskritName: 'Dhanu',
    element: 'Fire',
    quality: 'Mutable (Dual)',
    rulingPlanet: 'Jupiter',
    symbol: 'The Archer / Centaur',
    content: {
      introduction: 'Sagittarius, known as Dhanu, is the ninth sign of the zodiac. Following the intense depths of Scorpio, Sagittarius shoots its arrow toward the heavens in search of higher truth, philosophy, and freedom. Ruled by Jupiter, the planet of expansion and luck, Sagittarius is a mutable fire sign characterized by its optimism, love for travel, and philosophical nature.',
      personalityTraits: 'Sagittarians are the adventurers and truth-seekers of the zodiac. They are optimistic, enthusiastic, and fiercely independent. They love exploring different cultures, philosophies, and religions. They are brutally honest and have a great sense of humor. However, their bluntness can sometimes lack tact, and their love for freedom can make them commitment-phobic or reckless.',
      loveAndRelationships: 'In love, Sagittarius needs space, freedom, and an intellectual connection. They view love as an adventure and want a partner who can be their best friend and travel companion. They despise feeling boxed in or controlled by jealous partners. If given enough freedom, they are fun, loyal, and inspiring mates.',
      careerAndMoney: 'Sagittarius excels in careers that involve travel, higher education, and philosophy. They make great professors, travel guides, publishers, lawyers, motivational speakers, and diplomats. They are naturally lucky with money but can also be overly generous or prone to gambling.',
      faqs: [
        {
          question: 'Why are Sagittarians so blunt?',
          answer: 'They value truth and authenticity above social pleasantries. They believe honesty is the best policy, even if it hurts, and they often lack the "filter" that other signs possess.'
        },
        {
          question: 'What does the Centaur symbol represent?',
          answer: 'The half-man, half-horse symbolizes the bridging of their animalistic, fiery physical desires with their intellectual, philosophical human minds aiming for the heavens (the arrow).'
        }
      ]
    }
  },
  {
    id: 'capricorn',
    name: 'Capricorn',
    sanskritName: 'Makara',
    element: 'Earth',
    quality: 'Cardinal (Movable)',
    rulingPlanet: 'Saturn',
    symbol: 'The Sea-Goat',
    content: {
      introduction: 'Capricorn, known as Makara, is the tenth sign of the zodiac. It represents the pinnacle of achievement, structure, and public responsibility. Ruled by Saturn, the planet of discipline and karma, Capricorn is a cardinal earth sign known for its relentless ambition, practicality, and enduring work ethic. They are the master builders of the zodiac.',
      personalityTraits: 'Capricorns are serious, disciplined, and incredibly focused on their long-term goals. They possess immense patience and resilience, capable of climbing the highest mountains (like the goat). They are traditional, responsible, and value social status. However, they can sometimes be overly pessimistic, rigid, and prioritize work over their personal and emotional lives.',
      loveAndRelationships: 'In relationships, Capricorn is cautious, loyal, and supportive. They treat partnerships like a serious investment and look for someone who can help them build a secure future. They are not overly emotional or romantic, expressing love by providing stability and acting as a rock for their family.',
      careerAndMoney: 'Capricorn is arguably the most career-focused sign. They thrive in corporate environments, government, management, architecture, and finance. They are excellent planners and will slowly but surely climb to the top of the executive ladder. They are highly responsible with money and value long-term financial security.',
      faqs: [
        {
          question: 'What is a Sea-Goat?',
          answer: 'The Sea-Goat is a mythical creature with the upper body of a goat and the tail of a fish. It symbolizes Capricorn\'s ability to climb the highest peaks of worldly success while also navigating the deep emotional waters of the soul (though they often keep the water part hidden).'
        },
        {
          question: 'Why do Capricorns seem so serious?',
          answer: 'They are ruled by Saturn, the taskmaster planet. From a young age, they often feel a heavy sense of responsibility and duty, focusing on reality and consequences rather than frivolous play.'
        }
      ]
    }
  },
  {
    id: 'aquarius',
    name: 'Aquarius',
    sanskritName: 'Kumbha',
    element: 'Air',
    quality: 'Fixed',
    rulingPlanet: 'Saturn (and Uranus in Western)',
    symbol: 'The Water Bearer',
    content: {
      introduction: 'Aquarius, known as Kumbha, is the eleventh sign of the zodiac. It is the sign of innovation, rebellion, and humanitarianism. Ruled traditionally by Saturn (which provides structure) and modernly by Uranus (which brings revolution), Aquarius is a fixed air sign focused on the collective, the future, and breaking outdated traditions. It is the most eccentric sign of the zodiac.',
      personalityTraits: 'Aquarians are visionary, intellectual, and fiercely independent. They march to the beat of their own drum and are not afraid to challenge the status quo. They are deep thinkers who care immensely about social justice and humanity as a whole. While they are very friendly, they can also be emotionally detached, unpredictable, and fiercely stubborn in their unconventional beliefs.',
      loveAndRelationships: 'In love, Aquarius seeks a strong intellectual connection and friendship first. They need a partner who respects their need for extreme independence and doesn\'t demand constant emotional validation. They are loyal but approach romance logically rather than emotionally, which can sometimes leave their partners feeling cold.',
      careerAndMoney: 'Aquarius excels in careers involving technology, science, and social reform. They make excellent engineers, scientists, inventors, social activists, astrologers, and IT professionals. They view money as a tool to facilitate their freedom and humanitarian causes rather than a status symbol.',
      faqs: [
        {
          question: 'Why is Aquarius an Air sign if it\'s the "Water Bearer"?',
          answer: 'The water bearer is pouring out the "waters of knowledge" and truth onto humanity, not literal water. Air signs are intellectual and communicative, which perfectly aligns with Aquarius\'s goal of spreading revolutionary ideas.'
        },
        {
          question: 'Are Aquarians unemotional?',
          answer: 'No, they feel things deeply, especially regarding the collective suffering of humanity. However, they process emotions intellectually and often detach from personal, messy emotions to maintain their objective viewpoint.'
        }
      ]
    }
  },
  {
    id: 'pisces',
    name: 'Pisces',
    sanskritName: 'Meena',
    element: 'Water',
    quality: 'Mutable (Dual)',
    rulingPlanet: 'Jupiter (and Neptune in Western)',
    symbol: 'Two Fish Swimming in Opposite Directions',
    content: {
      introduction: 'Pisces, known as Meena, is the twelfth and final sign of the zodiac. It represents the dissolution of the ego and the merging of the soul with the divine universe. Ruled traditionally by Jupiter (expansion) and modernly by Neptune (dreams/illusions), Pisces is a mutable water sign characterized by boundless empathy, mystical spirituality, and profound artistic creativity.',
      personalityTraits: 'Pisceans are the dreamers and mystics of the zodiac. They are incredibly compassionate, gentle, and highly intuitive. Because they are the final sign, they carry the energy and wisdom of all the preceding signs. They are highly imaginative and romantic. However, their lack of boundaries can make them prone to escapism, gullibility, and absorbing the negative emotions of others.',
      loveAndRelationships: 'In love, Pisces is the ultimate romantic. They seek a soulmate connection and often view relationships through rose-colored glasses. They are completely devoted and willing to sacrifice everything for their partner. They need a grounding partner who can protect them from being taken advantage of, as they struggle to set emotional boundaries.',
      careerAndMoney: 'Pisces excels in careers related to healing, the arts, and the subconscious. They make wonderful artists, musicians, nurses, spiritual healers, therapists, and photographers. They are generally not motivated by money, preferring careers that fulfill them spiritually or allow them to help others.',
      faqs: [
        {
          question: 'What do the Two Fish symbolize?',
          answer: 'The two fish swimming in opposite directions represent the constant duality in a Piscean\'s life—the struggle between the physical, material world and the mystical, spiritual realm. It shows their desire to escape reality into a dream world.'
        },
        {
          question: 'Why are Pisceans so sensitive?',
          answer: 'As a mutable water sign, they lack emotional boundaries. They literally absorb the energies, moods, and pain of everyone in the room, making them incredible empaths but also highly vulnerable to emotional exhaustion.'
        }
      ]
    }
  }
];
