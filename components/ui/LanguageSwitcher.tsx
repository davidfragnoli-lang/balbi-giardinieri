'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { locales, type Locale } from '@/i18n/request';

const languageNames: Record<Locale, string> = {
  it: '🇮🇹 IT',
  fr: '🇫🇷 FR',
  de: '🇩🇪 DE',
  en: '🇬🇧 EN',
};

export default function LanguageSwitcher() {
  const t = useTranslations('languageSwitcher');
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Extract current locale from pathname
  const currentLocale = (pathname.split('/')[1] as Locale) || 'it';

  const handleLocaleChange = (locale: Locale) => {
    // Navigate to new locale
    const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPathname);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-forest-green hover:text-terracotta transition-colors font-body font-medium"
        aria-label={t('label')}
      >
        <span>{languageNames[currentLocale]}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg border border-gray-100 rounded-lg z-20">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-cream transition-colors font-body first:rounded-t-lg last:rounded-b-lg ${
                  locale === currentLocale 
                    ? 'text-terracotta font-medium bg-cream' 
                    : 'text-forest-green'
                }`}
              >
                {languageNames[locale]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}