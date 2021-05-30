import fetchArticles from '../../../api/articles';
import { GET_ARTICLES, ARTICLES_ERROR } from '../../types/articles.types';

const articleActions = {
  async getArticles({ commit }) {
    try {
      const res = await fetchArticles();
      commit(GET_ARTICLES, await res.json());
    } catch (e) {
      commit(ARTICLES_ERROR, 'ERROR');
    }
  },
};

export default articleActions;
