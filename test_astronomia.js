import { julian, planetposition, moonposition, earth, solar } from 'astronomia';

async function test() {
    const date = new Date('1995-10-25T14:30:00Z');
    const jd = julian.CalendarGregorianToJD(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate() + date.getUTCHours()/24 + date.getUTCMinutes()/1440);
    console.log("Julian Day:", jd);
    
    // Moon
    const moonGeo = new moonposition.position(jd);
    console.log("Moon Longitude (Tropical):", moonGeo.lon * 180 / Math.PI);
    
    // Sun
    const sunApparent = solar.apparentLongitude(jd);
    console.log("Sun Longitude (Tropical):", sunApparent * 180 / Math.PI);
}
test();
