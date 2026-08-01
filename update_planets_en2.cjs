const fs = require('fs');

const morePlanets = [
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
      introduction: "Venus, known as Shukra in Vedic astrology, is the brightest planet in the night sky and the ultimate celestial symbol of beauty, love, and luxury. It governs our capacity to attract and appreciate the finer things in life. Venus represents art, romance, marriage, aesthetics, and material comforts. It dictates what we value, what gives us pleasure, and how we relate to others on a romantic and social level. Where Jupiter represents divine grace and wisdom, Venus represents the tangible joys and sensual pleasures of the physical world.",
      whatItRepresents: "Venus represents harmony, diplomacy, romance, and the arts. It governs music, poetry, fashion, jewelry, luxury vehicles, and all forms of entertainment. Physically, it is associated with the reproductive system, kidneys, the face, and the skin. A strong Venus in a birth chart bestows physical attractiveness, a magnetic personality, success in romance, and an inclination toward artistic pursuits. It also brings material wealth and a life filled with comforts. A weak or afflicted Venus can indicate relationship troubles, lack of satisfaction in love, financial difficulties due to overspending on luxuries, or a lack of artistic appreciation.",
      personalityInfluence: "The placement of Venus in your chart reveals your approach to love and relationships, as well as your aesthetic preferences. Individuals with a prominent Venus are often charming, graceful, highly sociable, and possess excellent taste. They seek peace and harmony and often avoid conflict, making them excellent diplomats. They have a refined taste and a natural appreciation for beauty in all its forms. If Venus is afflicted, the person may become overly materialistic, vain, or prone to indulging in excessive sensual pleasures at the expense of their physical or spiritual well-being.",
      vedicVsWestern: "Both Western and Vedic astrology regard Venus as a 'Benefic' planet, ruling Taurus and Libra, and signifying love and money. In Western astrology, Venus heavily dictates personal style, romantic attraction, and what makes a person feel loved. In Vedic astrology, Shukra is revered as the preceptor of the Asuras (demons) and possesses the knowledge of Sanjeevani Vidya (bringing the dead back to life). It is the primary significator of marriage (Kalatra Karaka) and represents the wife in a man's chart. A strong Shukra is considered essential for marital bliss and worldly enjoyments in the Vedic system.",
      houseInfluences: [
        { house: 1, influence: "Creates a highly attractive, charming, and pleasant personality. The person loves arts, luxury, and has a magnetic aura that easily draws people to them." },
        { house: 2, influence: "Brings a sweet voice, a beautiful face, and a love for good food. The person attracts wealth easily and enjoys spending on luxury and family comforts." },
        { house: 3, influence: "Enhances artistic talents, particularly in writing, music, or crafts. The person has pleasant relations with siblings and enjoys short, luxurious travels." },
        { house: 4, influence: "Indicates a beautiful, well-decorated home and domestic peace. The person has a strong bond with their mother and enjoys property and vehicle comforts." },
        { house: 5, influence: "Excellent for romance, creativity, and the arts. The person may have highly talented children and enjoys entertainment, theater, and speculative gains." },
        { house: 6, influence: "Venus struggles here, potentially indicating issues in relationships, debt due to luxury spending, or health problems related to the reproductive system or kidneys." },
        { house: 7, influence: "Venus receives directional strength (Digbala) here, but it's its own house. Brings a beautiful, artistic spouse and success in marriage and partnerships." },
        { house: 8, influence: "Can indicate hidden wealth, gains through marriage (inheritance/alimony), but may cause secret affairs or intense, transformative relationship experiences." },
        { house: 9, influence: "Brings a love for travel, philosophy, and foreign cultures. The person enjoys a fortunate life, religious inclinations, and good relations with teachers." },
        { house: 10, influence: "Favorable for a career in the arts, fashion, beauty, entertainment, or diplomacy. The person is well-liked by colleagues and authority figures." },
        { house: 11, influence: "Fulfills desires related to wealth and luxury. The person has a wide circle of female friends or artistic associates who help them achieve financial gains." },
        { house: 12, influence: "Venus is the only planet that thrives in the 12th house. It brings luxurious sleep, bed comforts, foreign travel, and success in spiritual or isolated settings." }
      ],
      faqs: [
        {
          question: "What does Venus signify in a man's birth chart?",
          answer: "In Vedic astrology, Venus (Shukra) represents the wife or female partner in a man's chart. Its placement, dignity, and aspects indicate the type of partner he will attract and the overall quality of his romantic relationships."
        },
        {
          question: "Why is Venus exalted in Pisces?",
          answer: "Pisces is a sign of universal love, spirituality, and boundless compassion. Venus, the planet of love, reaches its highest, most selfless, and unconditional expression in Pisces, moving beyond physical attachment to pure, spiritual love."
        },
        {
          question: "Which professions are associated with Venus?",
          answer: "Venus rules professions related to beauty, art, luxury, and entertainment. This includes fashion designers, actors, musicians, interior decorators, event planners, makeup artists, and those in the luxury vehicle industry."
        },
        {
          question: "What happens if Venus is weak?",
          answer: "A weak or afflicted Venus can manifest as difficulties in finding love, marital discord, reproductive health issues, a lack of aesthetic sense, or financial struggles due to an inability to manage resources."
        },
        {
          question: "How can I strengthen my Venus?",
          answer: "To enhance Venus, one should maintain cleanliness, respect women, wear clean and fragrant clothes, use perfumes, and wear a Diamond or White Sapphire (after astrological consultation)."
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
      introduction: "Saturn, known and often feared as Shani in Vedic astrology, is the furthest visible planet and the slowest moving among the traditional seven planets. It represents the boundaries of reality, time, karma, and discipline. Saturn is the ultimate teacher and strict taskmaster of the zodiac. While it is often associated with delays, restrictions, and hardships, its true purpose is to forge character through experience, ensuring that you learn the necessary lessons for your soul's evolution. Saturn strips away illusions and forces you to face reality.",
      whatItRepresents: "Saturn represents hard work, responsibility, structure, endurance, and limitations. It is the primary significator of karma, delivering the exact results of your past actions—good or bad, without bias. It governs old age, longevity, tradition, the working class, and servants. Physically, it is associated with the bones, teeth, knees, joints, and the aging process. A well-placed Saturn gives immense patience, discipline, a strong work ethic, and the ability to achieve long-term, lasting success through perseverance. A weak or afflicted Saturn can bring chronic illness, severe delays, poverty, melancholy, depression, and a feeling of being constantly burdened.",
      personalityInfluence: "The placement of Saturn indicates the area of life where you will face your greatest challenges, tests, and ultimately, your greatest mastery. Individuals with a strong Saturn are often serious, responsible, highly dependable, and mature beyond their years. They are pragmatic realists who understand the value of hard work and delayed gratification. They may appear cold or detached, but they are incredibly loyal and structured. Conversely, a challenging Saturn can make a person fearful, overly pessimistic, rigid in their thinking, or prone to self-doubt.",
      vedicVsWestern: "In Western astrology, Saturn represents restrictions, boundaries, the father figure, and the rules of society. The 'Saturn Return' (around age 29) is a major astrological milestone marking the transition into true adulthood. In Vedic astrology, Shani is considered the chief malefic (Paap Graha) but also the ultimate planet of justice (Nyayadhish). The 'Sade Sati' is a highly feared and respected 7.5-year period when Saturn transits over and around the natal Moon, bringing intense life changes, challenges, and karmic balancing. However, Vedic astrology also views Saturn as the significator of longevity (Ayush Karaka) and the planet that grants the highest spiritual detachment when well-placed.",
      houseInfluences: [
        { house: 1, influence: "Makes the person serious, disciplined, and mature, often looking older than their age. They may face early life struggles but achieve solid success through hard work." },
        { house: 2, influence: "Indicates a cautious approach to finances and a serious tone of speech. Wealth is accumulated slowly over time. May indicate distance from family." },
        { house: 3, influence: "An excellent placement. Brings immense endurance, mental toughness, and the ability to work tirelessly. However, it can cause distance or strictness with siblings." },
        { house: 4, influence: "Can indicate a strict or emotionally cold upbringing, or early separation from the mother. The person seeks deep security but may feel burdened by domestic duties." },
        { house: 5, influence: "Brings a serious approach to romance and education. Can cause delays in childbirth or strict discipline with children. The person prefers structured, practical learning." },
        { house: 6, influence: "One of the best placements. Saturn destroys enemies, debts, and diseases over time through sheer endurance. Excellent for a career in service or law." },
        { house: 7, influence: "Saturn gains directional strength (Digbala) here. Indicates a late marriage or marriage to an older, mature, and responsible partner. Demands commitment and loyalty." },
        { house: 8, influence: "Excellent for longevity (Ayush Karaka in the house of longevity). Brings deep, transformative experiences and a serious interest in the occult, though it can cause chronic health issues." },
        { house: 9, influence: "Brings a structured, traditional approach to religion and philosophy. The person may question their faith early on but develops a rigid, deep wisdom later in life." },
        { house: 10, influence: "The person is a workaholic with immense ambition. Career success comes slowly but is highly stable and lasting. Favorable for politics, administration, or heavy industries." },
        { house: 11, influence: "Brings slow but steady financial gains, often from older or established friends and organizations. The person has a small but highly loyal social circle." },
        { house: 12, influence: "Can indicate feelings of isolation or depression. The person may work in secluded places (hospitals, prisons) or foreign lands, and eventually seeks spiritual detachment." }
      ],
      faqs: [
        {
          question: "What is Sade Sati?",
          answer: "Sade Sati is a 7.5-year period in Vedic astrology when Saturn transits the 12th, 1st, and 2nd houses from your natal Moon sign. It is a period of significant transformation, often accompanied by challenges, to clear karmic debts and teach harsh but necessary life lessons."
        },
        {
          question: "Is Saturn always a 'bad' planet?",
          answer: "No. While Saturn brings challenges, delays, and restrictions, it is the planet of pure justice. It rewards hard work, discipline, and honesty. A strong Saturn is essential for building a lasting legacy and achieving true spiritual detachment."
        },
        {
          question: "What does a Saturn Return signify?",
          answer: "Occurring roughly every 29 years, the Saturn Return is when Saturn returns to its exact position in your birth chart. It signifies a period of growing up, facing reality, taking responsibility for your life path, and letting go of what no longer serves you."
        },
        {
          question: "What happens when Saturn is exalted?",
          answer: "Saturn is exalted in Libra. Here, Saturn's strict discipline is applied to balance, fairness, and justice. It creates excellent lawyers, judges, and diplomats who understand the structure of society and work tirelessly for equality."
        },
        {
          question: "How can I reduce the negative effects of Saturn?",
          answer: "The best remedy for Saturn is discipline and service. Feeding the poor, helping the elderly, working hard without expecting immediate rewards, and wearing a Blue Sapphire (only after expert consultation) can appease Shani."
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
      introduction: "Rahu, known as the North Node of the Moon in Western astrology, is not a physical planet but a mathematically calculated shadow planet (Chhaya Graha). It represents the exact point where the Moon's orbit crosses the ecliptic (the Sun's path) moving northward. In Vedic mythology, Rahu is the severed head of a demon (Asura) who illicitly drank the nectar of immortality. Because it is a head without a body, Rahu symbolizes insatiable desire, illusion, and the unending pursuit of worldly success and material gains without ever feeling full.",
      whatItRepresents: "Rahu represents obsession, ambition, sudden changes, and things that are foreign, unconventional, or taboo. It is the driving force behind our worldly desires and our urge to break free from tradition and societal norms. Rahu governs modern technology, mass media, foreign travel, aviation, and poisons/toxins. A well-placed Rahu can grant sudden wealth, immense success, political power, and brilliant, out-of-the-box thinking. An afflicted Rahu can lead to deception, addiction, phobias, paranoia, a constant feeling of dissatisfaction, and a tendency to manipulate others for personal gain.",
      personalityInfluence: "Rahu's placement in your chart indicates where you will have the strongest desires and where you are meant to step out of your comfort zone in this lifetime. Individuals strongly influenced by Rahu are often highly ambitious, driven, and attracted to foreign cultures or unconventional lifestyles. They are trendsetters, innovators, and rebels who refuse to be boxed in. However, they must be extremely careful not to fall into the trap of constant craving, as Rahu's nature is to promise the world but leave one feeling empty if the desires are purely selfish and materialistic.",
      vedicVsWestern: "In Western astrology, the North Node (Rahu) represents the soul's evolutionary path in this lifetime—the lessons we are here to learn and the direction we need to move towards, moving away from the comfort zone of the South Node. It is generally viewed as a positive point of destiny. In Vedic astrology, Rahu is considered a major malefic planet, associated with Maya (illusion), materialism, and unexpected, sudden events. While Western astrology views the North Node largely positively, Vedic astrology views Rahu with caution, acknowledging its power to grant immense worldly success but warning of its deceptive, chaotic, and ultimately unfulfilling nature.",
      houseInfluences: [
        { house: 1, influence: "Creates a highly ambitious, sometimes eccentric personality. The person is constantly seeking self-discovery and may reinvent themselves multiple times, often achieving sudden fame." },
        { house: 2, influence: "Indicates an obsession with accumulating wealth and eating unconventional or foreign foods. The person may have a harsh or deceptive speech pattern and experience sudden financial changes." },
        { house: 3, influence: "An excellent placement. Brings immense courage, strong communication skills, and success in media or technology. The person overcomes all obstacles through sheer willpower." },
        { house: 4, influence: "Can create unrest in the home and a desire to live far from one's birthplace, often in foreign lands. The person may have an unconventional relationship with their mother." },
        { house: 5, influence: "Brings an obsession with romance, speculation, or entertainment. The person has an innovative, out-of-the-box intellect but may experience unusual circumstances regarding children." },
        { house: 6, influence: "A very strong placement. The person easily crushes enemies and overcomes diseases. Favorable for success in medicine, foreign jobs, or overcoming massive obstacles." },
        { house: 7, influence: "Indicates a strong desire for relationships, often leading to unconventional marriages or partnerships with foreigners. Can cause sudden fluctuations in marital harmony." },
        { house: 8, influence: "Brings a fascination with the occult, mysteries, and hidden knowledge. Indicates sudden transformations, potential for unexpected wealth, but also a risk of unusual illnesses." },
        { house: 9, influence: "The person may question traditional religion and explore foreign philosophies. They are highly independent thinkers who travel extensively for higher learning." },
        { house: 10, influence: "Highly favorable for massive career success, politics, and public life. The person is highly ambitious and will use unconventional means to reach the top." },
        { house: 11, influence: "Fulfills desires rapidly. Brings sudden financial gains and a large network of foreign or unconventional friends who help achieve goals." },
        { house: 12, influence: "Indicates a deep connection to foreign lands, isolated places, or spirituality. The person may have vivid dreams, unusual sleep patterns, or secret expenses." }
      ],
      faqs: [
        {
          question: "Are Rahu and the North Node the same thing?",
          answer: "Astronomically, yes. Both refer to the ascending lunar node. However, the interpretive approach differs; Western astrology views it as a spiritual destiny point, while Vedic astrology views it as a powerful, sometimes chaotic shadow planet of unquenchable desire."
        },
        {
          question: "What happens during a Rahu Mahadasha?",
          answer: "Rahu Mahadasha is an 18-year planetary period in Vedic astrology. It is often a time of massive, sudden changes, foreign travel, intense ambition, and potential worldly success, but it can also bring confusion, psychological stress, and the breaking of illusions."
        },
        {
          question: "Why is Rahu associated with illusions (Maya)?",
          answer: "In mythology, Rahu is a head without a stomach. It can consume but never be satisfied. It creates the illusion that fulfilling the next desire will bring ultimate happiness, representing the endless cycle of materialism."
        },
        {
          question: "What careers are ruled by Rahu?",
          answer: "Rahu rules modern and unconventional careers: Information Technology, aviation, mass media, cinema, artificial intelligence, politics, photography, and working with foreign corporations."
        },
        {
          question: "How can I balance Rahu's energy?",
          answer: "To balance Rahu, avoid addictions and shortcuts to success. Practice grounding meditations, feed stray dogs, respect your grandparents, and focus on spiritual growth rather than purely material pursuits."
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
      introduction: "Ketu, known as the South Node of the Moon in Western astrology, is the mathematical counterpart to Rahu. If Rahu is the severed head of the demon, Ketu is the headless body. Ketu represents what we have already mastered in past lives, our innate, natural talents, and ultimately, our path to spiritual liberation (Moksha). It is the planet of detachment, letting go, and spiritual insight, operating in complete contrast to Rahu's obsessive materialistic desires. Ketu takes away worldly attachments to force the soul to look inward.",
      whatItRepresents: "Ketu represents spirituality, asceticism, intuition, and past-life karma. It governs the occult, hidden knowledge, astrology, and isolation. It acts like a black hole in the birth chart, indicating an area of life where we feel detached, disinterested, or where we experience sudden losses that force us to realize the impermanence of the material world. A well-placed Ketu gives profound spiritual wisdom, strong intuition, psychic abilities, and a natural inclination towards meditation and healing. An afflicted Ketu can cause confusion, feeling lost, sudden accidents, or an inability to function normally in the material world.",
      personalityInfluence: "Ketu's placement shows where your past-life expertise lies, making those areas feel incredibly natural and familiar to you. However, because you have 'been there, done that,' it also indicates where you feel a sense of apathy and must practice detachment. Individuals strongly influenced by Ketu are often highly intuitive, introverted, and spiritually inclined. They may have a natural talent for research, astrology, mathematics, or healing. They often feel a sense of dissatisfaction with worldly achievements, constantly seeking a deeper meaning and a connection to the divine.",
      vedicVsWestern: "In Western astrology, the South Node (Ketu) represents our past lives, our comfort zones, and the deeply ingrained habits we need to move away from in order to grow towards our North Node destiny. It is seen as a point of stagnation. In Vedic astrology, Ketu is considered a spiritual malefic. While it can cause material loss, sudden endings, and health issues (especially difficult to diagnose), it is revered as the Moksha Karaka—the ultimate significator of spiritual liberation. Vedic astrology views Ketu not just as a comfort zone to leave behind, but as the ultimate force that strips away illusions (Maya) to reveal the naked truth of existence.",
      houseInfluences: [
        { house: 1, influence: "Creates a deeply intuitive, introverted, and spiritually inclined personality. The person may feel misunderstood by the world and often seeks solitude to connect with their inner self." },
        { house: 2, influence: "Indicates detachment from wealth and family. The person may experience sudden fluctuations in finances and speaks less, but their words often carry deep, intuitive truth." },
        { house: 3, influence: "Brings strong intuition and a unique way of communicating. The person may feel detached from siblings and prefers to learn spiritual or occult subjects." },
        { house: 4, influence: "Creates a sense of detachment from the homeland or mother. The person may frequently change residences or prefer a highly secluded, peaceful home environment." },
        { house: 5, influence: "Indicates past-life mastery of ancient texts or mantras. The person has a highly spiritual intellect but may experience a sense of detachment regarding children or romance." },
        { house: 6, influence: "A strong placement for defeating enemies through spiritual means. The person may have a talent for alternative healing, but must guard against mysterious health issues." },
        { house: 7, influence: "Indicates detachment from marriage and partnerships. The person may seek a highly spiritual partner or feel unfulfilled by traditional relationship structures." },
        { house: 8, influence: "Excellent for deep research, astrology, and the occult. The person has profound intuition and may experience sudden, spiritually transformative events." },
        { house: 9, influence: "Brings deep spiritual wisdom and a natural understanding of philosophy. The person may question traditional gurus and seek their own direct connection to the divine." },
        { house: 10, influence: "Indicates detachment from career and public status. The person may change careers frequently or find ultimate fulfillment in spiritual, healing, or behind-the-scenes work." },
        { house: 11, influence: "The person feels detached from large social networks and material gains. They have a small circle of spiritual friends and find fulfillment in giving rather than receiving." },
        { house: 12, influence: "The ultimate placement for spiritual liberation (Moksha). The person has vivid dreams, strong psychic abilities, and a deep desire to transcend the material world." }
      ],
      faqs: [
        {
          question: "Why is Ketu called the Moksha Karaka?",
          answer: "Moksha means spiritual liberation from the cycle of rebirth. Ketu strips away material desires, attachments, and illusions, forcing the soul to look inward and seek union with the divine, making it the ultimate planet of spiritual enlightenment."
        },
        {
          question: "What is the relationship between Rahu and Ketu?",
          answer: "Rahu and Ketu are always exactly 180 degrees apart in the birth chart. They represent the axis of destiny. Rahu pulls you outward toward new material experiences, while Ketu pulls you inward toward detachment and spiritual reflection."
        },
        {
          question: "How does Ketu affect the house it is placed in?",
          answer: "Ketu acts like a black hole, creating a sense of detachment, loss, or dissatisfaction regarding the affairs of the house it occupies. It indicates an area where you have past-life mastery but must now learn to let go of control."
        },
        {
          question: "Can Ketu be beneficial?",
          answer: "Yes, absolutely. While it may deny material pleasures, a well-placed Ketu grants unparalleled intuition, psychic abilities, mastery over spiritual subjects like astrology, and the ultimate peace that comes from non-attachment."
        },
        {
          question: "How do I balance Ketu's energy?",
          answer: "To balance Ketu, practice meditation, embrace spirituality, learn to let go of obsessive control, donate to spiritual organizations or monks, and feed street dogs."
        }
      ]
    }
  }
];

const fsModule = require('fs');
let content = fsModule.readFileSync('src/data/planets.ts', 'utf8');

// The file currently exports the array with the first 5 planets. We want to parse it, add more, and rewrite.
// Since we know the structure, we can just replace the closing bracket.
const morePlanetsString = JSON.stringify(morePlanets, null, 2);
// Remove the brackets from the start and end of morePlanetsString
const innerPlanetsString = morePlanetsString.substring(1, morePlanetsString.length - 1);

content = content.replace('];', ',\n' + innerPlanetsString + '\n];');
fs.writeFileSync('src/data/planets.ts', content);
console.log('Successfully appended remaining planets to planets.ts');
