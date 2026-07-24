// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

const signs = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces'];
const generatedPages = [];
for (const s1 of signs) {
  for (const s2 of signs) {
    if (s1 !== s2) generatedPages.push(`https://freeastrologyai.com/compatibility/${s1}-${s2}`);
  }
}

// Add the last 30 days of horoscope pages
const today = new Date();
for (let i = 0; i < 30; i++) {
  const date = new Date(today);
  date.setDate(date.getDate() - i);
  const dateStr = date.toISOString().split('T')[0];
  
  // Hub pages
  generatedPages.push(`https://freeastrologyai.com/blog/${dateStr}`);
  generatedPages.push(`https://freeastrologyai.com/hi/blog/${dateStr}`);
  
  for (const sign of signs) {
    generatedPages.push(`https://freeastrologyai.com/horoscope/${sign}/${dateStr}`);
    generatedPages.push(`https://freeastrologyai.com/hi/rashifal/${sign}/${dateStr}`);
  }
}

// Add Weekly, Monthly, and Yearly horoscope pages
for (const sign of signs) {
  generatedPages.push(`https://freeastrologyai.com/horoscope/${sign}/weekly`);
  generatedPages.push(`https://freeastrologyai.com/hi/horoscope/${sign}/weekly`);
  
  generatedPages.push(`https://freeastrologyai.com/horoscope/${sign}/monthly`);
  generatedPages.push(`https://freeastrologyai.com/hi/horoscope/${sign}/monthly`);
  
  generatedPages.push(`https://freeastrologyai.com/horoscope/${sign}/yearly`);
  generatedPages.push(`https://freeastrologyai.com/hi/horoscope/${sign}/yearly`);
}

// https://astro.build/config
export default defineConfig({
  output: 'server',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  site: 'https://freeastrologyai.com',
  integrations: [
    sitemap({
      customPages: generatedPages,
      filter: (page) => !page.includes('/dashboard') && !page.includes('/auth') && !page.includes('/api'),
    })
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['astronomy-engine']
    }
  },
});
