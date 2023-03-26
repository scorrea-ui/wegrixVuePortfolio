import { createRouter as _createRouter, createWebHistory } from 'vue-router';
import scrollBehavior from '../utils/scrollBehaviour';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
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
];

const createRouter = () => _createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  scrollBehavior,
  routes,
});

export default createRouter;
