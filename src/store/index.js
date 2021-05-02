import Vue from 'vue';
import Vuex from 'vuex';
import { articles, projects } from './modules/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    projects,
    articles,
  },
});
