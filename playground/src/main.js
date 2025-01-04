import { createApp } from 'vue';
import App from './App.vue';
import InfiniteTextLoader from 'vue-text-loader';  // Importer le composant

const app = createApp(App);
app.use(InfiniteTextLoader);  // Utilisation globale du composant
app.mount('#app');
