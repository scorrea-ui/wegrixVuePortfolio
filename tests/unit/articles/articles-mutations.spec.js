import mutations from '../../../src/store/modules/articles/articles-mutations';

import { GET_ARTICLES } from '../../../src/store/types/articles.types';
import articlesMock from '../../__mock__/articles';

describe('article mutations', () => {
  it('should add articles to articles state', () => {
    const state = {
      articles: [],
    };
    mutations[GET_ARTICLES](state, articlesMock.articles);
    expect(state.articles).toEqual(articlesMock.articles);
  });
});
