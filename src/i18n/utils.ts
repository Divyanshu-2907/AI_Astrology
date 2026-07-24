import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  console.log('DEBUG getLangFromUrl:', url.pathname, '->', lang);
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getRelativeLocaleUrl(lang: keyof typeof ui, path: string) {
  // If the target language is English, remove the /hi prefix (if we're coming from Hindi)
  if (lang === defaultLang) {
    return path;
  }
  // Otherwise prefix with the language
  // Ensure we don't end up with // path
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${normalizedPath === '/' ? '' : normalizedPath}`;
}
