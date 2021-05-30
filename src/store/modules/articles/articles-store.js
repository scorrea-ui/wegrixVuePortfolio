import state from './articles-state';
import actions from './articles-actions';
import mutations from './articles-mutations';
import getters from './articles-getters';

const articles = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default articles;
