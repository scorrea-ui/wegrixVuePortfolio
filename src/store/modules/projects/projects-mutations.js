import {
  ERROR_PROJECTS,
  FILTER_PROJECTS,
  GET_PROJECTS,
  LOADING_PROJECTS,
} from '../../types/projects.types';

const projectsMutations = {
  [GET_PROJECTS](state, payload) {
    state.projects = [...state.projects, ...payload];
  },
  [FILTER_PROJECTS](state, payload) {
    state.filter = payload;
  },
  [LOADING_PROJECTS](state, payload) {
    state.loading = payload;
  },
  [ERROR_PROJECTS](state, payload) {
    state.error = payload;
  },
};

export default projectsMutations;
