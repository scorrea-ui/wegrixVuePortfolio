import projectsState from './projects-state';
import projectsMutations from './projects-mutations';
import projectsActions from './projects-actions';
import projectsGetters from './projects-getters';

const projects = {
  namespaced: true,
  state: projectsState,
  mutations: projectsMutations,
  actions: projectsActions,
  getters: projectsGetters,
};

export default projects;
