import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export const locales = ['it', 'fr', 'de', 'en'] as const;
export type Locale = typeof locales[number];

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;
  
  // Validate if the cookie locale is supported
  const locale = (cookieLocale && locales.includes(cookieLocale as Locale)) 
    ? (cookieLocale as Locale) 
    : 'it'; // Default to Italian (Tessin)

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});