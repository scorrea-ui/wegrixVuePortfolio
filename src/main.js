import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import AOS from 'aos';
import 'aos/dist/aos.css';
import store from './store';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

Vue.config.productionTip = false;

Vue.use(firestorePlugin);

new Vue({
  render: (h) => h(App),
  mounted() {
    AOS.init({
      // Global settings:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  },
  router,
  store,
}).$mount('#app');
