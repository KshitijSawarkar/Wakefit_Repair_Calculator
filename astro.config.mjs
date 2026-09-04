// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://KshitijSawarkar.github.io',
  base: '/Wakefit_Repair_Calculator',
  vite: {
    plugins: [tailwindcss()],
  },
});
