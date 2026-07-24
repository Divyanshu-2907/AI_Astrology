import type { APIRoute } from 'astro';
import { getCompatibility } from '../../lib/compatibility';

export const GET: APIRoute = async ({ request, url }) => {
    const signs = url.searchParams.get('signs'); // e.g. 'aries-leo'
    const lang = url.searchParams.get('lang') || 'en';
    
    if (!signs) {
        return new Response('Missing signs parameter', { status: 400 });
    }
    
    const parts = signs.split('-');
    if (parts.length !== 2) {
        return new Response('Invalid signs format', { status: 400 });
    }
    
    const sign1 = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
    const sign2 = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
    
    const result = getCompatibility(sign1, sign2);
    
    const title = lang === 'hi' ? `${result.hiSign1} और ${result.hiSign2} की अनुकूलता` : `${sign1} & ${sign2} Compatibility`;
    const score = result.overall;
    
    // Generate a simple SVG
    const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
        <!-- Background -->
        <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#0f172a" />
                <stop offset="100%" stop-color="#312e81" />
            </linearGradient>
            <linearGradient id="primary" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#818cf8" />
                <stop offset="100%" stop-color="#4f46e5" />
            </linearGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#bg)" />
        
        <!-- Stars/Sparkles -->
        <circle cx="200" cy="150" r="2" fill="#fff" opacity="0.5"/>
        <circle cx="1000" cy="100" r="3" fill="#fff" opacity="0.3"/>
        <circle cx="850" cy="500" r="2" fill="#fff" opacity="0.6"/>
        <circle cx="150" cy="450" r="4" fill="#fff" opacity="0.2"/>
        <circle cx="600" cy="550" r="2" fill="#fff" opacity="0.4"/>
        
        <!-- Card -->
        <rect x="150" y="100" width="900" height="430" rx="30" fill="#1e293b" opacity="0.8" stroke="url(#primary)" stroke-width="4"/>
        
        <!-- Texts -->
        <text x="600" y="220" font-family="serif" font-size="64" fill="#fff" font-weight="bold" text-anchor="middle">${title}</text>
        
        <text x="600" y="320" font-family="sans-serif" font-size="32" fill="#94a3b8" text-anchor="middle">Cosmic Match Score</text>
        
        <!-- Score Circle -->
        <circle cx="600" cy="420" r="70" fill="url(#primary)" />
        <text x="600" y="445" font-family="sans-serif" font-size="64" fill="#fff" font-weight="bold" text-anchor="middle">${score}%</text>
        
        <!-- Brand -->
        <text x="600" y="580" font-family="sans-serif" font-size="24" fill="#64748b" text-anchor="middle" letter-spacing="4">AI Astrology</text>
    </svg>
    `;

    return new Response(svg, {
        status: 200,
        headers: {
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'public, max-age=31536000, immutable'
        }
    });
};
