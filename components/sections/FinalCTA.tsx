'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FinalCTA() {
  const t = useTranslations('ctaFinal');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="w-full bg-forest-green py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <h2 className="font-heading text-h2-mobile md:text-h2-desktop text-cream mb-6">
            {t('title')}
          </h2>

          {/* Subtitle */}
          <p className="font-body text-body-mobile md:text-body-desktop text-cream/90 mb-10 leading-relaxed">
            {t('subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA - Click to call */}
            <motion.a
              href="tel:+41793535701"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-terracotta text-cream px-8 py-4 rounded-lg font-body font-semibold text-cta hover:bg-terracotta/90 transition-all duration-300 shadow-lg hover:shadow-card-hover inline-flex items-center gap-3 min-w-fit"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              {t('ctaPrimary')}
            </motion.a>

            {/* Secondary CTA - Email */}
            <motion.a
              href="mailto:info@balbigiardini.ch"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-cream text-cream px-8 py-4 rounded-lg font-body font-semibold text-cta hover:bg-cream hover:text-forest-green transition-all duration-300 inline-flex items-center gap-3 min-w-fit"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              {t('ctaSecondary')}
            </motion.a>
          </div>

          {/* Decorative element */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-1 bg-terracotta mx-auto rounded-full mt-8"
          />
        </div>
      </motion.div>
    </section>
  );
}