import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        {/* Temporary test content */}
        <h1 className="font-heading text-4xl text-forest-green mb-4">
          {t('hero.tagline')}
        </h1>
        <p className="font-body text-stone-gray text-lg mb-8">
          {t('hero.subtitle')}
        </p>
        <div className="space-y-4">
          <button className="bg-terracotta text-cream px-6 py-3 rounded-lg font-medium cta-text hover:bg-opacity-90 transition-colors">
            {t('hero.ctaPrimary')}
          </button>
          <button className="border border-cream text-forest-green px-6 py-3 rounded-lg font-medium cta-text hover:bg-cream transition-colors ml-4">
            {t('hero.ctaSecondary')}
          </button>
        </div>
        
        <div className="mt-12">
          <h2 className="font-heading text-2xl text-forest-green mb-4">
            {t('about.title')}
          </h2>
          <p className="font-body text-text-dark leading-relaxed">
            {t('about.story')}
          </p>
        </div>
      </main>
    </div>
  );
}
