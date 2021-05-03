import fetchArticles from '../../api/articles';
import { GET_ARTICLES } from '../types/articles.types';

const articles = {
  namespaced: true,
  state: {
    articles: [],
  },
  mutations: {
    [GET_ARTICLES](state: { articles: any[]; }, payload: any) {
      state.articles = [
        ...state.articles,
        ...payload,
      ];
    },
  },
  actions: {
    async getArticles({ commit }: any) {
      const res = await fetchArticles();
      commit(GET_ARTICLES, await res.json());
    },
  },
  getters: {
    articles(state: { articles: any; }) {
      return state.articles;
    },
  },
};

export default articles;
