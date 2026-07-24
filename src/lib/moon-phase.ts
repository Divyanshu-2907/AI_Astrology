// Basic Moon Phase logic

export const getMoonPhase = (date: Date = new Date()) => {
    // Simplified calculation for demonstration
    // In production, use astronomia ephemeris
    
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    
    if (month < 3) {
        year--;
        month += 12;
    }
    
    ++month;
    let c = 365.25 * year;
    let e = 30.6 * month;
    let jd = c + e + day - 694039.09; // jd is total days elapsed
    jd /= 29.5305882; // divide by the moon cycle
    let b = Math.floor(jd); // int(jd) -> b, take integer part of jd
    jd -= b; // subtract integer part to leave fractional part of original jd
    let phase = Math.round(jd * 8); // scale fraction from 0-8 and round
    
    if (phase >= 8) phase = 0; // 0 and 8 are the same so turn 8 into 0

    const phases = [
        { name: "New Moon", icon: "🌑", description: "A time for new beginnings and setting intentions." },
        { name: "Waxing Crescent", icon: "🌒", description: "Focus on your goals and take the first steps." },
        { name: "First Quarter", icon: "🌓", description: "Challenges may arise. Stay determined." },
        { name: "Waxing Gibbous", icon: "🌔", description: "Refine your plans and pay attention to details." },
        { name: "Full Moon", icon: "🌕", description: "A time of culmination, release, and high energy." },
        { name: "Waning Gibbous", icon: "🌖", description: "Express gratitude and share your wisdom." },
        { name: "Last Quarter", icon: "🌗", description: "Let go of what no longer serves you." },
        { name: "Waning Crescent", icon: "🌘", description: "Rest, reflect, and prepare for the new cycle." }
    ];
    
    const illumination = Math.abs(Math.sin(jd * Math.PI)) * 100;

    return {
        ...phases[phase],
        illumination: illumination.toFixed(1),
        daysUntilNextFull: ((1 - jd) * 29.53).toFixed(0)
    };
};
