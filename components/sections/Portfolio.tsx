'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Portfolio() {
  const t = useTranslations('portfolio');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Portfolio items with different heights for masonry effect
  const portfolioItems = [
    { id: 1, height: 'aspect-[4/5]', gradient: 'from-cream to-leaf-green' },
    { id: 2, height: 'aspect-square', gradient: 'from-leaf-green to-forest-green' },
    { id: 3, height: 'aspect-[3/4]', gradient: 'from-forest-green to-terracotta' },
    { id: 4, height: 'aspect-[4/3]', gradient: 'from-terracotta to-cream' },
    { id: 5, height: 'aspect-[5/4]', gradient: 'from-cream via-leaf-green to-forest-green' },
    { id: 6, height: 'aspect-square', gradient: 'from-forest-green to-cream' },
    { id: 7, height: 'aspect-[4/5]', gradient: 'from-leaf-green to-terracotta' },
    { id: 8, height: 'aspect-[3/4]', gradient: 'from-terracotta to-leaf-green' },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-h2-mobile md:text-h2-desktop text-forest-green mb-4">
            {t('title')}
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto rounded-full"></div>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="break-inside-avoid group cursor-pointer"
            >
              <div 
                className={`${item.height} bg-gradient-to-br ${item.gradient} rounded-2xl shadow-lg relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Hover overlay with project info */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="font-heading text-xl mb-2">
                      Progetto {item.id}
                    </h3>
                    <p className="font-body text-sm opacity-90">
                      Trasformazione completa del giardino
                    </p>
                  </div>
                </div>

                {/* Corner badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1">
                  <span className="font-body text-xs font-medium text-forest-green">
                    2024
                  </span>
                </div>

                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <div className="text-center text-white">
                    <div className="text-2xl mb-2">🌿</div>
                    <span className="font-body text-sm">
                      Photo progetto {item.id}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="bg-terracotta text-cream px-8 py-4 rounded-lg font-body font-medium cta-text hover:bg-opacity-90 transition-all duration-300 hover:shadow-card-hover transform hover:-translate-y-1">
            {t('viewAll')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}