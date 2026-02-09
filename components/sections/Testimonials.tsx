'use client';

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      key: 'elena',
      avatar: '👩‍🦳',
    },
    {
      key: 'marco',
      avatar: '👨‍💼',
    },
    {
      key: 'giuseppeMoretti',
      avatar: '👨‍🦲',
    },
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 6 seconds as specified

    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-h2-mobile md:text-h2-desktop text-forest-green mb-4">
            Quello che dicono i nostri clienti
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto rounded-full"></div>
        </motion.div>

        <div 
          ref={ref}
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Quote Icon */}
          <div className="text-center mb-8">
            <span className="text-6xl md:text-8xl text-terracotta/30 font-serif leading-none">
              "
            </span>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative h-64 md:h-48 overflow-hidden">
            <AnimatePresence mode="wait" custom={1}>
              <motion.div
                key={currentTestimonial}
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
              >
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-md text-2xl">
                  {testimonials[currentTestimonial].avatar}
                </div>

                {/* Testimonial Text */}
                <blockquote className="font-body text-lg md:text-xl text-text-dark leading-relaxed mb-6 max-w-2xl italic">
                  {t(`${testimonials[currentTestimonial].key}.text`)}
                </blockquote>

                {/* Author Info */}
                <div className="text-center">
                  <cite className="font-heading text-lg text-forest-green font-semibold not-italic">
                    {t(`${testimonials[currentTestimonial].key}.name`)}
                  </cite>
                  <p className="font-body text-terracotta font-medium text-sm mt-1">
                    {t(`${testimonials[currentTestimonial].key}.location`)}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-terracotta scale-110' 
                    : 'bg-stone-gray/40 hover:bg-stone-gray/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrevious}
              className="p-3 rounded-full bg-white/70 hover:bg-white shadow-md transition-all duration-300 hover:shadow-lg text-forest-green hover:text-terracotta"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Progress Indicator */}
            <div className="text-center">
              <span className="font-body text-stone-gray text-sm">
                {currentTestimonial + 1} / {testimonials.length}
              </span>
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/70 hover:bg-white shadow-md transition-all duration-300 hover:shadow-lg text-forest-green hover:text-terracotta"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}