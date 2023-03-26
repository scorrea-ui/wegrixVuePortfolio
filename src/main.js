import 'aos/dist/aos.css';
import { VueFire } from 'vuefire';
import { createApp } from 'vue';
import { register } from 'swiper/element/bundle';
import createRouter from './router';
import store from './store';
import App from './App.vue';
import { firebaseApp } from '../firebase.config';
import './registerServiceWorker';

const app = createApp(App);
const router = createRouter();

app.use(VueFire, { firebaseApp });
app.use(store);
app.use(router);
register();

app.mount('#app');
