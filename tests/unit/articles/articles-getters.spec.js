import getters from '../../../src/store/modules/articles/articles-getters';
import articlesMock from '../../__mock__/articles';

describe('Articles', () => {
  it('should get all articles', () => {
    const result = getters.articles(articlesMock);
    expect(result).toEqual(articlesMock.articles);
  });
});
