'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const t = useTranslations('about');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const teamMembers = [
    {
      key: 'giuseppe',
      image: '/placeholder-giuseppe.jpg', // Placeholder for now
    },
    {
      key: 'greta',
      image: '/placeholder-greta.jpg', // Placeholder for now
    },
    {
      key: 'andrea',
      image: '/placeholder-andrea.jpg', // Placeholder for now
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Text Content - 60% */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h2 className="font-heading text-h2-mobile md:text-h2-desktop text-forest-green mb-8">
                {t('title')}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="prose prose-lg max-w-none"
            >
              <p className="font-body text-body-desktop text-text-dark leading-relaxed mb-6">
                {t('story')}
              </p>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white/70 backdrop-blur border-l-4 border-terracotta p-6 rounded-r-lg shadow-sm"
            >
              <blockquote className="font-body text-lg text-forest-green italic">
                "{t('quote')}"
              </blockquote>
            </motion.div>
          </div>

          {/* Photo - 40% */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative aspect-[4/5] bg-gradient-to-br from-leaf-green/20 to-forest-green/30 rounded-2xl shadow-lg"
            >
              {/* Placeholder for garden photo */}
              <div className="absolute inset-0 flex items-center justify-center text-forest-green/50 font-body">
                <span>Photo jardin spectaculaire</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Team Members */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="font-heading text-h3-mobile md:text-h3-desktop text-forest-green">
              Il nostro team
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.key}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Team Member Photo Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-cream to-stone-gray/20 rounded-xl mb-4 flex items-center justify-center text-stone-gray">
                  <span className="font-body text-sm">Photo {t(`team.${member.key}.name`)}</span>
                </div>

                <div className="text-center">
                  <h4 className="font-heading text-xl text-forest-green font-semibold mb-2">
                    {t(`team.${member.key}.name`)}
                  </h4>
                  <p className="font-body text-terracotta font-medium text-sm uppercase tracking-wide">
                    {t(`team.${member.key}.role`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}