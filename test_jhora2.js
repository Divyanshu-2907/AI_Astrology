import { NodeJHora } from '@node-jhora/core';

const ZODIAC_SIGNS_EN = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

async function geocodePlace(placeName) {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(placeName)}&format=json&limit=1`;
    const res = await fetch(url, { headers: { 'User-Agent': 'AstroVeda/1.0' } });
    const data = await res.json();
    if (data && data.length > 0) {
        return { latitude: parseFloat(data[0].lat), longitude: parseFloat(data[0].lon) };
    }
    throw new Error("Could not find coordinates");
}

async function test() {
    try {
        const coords = await geocodePlace("New Delhi, India");
        const jsDate = new Date(`1995-10-25T14:30:00+05:30`);
        const result = await NodeJHora.calculate(jsDate, coords, 'Lahiri');
        
        const ascendantSignIndex = Math.floor(result.ascendant / 30);
        console.log("Ascendant Sign:", ZODIAC_SIGNS_EN[ascendantSignIndex]);
        
        const mappedPlanets = result.planets.map(p => {
            const signIndex = Math.floor(p.longitude / 30);
            const degree = (p.longitude % 30).toFixed(1);
            let house = ((signIndex - ascendantSignIndex + 12) % 12) + 1;
            
            let status = "Neutral";
            if (p.speed < 0 && p.name !== 'Rahu' && p.name !== 'Ketu') {
                status = "Retrograde";
            }
            
            return {
                name: p.name,
                sign: ZODIAC_SIGNS_EN[signIndex],
                degree: parseFloat(degree),
                house,
                status
            };
        });
        
        console.log(mappedPlanets);
    } catch(e) {
        console.error(e);
    }
}
test();
