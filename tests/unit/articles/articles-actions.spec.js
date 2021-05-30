import actions from '../../../src/store/modules/articles/articles-actions';
import { ARTICLES_ERROR, GET_ARTICLES } from '../../../src/store/types/articles.types';
import articlesMock from '../../__mock__/articles';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(articlesMock),
}));

beforeEach(() => {
  fetch.mockClear();
});

describe('actions', () => {
  it('should fetch articles correctly', async () => {
    const commit = jest.fn();
    await actions.getArticles({ commit });
    expect(commit).toHaveBeenCalledWith(GET_ARTICLES, articlesMock);
  });

  it('should fail on article fetching', async () => {
    fetch.mockImplementationOnce(() => Promise.reject(new Error()));
    const commit = jest.fn();
    const articles = await actions.getArticles({ commit });
    expect(commit).toHaveBeenCalledWith(ARTICLES_ERROR, 'ERROR');
    expect(articles).toEqual(undefined);
  });
});
