const fs = require('fs');

const housesEnDataPart2 = [
  {
    id: '7th-house',
    name: '7th House',
    sanskritName: 'Kalatra Bhava',
    title: 'The 7th House in Astrology: Marriage, Partnerships & The Public',
    description: 'Learn about the 7th House in astrology. Discover how it influences your marriage, life partner, business partnerships, contracts, and public dealings.',
    significator: 'Venus (Shukra)',
    content: {
      introduction: "The 7th House, known as Kalatra Bhava (the House of Spouse), is situated exactly opposite the 1st house on the astrological wheel. While the 1st house is the 'Self', the 7th house is the 'Other'. It represents the mirror to your soul, focusing on how you relate to the world on a one-to-one basis. This house governs all committed partnerships, primarily marriage, but also vital business relationships and legal contracts.",
      whatItRepresents: "This house governs your spouse, the nature and happiness of your marriage, business partnerships, and all legally binding agreements. It also relates to how you interact with the public, your popularity, and even open enemies (those who oppose you directly, unlike the hidden enemies of the 6th house). A strong 7th house indicates a supportive, loving spouse and success in business partnerships. Afflictions here can cause marital discord, delays in marriage, or betrayal by partners.",
      keyThemes: "Marriage, spouse, business partnerships, contracts, public image, one-on-one relationships, foreign travel for business, and open enemies.",
      vedicVsWestern: "Both systems universally associate the 7th house with marriage and partnerships. In Vedic astrology, however, the 7th house is scrutinized meticulously through planetary periods (Dashas) and the Navamsha chart (D9) to predict the exact timing of marriage and the physical/psychological traits of the spouse. It is also considered a 'Maraka' (death-inflicting) house, because losing oneself in another (marriage) or the culmination of desires can symbolically represent the end of the individual ego.",
      planetsInHouse: [
        { planet: "Sun", influence: "Can bring a powerful, authoritative, or wealthy spouse. However, ego clashes and dominance issues are highly likely in the marriage." },
        { planet: "Moon", influence: "Brings a gentle, caring, and emotionally sensitive spouse. The person seeks deep emotional connection in marriage, but relationships can fluctuate with moods." },
        { planet: "Mars", influence: "Creates Mangal Dosha (Kuja Dosha). Indicates a passionate but highly argumentative marriage. The spouse is aggressive and independent. Excellent for dynamic business partnerships." },
        { planet: "Mercury", influence: "The spouse is youthful, talkative, and highly intellectual. Communication is the foundation of the marriage. Good for trade and commerce." },
        { planet: "Jupiter", influence: "Highly auspicious for marriage. Brings a wise, loyal, and spiritual spouse. The marriage is harmonious, and the person gains wealth and status through partnerships." },
        { planet: "Venus", influence: "The natural significator of marriage placed in its own house. Brings a beautiful, artistic, and romantic spouse. However, too much Venusian energy can sometimes lead to excessive indulgence or high expectations." },
        { planet: "Saturn", influence: "Gains directional strength (Digbala) here. Indicates a late marriage to a mature, serious, or older partner. The marriage is based on duty, loyalty, and practical foundation rather than pure romance." },
        { planet: "Rahu", influence: "Indicates an unconventional marriage, often to someone from a different culture, religion, or foreign land. The person may have obsessive desires regarding relationships." },
        { planet: "Ketu", influence: "The person may feel detached from their spouse or traditional marriage structures. They seek a deeply spiritual connection or may experience sudden relationship endings." }
      ],
      faqs: [
        {
          question: 'How do I know the characteristics of my future spouse?',
          answer: 'Look at the zodiac sign ruling the 7th house, the planets placed inside it, and the condition of the 7th house lord. For example, Mercury connected to the 7th house suggests a youthful and communicative partner.'
        },
        {
          question: 'Is the 7th house only about romance?',
          answer: 'No. While the 5th house rules romance and dating, the 7th house rules committed, legally binding partnerships. This includes business partners and long-term marital commitments.'
        },
        {
          question: 'What is a Maraka house?',
          answer: 'In Vedic astrology, the 2nd and 7th houses are Maraka (death-inflicting) houses. Because the 7th is the farthest point from the 1st house (birth/self), it represents the sunset of life and the exhaustion of physical energy.'
        }
      ]
    }
  },
  {
    id: '8th-house',
    name: '8th House',
    sanskritName: 'Ayu Bhava / Randhra Bhava',
    title: 'The 8th House in Astrology: Transformation, Occult & Longevity',
    description: 'Explore the 8th House in astrology. Discover how it influences sudden life changes, hidden wealth, occult sciences, deep trauma, and longevity.',
    significator: 'Saturn (Shani) for longevity',
    content: {
      introduction: "The 8th House is the most mysterious, profound, and often misunderstood house in astrology. Known as Randhra Bhava (the House of Vulnerability/Hidden Things) and Ayu Bhava (the House of Longevity), it is a Dusthana (difficult house) that rules the unseen. It governs the dark, hidden depths of the human experience, bringing sudden transformations, crises, and ultimate rebirth. It is the house of the phoenix rising from the ashes.",
      whatItRepresents: "This house governs longevity, death, sudden events (accidents, sudden windfalls, or sudden losses), hidden wealth (inheritance, lottery, spouse's wealth, taxes), and the occult sciences (astrology, magic, psychology, deep research). It is a house of profound psychological transformation, secrets, and deep intimacy. Planets here often cause sudden upheavals and painful ego-deaths, but they also provide unparalleled spiritual depth and the ability to see beyond the material veil.",
      keyThemes: "Longevity, death and rebirth, sudden changes, inheritance, occult knowledge, deep research, secrets, hidden wealth, trauma, and psychological transformation.",
      vedicVsWestern: "Western astrology associates the 8th house with Scorpio and Pluto, focusing heavily on sex, death, taxes, shared resources, and psychological depths. Vedic astrology aligns with this but places a massive emphasis on 'Ayu' (longevity) and sudden, unpredictable karmic events. In Jyotish, the 8th house is the most secretive house, and planets placed here often have their material significations destroyed or hidden, while their spiritual or research-oriented qualities are magnified.",
      planetsInHouse: [
        { planet: "Sun", influence: "Can indicate a struggle with authority or a sudden loss of reputation, but gives profound spiritual insight and potential inheritance from the father." },
        { planet: "Moon", influence: "Creates intense emotional depth, strong intuition, and an interest in the occult. The person may experience sudden emotional fluctuations or possess healing abilities." },
        { planet: "Mars", influence: "Forms a strong Mangal Dosha. The person is fearless and drawn to dangerous situations or deep research. Must be cautious of sudden accidents or surgeries." },
        { planet: "Mercury", influence: "An excellent placement for researchers, psychologists, investigators, and astrologers. The mind loves to probe deep secrets and uncover hidden truths." },
        { planet: "Jupiter", influence: "Protects longevity and brings sudden wealth through inheritance or marriage. The person has a deep, philosophical interest in the occult and life after death." },
        { planet: "Venus", influence: "Can bring wealth through the spouse (alimony, joint finances). The person seeks deep, intense, and transformative romantic and physical intimacy." },
        { planet: "Saturn", influence: "Excellent for longevity (Saturn is the Karaka of the 8th house). Brings a long life but one that may involve chronic struggles. The person is deeply serious about the mysteries of life." },
        { planet: "Rahu", influence: "Creates a fascination with the dark, taboo, or occult subjects. Can bring sudden, massive, but unstable wealth. The person must avoid shady financial dealings." },
        { planet: "Ketu", influence: "Highly spiritual placement. The person has natural psychic abilities and is detached from material wealth. They may experience sudden spiritual awakenings through loss." }
      ],
      faqs: [
        {
          question: 'Does the 8th house predict death?',
          answer: 'While it is the house of longevity (Ayu), it is more accurately the house of "transformation." It shows how you undergo massive life changes and ego-deaths, not necessarily physical death.'
        },
        {
          question: 'Is it a bad house to have planets in?',
          answer: 'Materially, it can be challenging as it brings sudden, unpredictable events and delays. However, spiritually and intellectually, it is phenomenal. It creates top-tier researchers, surgeons, astrologers, and spiritual masters.'
        },
        {
          question: 'How does it relate to wealth?',
          answer: 'The 8th house represents "unearned" or hidden wealth. This includes inheritance, lottery winnings, insurance payouts, tax returns, and the wealth of your spouse.'
        }
      ]
    }
  },
  {
    id: '9th-house',
    name: '9th House',
    sanskritName: 'Bhagya Bhava',
    title: 'The 9th House in Astrology: Fortune, Dharma & Higher Knowledge',
    description: 'Learn about the 9th House in astrology. Discover how it influences your luck, religious beliefs, philosophy, father figures, and long-distance travel.',
    significator: 'Jupiter (Guru) for wisdom, Sun (Surya) for father',
    content: {
      introduction: "The 9th House, known as Bhagya Bhava (the House of Fortune) and Dharma Bhava (the House of Righteousness), is considered the most auspicious and fortunate house (Trikona) in Vedic astrology. After surviving the transformative crises of the 8th house, the soul seeks higher meaning and divine grace in the 9th house. It represents your Dharma (righteous path), your luck, and the grace you receive in this life as a result of good karma from past lives.",
      whatItRepresents: "This house governs religion, philosophy, higher education (universities and advanced degrees), long-distance travel, and foreign cultures. Crucially, in Vedic astrology, it represents the father, your gurus, and spiritual teachers. A strong 9th house brings natural luck, a strong moral compass, a deep inclination towards spirituality and truth, and a life where obstacles seem to clear away effortlessly. It is the highest protective shield in the birth chart.",
      keyThemes: "Luck, fortune (Bhagya), Dharma, religion, philosophy, father, gurus/teachers, long-distance travel, higher education, and divine grace.",
      vedicVsWestern: "Western astrology aligns the 9th house with Sagittarius and Jupiter, focusing heavily on higher education, long-distance travel, broadcasting, and broad-minded philosophy. Vedic astrology deeply emphasizes 'Dharma' (duty/righteousness) and 'Bhagya' (luck). In Jyotish, the 9th house is also the primary house of the Father (representing his teachings and guidance), whereas Western astrology often assigns the father to the 4th or 10th houses.",
      planetsInHouse: [
        { planet: "Sun", influence: "Brings strong morals, leadership in religious or educational institutions, and a powerful father figure. The person is highly principled and seeks truth." },
        { planet: "Moon", influence: "Creates a highly imaginative and empathetic philosopher. The person loves long-distance travel and feels an emotional connection to their faith and teachers." },
        { planet: "Mars", influence: "The person acts aggressively on their beliefs. They may become a crusader for their religion or philosophy, but must avoid becoming overly dogmatic or arguing with their father." },
        { planet: "Mercury", influence: "Excellent for higher education, writing, and publishing. The person approaches religion and philosophy with logic, curiosity, and a desire to learn constantly." },
        { planet: "Jupiter", influence: "The best possible placement. Jupiter is in its own element here. Brings immense luck, divine protection, deep wisdom, and a natural inclination to teach or guide others." },
        { planet: "Venus", influence: "The person loves traveling to beautiful foreign lands and may marry someone from a different culture. They have a harmonious, loving approach to spirituality." },
        { planet: "Saturn", influence: "Faith and wisdom come slowly through hard experience. The person is highly traditional, disciplined in their religious practices, and respects ancient structures." },
        { planet: "Rahu", influence: "Creates a desire to explore foreign cultures and unconventional philosophies. The person may reject traditional religion in favor of unique, foreign, or highly individualized spiritual paths." },
        { planet: "Ketu", influence: "Brings deep, innate spiritual wisdom from past lives. The person is naturally detached from dogmatic religion and seeks direct, mystical connection with the divine." }
      ],
      faqs: [
        {
          question: 'Why is the 9th house called the house of luck?',
          answer: 'It represents the grace of the divine and the culmination of past-life good deeds. When this house is strong, the universe seems to naturally support your endeavors, bringing right opportunities at the right time.'
        },
        {
          question: 'Does it represent the father?',
          answer: 'In Vedic astrology, yes. The 9th house is the primary house of the father (Pitru Bhava), representing his teachings, his influence on your morals, and your overall relationship with him.'
        },
        {
          question: 'How does it relate to travel?',
          answer: 'While the 3rd house rules short, local trips, the 9th house rules long-distance travel, international journeys, and pilgrimages, particularly travel that broadens your horizons and perspective.'
        }
      ]
    }
  },
  {
    id: '10th-house',
    name: '10th House',
    sanskritName: 'Karma Bhava',
    title: 'The 10th House in Astrology: Career, Status & Karma',
    description: 'Explore the 10th House in astrology. Discover how it influences your career trajectory, public reputation, authority, and worldly achievements.',
    significator: 'Sun, Mercury, Jupiter, Saturn (Multiple Karakas)',
    content: {
      introduction: "The 10th House, known as Karma Bhava (the House of Action), is the highest point in the birth chart (the Midheaven). It represents the peak of your visible life, your career, and the mark you leave on the world. It is the house of action, duty, and worldly achievements. While the 4th house is your private foundation, the 10th house is how the public, society, and history will remember you.",
      whatItRepresents: "This house governs your profession, career trajectory, public reputation, status, and authority. It also dictates your relationship with the government, authority figures, and large corporations. Planets in the 10th house are highly visible to the world and strongly dictate the nature of your career. A strong 10th house brings fame, power, executive leadership, and massive professional success. It is the most powerful angular (Kendra) house.",
      keyThemes: "Career, profession, public status, reputation, fame, authority, government, executive power, and worldly karma.",
      vedicVsWestern: "Both Western and Vedic systems view the 10th house as the pinnacle of career and public life, associated with Capricorn and Saturn. Vedic astrology takes it a step further by calling it 'Karma Bhava'—the house of the actions you are destined to perform in this world. It is heavily analyzed alongside the Dashamsha (D10) divisional chart to determine precise career paths, periods of promotion, and professional downfalls.",
      planetsInHouse: [
        { planet: "Sun", influence: "Gains directional strength (Digbala) here. The ultimate placement for leadership, CEO roles, government positions, and fame. The person naturally commands respect." },
        { planet: "Moon", influence: "Career may involve the public, nurturing, food, or psychology. The person's public image is seen as caring, but career path may have many emotional fluctuations." },
        { planet: "Mars", influence: "Gains directional strength (Digbala). Brings ruthless ambition, executive power, and unparalleled drive. Excellent for military, engineering, business, and competitive fields." },
        { planet: "Mercury", influence: "Highly favorable for careers in communication, IT, writing, commerce, and accounting. The person is known for their sharp intellect and professional adaptability." },
        { planet: "Jupiter", influence: "Brings immense respect, an honorable reputation, and a career in teaching, law, finance, or advising. The person is seen as a moral and wise leader." },
        { planet: "Venus", influence: "Career involves art, beauty, fashion, entertainment, or diplomacy. The person is highly popular in their profession and creates harmonious work environments." },
        { planet: "Saturn", influence: "The natural ruler of the 10th house. Brings immense, lasting success, but only through intense hard work, delay, and discipline. Favorable for politics, heavy industry, or administration." },
        { planet: "Rahu", influence: "Creates a massive, almost obsessive drive for worldly power and status. The person can achieve sudden, astronomical fame or success, often in unconventional or modern fields." },
        { planet: "Ketu", influence: "The person feels detached from traditional career climbing. They may change jobs frequently or find ultimate success in spiritual fields, healing, or working behind the scenes." }
      ],
      faqs: [
        {
          question: 'How does the 10th house differ from the 6th house (jobs)?',
          answer: 'The 6th house is your daily grind, your service, and your interactions with coworkers. The 10th house is your overarching career trajectory, your title, and how the public views your professional status.'
        },
        {
          question: 'Which planets are best in the 10th house?',
          answer: 'The Sun and Mars gain directional strength (Digbala) here, making them incredibly powerful for achieving high status, leadership, and crushing professional obstacles.'
        },
        {
          question: 'Does an empty 10th house mean I won\'t have a career?',
          answer: 'Not at all. If the 10th house is empty, you look at the planet that rules the zodiac sign in the 10th house (the 10th Lord). Its placement and strength will dictate your career success.'
        }
      ]
    }
  },
  {
    id: '11th-house',
    name: '11th House',
    sanskritName: 'Labha Bhava',
    title: 'The 11th House in Astrology: Gains, Friends & Desires',
    description: 'Learn about the 11th House in astrology. Discover how it influences your financial gains, social networks, elder siblings, and fulfillment of ultimate desires.',
    significator: 'Jupiter (Guru)',
    content: {
      introduction: "The 11th House, known as Labha Bhava (the House of Gains), is the house of fulfillment and rewards. After you perform your worldly duties in the 10th house, the 11th house represents the paycheck, the profits, and the recognition you receive. It is considered the strongest Upachaya (growing) house, where almost all planets—benefic or malefic—yield highly positive material results over time.",
      whatItRepresents: "This house governs financial gains, business profits, regular income, large social networks, friendships, and elder siblings. Most importantly, it is the house of fulfilling your highest hopes and desires. It represents the communities you belong to and your ability to network. Any planet placed here tends to bring material gains related to its nature, making it a highly desirable placement for wealth generation.",
      keyThemes: "Income, financial gains (Labha), fulfillment of desires, elder siblings, large social networks, friendships, community, and business profits.",
      vedicVsWestern: "Western astrology associates the 11th house with Aquarius, focusing heavily on humanitarian efforts, large groups, friendships, and hopes for the future. Vedic astrology shares the focus on networks and elder siblings but heavily emphasizes 'Labha'—concrete material gains and business profits. In Jyotish, a strong 11th house is the ultimate signature for becoming wealthy and having your worldly desires fulfilled.",
      planetsInHouse: [
        { planet: "Sun", influence: "Brings powerful, authoritative friends and gains from the government or leadership roles. The person is a natural leader in their social circles." },
        { planet: "Moon", influence: "Creates a vast network of friends, particularly females. Income may fluctuate, but the person is highly popular and emotionally connected to their community." },
        { planet: "Mars", influence: "Excellent for massive financial gains through real estate, engineering, or aggressive business tactics. The person has ambitious friends but may argue with elder siblings." },
        { planet: "Mercury", influence: "Gains come through commerce, writing, networking, and IT. The person has a huge, diverse network of intellectual friends and business contacts." },
        { planet: "Jupiter", influence: "Highly auspicious for wealth. Brings steady, ethical gains, wise friends, and fulfillment of noble desires. The person is highly respected in their community." },
        { planet: "Venus", influence: "Brings gains through art, beauty, women, or luxury goods. The person has a glamorous social circle and loves attending high-society events." },
        { planet: "Saturn", influence: "Gains come slowly but surely through extreme hard work and older, mature networks. Ultimately leads to massive, stable wealth later in life." },
        { planet: "Rahu", influence: "One of the best placements for Rahu. Brings astronomical, sudden wealth, often through foreign networks, technology, or unconventional means. Highly ambitious." },
        { planet: "Ketu", influence: "The person is detached from their social circle and material gains. They may experience fluctuating income but possess a highly spiritual network of friends." }
      ],
      faqs: [
        {
          question: 'Are malefic planets really good in the 11th house?',
          answer: 'Yes! Malefics like Saturn, Rahu, and Mars do exceptionally well in the 11th house. They provide the relentless ambition, strategy, and drive needed to amass massive wealth and fulfill desires.'
        },
        {
          question: 'How is it different from the 2nd house of wealth?',
          answer: 'The 11th house is the *flow* of income—your daily paycheck, business profits, or ROI. The 2nd house is what you actually *save* and accumulate in your bank account after expenses.'
        },
        {
          question: 'What does the 11th house say about siblings?',
          answer: 'While the 3rd house represents younger siblings, the 11th house specifically represents elder siblings and your relationship with them.'
        }
      ]
    }
  },
  {
    id: '12th-house',
    name: '12th House',
    sanskritName: 'Vyaya Bhava',
    title: 'The 12th House in Astrology: Endings, Losses & Liberation',
    description: 'Explore the 12th House in astrology. Discover how it influences expenses, isolation, foreign lands, sleep, subconscious, and spiritual liberation (Moksha).',
    significator: 'Saturn (Shani) for sorrow, Ketu for liberation',
    content: {
      introduction: "The 12th House, known as Vyaya Bhava (the House of Expenditure), is the final house of the zodiac, completing the soul's journey. It is a house of endings, dissolution, and letting go. While it is considered a Dusthana (difficult house) in terms of material success, it is the ultimate and most profound house for spiritual growth and liberation. It represents the space where the ego dissolves back into the infinite.",
      whatItRepresents: "This house governs expenses, losses, isolation (hospitals, ashrams, prisons, monasteries), foreign lands, and the subconscious mind. It also represents sleep, dreams, bed pleasures, and Moksha (final spiritual liberation). Planets here tend to lose their material strength, directing their energy inward or toward foreign/unseen realms. A prominent 12th house often takes a person far away from their birthplace or pulls them into deep spiritual or charitable work.",
      keyThemes: "Losses, expenses, foreign travel, isolation, sleep, dreams, subconscious, hospitals, ashrams, hidden enemies, and Moksha (spiritual liberation).",
      vedicVsWestern: "Western astrology links the 12th house with Pisces and Neptune, focusing on the subconscious, dreams, hidden enemies, and psychological undoing. Vedic astrology shares this but strongly emphasizes 'Vyaya' (financial and physical expenses/losses) and 'Moksha' (enlightenment). In the modern globalized world, Vedic astrologers also heavily rely on the 12th house to predict foreign settlement, working for multinational corporations, and importing/exporting.",
      planetsInHouse: [
        { planet: "Sun", influence: "Can indicate a loss of ego or struggles with the father. The person may find success in foreign lands or working behind the scenes in government or hospitals." },
        { planet: "Moon", influence: "Creates a highly imaginative, deeply subconscious mind. The person needs isolation to recharge emotionally. Can indicate vivid dreams or a mother who lived far away." },
        { planet: "Mars", influence: "Forms a mild Mangal Dosha. The person may have hidden anger or sleep issues. High energy is spent on foreign travels, martial arts, or charitable work." },
        { planet: "Mercury", influence: "The mind is highly active at night, causing overthinking or insomnia. Excellent for deep research, coding, or learning foreign languages." },
        { planet: "Jupiter", influence: "Brings immense spiritual protection and a charitable nature. The person spends money on good causes and has a deep understanding of philosophy and the afterlife." },
        { planet: "Venus", influence: "The only planet that truly thrives in the 12th house. Brings luxurious sleep, bed pleasures, success in foreign lands, and a love for high-end comforts." },
        { planet: "Saturn", influence: "The person may experience feelings of isolation or depression. Success comes in foreign lands or through solitary, disciplined work. Sleep may be restricted." },
        { planet: "Rahu", influence: "Creates an intense desire to travel abroad or explore altered states of consciousness. The person may have unusual sleep patterns or secret expenses." },
        { planet: "Ketu", influence: "The ultimate placement for Moksha. The person has vivid spiritual dreams, deep intuition, and a natural detachment from the material world. Highly mystical." }
      ],
      faqs: [
        {
          question: 'Does the 12th house mean I will be poor?',
          answer: 'Not necessarily. It means your expenses might be high. In modern times, a strong 12th house is actually excellent for generating wealth through multinational business, foreign clients, or importing/exporting.'
        },
        {
          question: 'Why is it the house of Moksha?',
          answer: 'Because it represents the final dissolution of the ego (which was born in the 1st house). It is where the soul learns to detach from material desires, surrender control, and seek ultimate spiritual liberation.'
        },
        {
          question: 'Why is Venus good in the 12th house?',
          answer: 'The 12th house rules "bed pleasures" and luxurious isolation. Venus naturally signifies comfort, luxury, and romance, making it uniquely capable of extracting worldly pleasure from this otherwise spiritual house.'
        }
      ]
    }
  }
];

// Read existing data
let existingContent = fs.readFileSync('src/data/houses.ts', 'utf8');

// The file currently has `export const houses: HouseData[] = [ ... ];`
// We need to parse it or just replace the array.
// Wait, we can just rebuild the whole file!
// Let's import the part 1 from the actual file and merge them.
// But we are in a script. It's safer to just require the compiled js or just string manipulation.
// Actually, since this is a script, I can just read the first part from housesEnDataPart1 and write them all together.
// Wait! I already wrote Part 1 to houses.ts, so houses.ts only has Part 1 right now!

const dataRaw = fs.readFileSync('src/data/houses.ts', 'utf8');
const part1Match = dataRaw.match(/export const houses: HouseData\[\] = (\[.*\]);/s);
if (part1Match) {
  const part1Array = eval(part1Match[1]);
  const fullArray = [...part1Array, ...housesEnDataPart2];
  
  const finalContent = `export interface HouseData {
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

export const houses: HouseData[] = ${JSON.stringify(fullArray, null, 2)};
`;
  fs.writeFileSync('src/data/houses.ts', finalContent);
  console.log('Successfully merged and wrote houses.ts Part 2');
} else {
  console.error("Could not find part 1 array");
}
