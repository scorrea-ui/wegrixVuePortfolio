import themeMutations from './theme-mutations';
import themeState from './theme-state';
import themeActions from './theme-actions';
import themeGetters from './theme-getters';

const themesStore = {
  namespaced: true,
  state: themeState,
  mutations: themeMutations,
  actions: themeActions,
  getters: themeGetters,
};

export default themesStore;
