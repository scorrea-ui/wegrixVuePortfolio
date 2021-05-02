import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import(/* webpackChunkName: "articles" */ '../views/Articles.vue'),
  },
  {
    path: '/nlp',
    name: 'NLP',
    component: () => import(/* webpackChunkName: "nlp" */ '../views/NLP.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    const position = {};

    if (to.hash) {
      position.selector = to.hash;
      position.behavior = 'smooth';

      if (document.querySelector(to.hash)) {
        return position;
      }
    }

    return false;
  },
  routes,
});

export default router;
