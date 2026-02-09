'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('hero');

  const handleCallClick = () => {
    window.open('tel:+41793535701', '_self');
  };

  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background - Placeholder gradient for now */}
      <div className="absolute inset-0 bg-gradient-to-br from-leaf-green/20 via-cream to-forest-green/30" />
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Left-aligned content for asymmetric premium look */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6"
          >
            {/* Tagline */}
            <h1 className="font-heading text-h1-mobile md:text-h1-desktop text-forest-green font-bold leading-tight">
              {t('tagline')}
            </h1>

            {/* Subtitle */}
            <p className="font-body text-lg md:text-xl text-text-dark max-w-2xl leading-relaxed">
              {t('subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Primary CTA */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-terracotta text-cream px-8 py-4 rounded-lg font-body font-medium text-cta hover:bg-opacity-90 transition-all duration-300 hover:shadow-card-hover transform hover:-translate-y-1"
              >
                {t('ctaPrimary')}
              </motion.button>

              {/* Secondary CTA - Call button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                onClick={handleCallClick}
                className="border-2 border-[#C67A4B] bg-transparent backdrop-blur text-[#C67A4B] px-8 py-4 rounded-lg font-body font-medium text-cta hover:bg-[#C67A4B] hover:text-cream transition-all duration-300 hover:shadow-card-hover transform hover:-translate-y-1"
              >
                {t('ctaSecondary')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          onClick={handleScrollDown}
          className="flex flex-col items-center space-y-2 text-forest-green hover:text-terracotta transition-colors group"
          aria-label="Scroll down"
        >
          <span className="font-body text-sm font-medium opacity-80">{t('scrollDown')}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-current rounded-full p-1"
          >
            <div className="w-1 h-3 bg-current rounded-full mx-auto group-hover:bg-terracotta transition-colors" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}