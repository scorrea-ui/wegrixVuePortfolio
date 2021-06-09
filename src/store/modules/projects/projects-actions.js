import getProjects from '../../../api/projects';
import {
  GET_PROJECTS,
  LOADING_PROJECTS,
  FILTER_PROJECTS,
  ERROR_PROJECTS,
} from '../../types/projects.types';

const projectsActions = {
  async getProjects({ commit }) {
    try {
      commit(LOADING_PROJECTS, true);
      commit(GET_PROJECTS, await getProjects());
      commit(LOADING_PROJECTS, false);
    } catch (e) {
      commit(ERROR_PROJECTS, e);
    }
  },
  filterProjects({ commit }, payload) {
    commit(FILTER_PROJECTS, payload);
    commit(LOADING_PROJECTS, false);
  },
};

export default projectsActions;
