import { NodeJHora } from '@node-jhora/core';

async function test() {
    try {
        const result = await NodeJHora.calculate(new Date('1995-10-25T14:30:00Z'), { latitude: 28.6139, longitude: 77.2090 }, 'Lahiri');
        console.log("Ascendant:", result.ascendant);
        console.log("Planets:");
        result.planets.forEach(p => console.log(p.name, p.longitude.toFixed(2), p.isRetrograde));
    } catch(e) {
        console.error(e);
    }
}
test();
