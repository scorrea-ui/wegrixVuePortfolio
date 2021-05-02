import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import store from './store';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

Vue.config.productionTip = false;

Vue.use(firestorePlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
