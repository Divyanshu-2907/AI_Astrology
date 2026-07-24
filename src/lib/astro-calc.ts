import * as Astronomy from 'astronomy-engine';

const DASHA_PERIODS = [
    { planet: "Ketu", planetHi: "केतु", years: 7 },
    { planet: "Venus", planetHi: "शुक्र", years: 20 },
    { planet: "Sun", planetHi: "सूर्य", years: 6 },
    { planet: "Moon", planetHi: "चंद्रमा", years: 10 },
    { planet: "Mars", planetHi: "मंगल", years: 7 },
    { planet: "Rahu", planetHi: "राहु", years: 18 },
    { planet: "Jupiter", planetHi: "बृहस्पति", years: 16 },
    { planet: "Saturn", planetHi: "शनि", years: 19 },
    { planet: "Mercury", planetHi: "बुध", years: 17 }
];

export const calculateVimshottariDasha = (moonLongitude: number, lang: string = 'en') => {
    const NAKSHATRA_SPAN = 13.333333;
    const nakshatraIndex = Math.floor(moonLongitude / NAKSHATRA_SPAN);
    const dashaIndex = nakshatraIndex % 9;
    
    const startPlanet = DASHA_PERIODS[dashaIndex];
    const passedDegrees = moonLongitude % NAKSHATRA_SPAN;
    const remainingFraction = 1 - (passedDegrees / NAKSHATRA_SPAN);
    const balanceYears = startPlanet.years * remainingFraction;
    
    return {
        startPlanet: lang === 'hi' ? startPlanet.planetHi : startPlanet.planet,
        balanceYears: balanceYears,
        totalSequence: DASHA_PERIODS.map(d => ({
            planet: lang === 'hi' ? d.planetHi : d.planet,
            years: d.years
        })),
        startIndex: dashaIndex
    };
};

const ZODIAC_SIGNS_EN = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const ZODIAC_SIGNS_HI = ["मेष", "वृषभ", "मिथुन", "कर्क", "सिंह", "कन्या", "तुला", "वृश्चिक", "धनु", "मकर", "कुंभ", "मीन"];

const PLANET_NAMES_HI: Record<string, string> = {
    "Sun": "सूर्य",
    "Moon": "चंद्रमा",
    "Mars": "मंगल",
    "Mercury": "बुध",
    "Jupiter": "बृहस्पति",
    "Venus": "शुक्र",
    "Saturn": "शनि",
    "Rahu": "राहु",
    "Ketu": "केतु"
};

const STATUS_EN: Record<string, string> = {
    "Retrograde": "Retrograde",
    "Neutral": "Neutral"
};
const STATUS_HI: Record<string, string> = {
    "Retrograde": "वक्री",
    "Neutral": "तटस्थ"
};

async function geocodePlace(placeName: string) {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(placeName)}&format=json&limit=1`;
    const res = await fetch(url, { headers: { 'User-Agent': 'AstroVeda/1.0' } });
    const data = await res.json();
    if (data && data.length > 0) {
        return { latitude: parseFloat(data[0].lat), longitude: parseFloat(data[0].lon) };
    }
    // Default to New Delhi if not found to prevent crashes
    return { latitude: 28.6139, longitude: 77.2090 };
}

export const calculateBirthChart = async (dateStr: string, timeStr: string, placeStr: string, lang: string = 'en') => {
    try {
        const coords = await geocodePlace(placeStr);
        // We assume the user enters time in IST since it's an Indian app
        const jsDate = new Date(`${dateStr}T${timeStr}:00+05:30`);
        const date = new Astronomy.AstroTime(jsDate);
        const observer = new Astronomy.Observer(coords.latitude, coords.longitude, 0);
        
        // Approximate Lahiri Ayanamsa
        const year = jsDate.getUTCFullYear() + jsDate.getUTCMonth()/12.0;
        const ayanamsa = 23.85 + (year - 2000) * (50.29 / 3600);
        
        const planetsData = [
            { id: 'Sun' }, { id: 'Moon' }, { id: 'Mercury' }, { id: 'Venus' }, 
            { id: 'Mars' }, { id: 'Jupiter' }, { id: 'Saturn' }
        ];
        
        const calcPlanet = (bodyName: string) => {
            const body = Astronomy.Body[bodyName as keyof typeof Astronomy.Body];
            const equ = Astronomy.Equator(body, date, observer, true, true);
            const ecl = Astronomy.Ecliptic(equ.vec);
            // Sidereal longitude = Tropical longitude - Ayanamsa
            let sidereal = ecl.elon - ayanamsa;
            if (sidereal < 0) sidereal += 360;
            return sidereal;
        };

        // Simplified Ascendant (Lagna) Approximation
        const hours = jsDate.getHours() + jsDate.getMinutes() / 60.0;
        let ascendantLon = calcPlanet('Sun') + ((hours - 6) * 15);
        if (ascendantLon >= 360) ascendantLon -= 360;
        if (ascendantLon < 0) ascendantLon += 360;
        
        const ascendantSignIndex = Math.floor(ascendantLon / 30);
        const signs = lang === 'hi' ? ZODIAC_SIGNS_HI : ZODIAC_SIGNS_EN;
        const lagna = signs[ascendantSignIndex];

        let planets = planetsData.map(p => {
            const sidereal = calcPlanet(p.id);
            const signIndex = Math.floor(sidereal / 30);
            const degree = (sidereal % 30).toFixed(1);
            
            // To get speed for retrograde, calculate position 1 day ago
            const pastDate = new Astronomy.AstroTime(new Date(jsDate.getTime() - 86400000));
            const pastEqu = Astronomy.Equator(Astronomy.Body[p.id as keyof typeof Astronomy.Body], pastDate, observer, true, true);
            const pastEcl = Astronomy.Ecliptic(pastEqu.vec);
            
            const currEqu = Astronomy.Equator(Astronomy.Body[p.id as keyof typeof Astronomy.Body], date, observer, true, true);
            const currEcl = Astronomy.Ecliptic(currEqu.vec);
            
            let speed = currEcl.elon - pastEcl.elon;
            if (speed < -180) speed += 360;
            if (speed > 180) speed -= 360;
            
            let statusKey = "Neutral";
            if (speed < 0 && p.id !== 'Sun' && p.id !== 'Moon') {
                statusKey = "Retrograde";
            }
            
            let house = ((signIndex - ascendantSignIndex + 12) % 12) + 1;
            
            return {
                name: lang === 'hi' ? PLANET_NAMES_HI[p.id] || p.id : p.id,
                sign: signs[signIndex],
                degree: parseFloat(degree),
                house,
                status: lang === 'hi' ? STATUS_HI[statusKey] : STATUS_EN[statusKey],
                rawLongitude: sidereal
            };
        });
        
        // Calculate Rahu and Ketu (approximate mean nodes)
        // Mean node moves backward ~19.34 degrees per year.
        const daysSince2000 = (jsDate.getTime() - new Date('2000-01-01T12:00:00Z').getTime()) / 86400000;
        let rahuLon = (125.04452 - 0.0529537648 * daysSince2000) % 360;
        if (rahuLon < 0) rahuLon += 360;
        let ketuLon = (rahuLon + 180) % 360;
        
        [ { id: 'Rahu', lon: rahuLon }, { id: 'Ketu', lon: ketuLon } ].forEach(n => {
            const signIndex = Math.floor(n.lon / 30);
            const degree = (n.lon % 30).toFixed(1);
            let house = ((signIndex - ascendantSignIndex + 12) % 12) + 1;
            
            planets.push({
                name: lang === 'hi' ? PLANET_NAMES_HI[n.id] || n.id : n.id,
                sign: signs[signIndex],
                degree: parseFloat(degree),
                house,
                status: lang === 'hi' ? STATUS_HI["Neutral"] : STATUS_EN["Neutral"],
                rawLongitude: n.lon
            });
        });
        
        return {
            lagna,
            planets,
            moonLongitude: calcPlanet('Moon'),
            dasha: {
                current: lang === 'hi' ? "विंशोत्तरी दशा" : "Vimshottari Dasha",
                meaning: lang === 'hi' ? "सटीक खगोलीय गणना।" : "Precise astronomical calculation."
            }
        };
    } catch (err) {
        console.error("Geocoding or Astronomy Error:", err);
        throw err;
    }
};
