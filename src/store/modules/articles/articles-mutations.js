import { GET_ARTICLES, LOADING_ARTICLES } from '../../types/articles.types';

const articlesMutations = {
  [GET_ARTICLES](state, payload) {
    state.articles = [...state.articles, ...payload];
  },
  [LOADING_ARTICLES](state, payload) {
    state.loading = payload;
  },
};

export default articlesMutations;
