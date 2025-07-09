import { createApp } from 'vue';
import App from './App.vue';
import './styles/styles.css';

import './assets/icons/128.png';

import im from 'im-design';
import 'im-design/dist/index.css';

createApp(App).use(im).mount('#app');
