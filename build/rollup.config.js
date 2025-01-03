// import scss from 'rollup-plugin-scss';
import vue from 'rollup-plugin-vue';
import buble from '@rollup/plugin-buble';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/wrapper.js', // Fichier d'entrée
  output: {
    name: 'InfiniteTextLoader',
    file: 'dist/InfiniteTextLoader.umd.js', // Fichier JS
    format: 'umd',
    exports: 'named',
    globals: {
      vue: 'Vue',
    },
  },
  plugins: [
    vue({
      css: true, // Empêche l'injection automatique des styles
      compileTemplate: true,
    }),
    postcss({
      extract: 'infinite-text-loader.css', // Génère un fichier CSS séparé
      minimize: true, // Minifie le CSS
    }),
    commonjs(),
    buble(),
  ],
};
