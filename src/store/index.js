import { createStore } from 'vuex';
import { articles, projects, themes } from './modules/index';

const store = createStore({
  modules: {
    projects,
    articles,
    themes,
  },
});

export default store;
