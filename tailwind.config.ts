import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2D5016',
        'terracotta': '#C67A4B',
        'cream': '#FAF8F5',
        'stone-gray': '#8B8178',
        'leaf-green': '#7CB342',
        'text-dark': '#1A1A1A',
      },
      fontFamily: {
        'heading': ['var(--font-playfair)', 'serif'],
        'body': ['var(--font-dm-sans)', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': ['4rem', { lineHeight: '1.2' }],
        'h1-mobile': ['2.25rem', { lineHeight: '1.2' }],
        'h2-desktop': ['2.625rem', { lineHeight: '1.2' }],
        'h2-mobile': ['1.75rem', { lineHeight: '1.2' }],
        'h3-desktop': ['1.75rem', { lineHeight: '1.2' }],
        'h3-mobile': ['1.25rem', { lineHeight: '1.2' }],
        'body-desktop': ['1rem', { lineHeight: '1.6' }],
        'body-mobile': ['0.875rem', { lineHeight: '1.6' }],
        'cta': ['0.875rem', { lineHeight: '1.2', letterSpacing: '0.05em' }],
      },
      boxShadow: {
        'card-hover': '0 8px 25px rgba(45, 80, 22, 0.15)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-stagger': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;