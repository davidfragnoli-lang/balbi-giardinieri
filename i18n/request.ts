import { getRequestConfig } from 'next-intl/server';

export const locales = ['it', 'fr', 'de', 'en'] as const;
export type Locale = typeof locales[number];

export default getRequestConfig(async ({ requestLocale }) => {
  // This can either be defined statically at the top level if the locale is
  // read from a user setting, read from the `Accept-Language` header, ...
  let locale = await requestLocale;
  
  // Ensure the locale is supported
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'it'; // default to Italian
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});