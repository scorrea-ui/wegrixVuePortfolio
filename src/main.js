import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import store from './store';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

import { domain, clientId } from '../auth_config.json';
import { Auth0Plugin } from './auth';

Vue.config.productionTip = false;

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname,
    );
  },
});

Vue.use(firestorePlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
