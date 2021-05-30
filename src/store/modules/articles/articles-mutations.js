import { GET_ARTICLES } from '../../types/articles.types';

const articlesMutations = {
  [GET_ARTICLES](state, payload) {
    state.articles = [...state.articles, ...payload];
  },
};

export default articlesMutations;
