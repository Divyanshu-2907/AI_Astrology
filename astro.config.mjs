// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

const signs = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces'];
const compatibilityPairs = [];
for (const s1 of signs) {
  for (const s2 of signs) {
    if (s1 !== s2) compatibilityPairs.push(`https://freeastrologyai.com/compatibility/${s1}-${s2}`);
  }
}

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  site: 'https://freeastrologyai.com',
  integrations: [
    sitemap({
      customPages: compatibilityPairs,
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
  },
});
