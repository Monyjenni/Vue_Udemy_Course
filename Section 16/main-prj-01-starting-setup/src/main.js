import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js';
import router from './router.js';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';

const app = createApp(App)

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');

