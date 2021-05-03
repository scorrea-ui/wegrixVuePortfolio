import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      guest: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import(/* webpackChunkName: "articles" */ '../views/Articles.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/nlp',
    name: 'NLP',
    component: () => import(/* webpackChunkName: "nlp" */ '../views/NLP.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '*',
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
