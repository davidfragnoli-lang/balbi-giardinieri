'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
  const t = useTranslations('services');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const mainServices = [
    {
      key: 'lawnMaintenance',
      icon: '🌱',
      image: '/placeholder-lawn.jpg',
    },
    {
      key: 'pruningCutting',
      icon: '✂️',
      image: '/placeholder-pruning.jpg',
    },
    {
      key: 'plantTreatments',
      icon: '🌿',
      image: '/placeholder-treatments.jpg',
    },
    {
      key: 'gardenPreparation',
      icon: '🥕',
      image: '/placeholder-garden.jpg',
    },
    {
      key: 'flowersPlants',
      icon: '🌸',
      image: '/placeholder-flowers.jpg',
    },
    {
      key: 'transportWaste',
      icon: '🚛',
      image: '/placeholder-transport.jpg',
    },
  ];

  const onDemandServices = [
    {
      key: 'gardenDesign',
      icon: '📐',
    },
    {
      key: 'customServices',
      icon: '🔧',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-h2-mobile md:text-h2-desktop text-forest-green mb-4">
            {t('title')}
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {mainServices.map((service) => (
            <motion.div
              key={service.key}
              variants={cardVariants}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              {/* Service Image */}
              <div className="aspect-video bg-gradient-to-br from-leaf-green/20 to-cream relative overflow-hidden">
                {/* Placeholder for service photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{service.icon}</div>
                    <span className="text-stone-gray font-body text-sm">
                      Photo {t(`${service.key}.title`)}
                    </span>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-terracotta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl text-forest-green mb-3 group-hover:text-terracotta transition-colors">
                  {t(`${service.key}.title`)}
                </h3>
                <p className="font-body text-stone-gray leading-relaxed">
                  {t(`${service.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* On-Demand Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-cream rounded-2xl p-8"
        >
          <h3 className="font-heading text-xl md:text-2xl text-forest-green text-center mb-8">
            Su richiesta
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {onDemandServices.map((service) => (
              <motion.div
                key={service.key}
                variants={cardVariants}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-white/50"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{service.icon}</div>
                  <div>
                    <h4 className="font-heading text-lg text-forest-green mb-2">
                      {t(`onDemand.${service.key}.title`)}
                    </h4>
                    <p className="font-body text-terracotta font-medium text-sm italic">
                      {t(`onDemand.${service.key}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}