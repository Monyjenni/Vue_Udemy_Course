import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js';

const app = createApp(App).mount('#app');

app.use(router);

app.mount('#app');