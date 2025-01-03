import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  build: {
    lib: {
      entry: 'src/index.js', // Ton fichier d'entrée
      name: 'VueInfiniteTextLoader',
      fileName: (format) => `vue-text-loader.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'], // Ne pas inclure Vue dans le bundle
      output: {
        globals: {
            name: 'VueInfiniteTextLoader',  
            vue: 'Vue',
        },
        exports: 'named',
      },
    },
  },
});
