import fetchArticles from '../../../api/articles';
import { GET_ARTICLES, ARTICLES_ERROR, LOADING_ARTICLES } from '../../types/articles.types';

const articleActions = {
  async getArticles({ commit }) {
    try {
      commit(LOADING_ARTICLES, true);
      const res = await fetchArticles();
      commit(GET_ARTICLES, await res.json());
      commit(LOADING_ARTICLES, false);
    } catch (e) {
      commit(ARTICLES_ERROR, 'ERROR');
      commit(LOADING_ARTICLES, false);
    }
  },
};

export default articleActions;
