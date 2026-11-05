import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F4F7F5',
          100: '#E4ECE6',
          500: '#2E5339',
          600: '#25432E',
          900: '#15261A',
        },
        sand: {
          50: '#FAF8F5',
          100: '#F3EFEA',
          200: '#E5DFD7',
        },
      },
    },
  },
  plugins: [],
};

export default config;
