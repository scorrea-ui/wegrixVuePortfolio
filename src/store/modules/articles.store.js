import { GET_ARTICLES } from '../types/articles.types';

const articles = {
  namespaced: true,
  state: {
    articles: [],
  },
  mutations: {
    [GET_ARTICLES](state, payload) {
      state.articles = [
        ...state.articles,
        ...payload,
      ];
    },
  },
  actions: {
    async getArticles({ commit }) {
      const res = await fetch('https://dev.to/api/articles?username=scorreaui');
      commit(GET_ARTICLES, await res.json());
    },
  },
  getters: {
    articles(state) {
      return state.articles;
    },
  },
};

export default articles;
