'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { motion } from 'framer-motion';

export default function Footer() {
  const t = useTranslations();

  const navigationLinks = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.projects'), href: '#portfolio' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <footer className="bg-forest-green text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Slogan */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="font-heading text-h3-mobile md:text-h3-desktop text-cream mb-2">
                Balbi Giardini
              </h3>
              <p className="font-body text-cream/80 text-sm">
                {t('footer.slogan')}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg text-cream mb-4">
              Navigazione
            </h4>
            <nav className="space-y-2">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-body text-cream/70 hover:text-cream transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg text-cream mb-4">
              Contatti
            </h4>
            <div className="space-y-2">
              <p className="font-body text-cream/80 text-sm">
                Balbi Giardini Sagl
              </p>
              <a 
                href="tel:+41793535701"
                className="block font-body text-cream/70 hover:text-cream transition-colors duration-300 text-sm"
              >
                +41 079 353 57 01
              </a>
              <a 
                href="mailto:info@balbigiardini.ch"
                className="block font-body text-cream/70 hover:text-cream transition-colors duration-300 text-sm"
              >
                info@balbigiardini.ch
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="font-body text-cream/60 text-sm text-center md:text-left">
            {t('footer.copyright')}
          </p>

          {/* Language Switcher */}
          <div className="flex items-center gap-4">
            <span className="font-body text-cream/60 text-sm">
              {t('languageSwitcher.label')}:
            </span>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 bg-terracotta text-cream p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          aria-label={t('footer.backToTop')}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/>
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}