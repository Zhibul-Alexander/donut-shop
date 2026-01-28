'use client';

import { useLocaleContext } from '@/contexts/LocaleContext';
import { Locale, defaultLocale } from '@/site.config';

export function useLocale() {
  return useLocaleContext();
}

// Translation helper
export function t<T extends Record<Locale, string>>(
  translations: T,
  locale: Locale
): string {
  return translations[locale] || translations[defaultLocale];
}
