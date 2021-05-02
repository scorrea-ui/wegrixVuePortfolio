/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import db from '../../../firebase.config';
import { GET_PROJECTS, FILTER_PROJECTS } from '../types/projects.types';

const projects = {
  namespaced: true,
  state: {
    projects: [],
    filter: 'All',
  },
  mutations: {
    [GET_PROJECTS](state, payload) {
      state.projects = [
        ...state.projects,
        ...payload,
      ];
    },
    [FILTER_PROJECTS](state, payload) {
      state.filter = payload;
    },
  },
  actions: {
    getProjects({ commit }) {
      db.collection('projects')
        .get()
        .then((querySnapshot) => {
          const documents = querySnapshot.docs.map((doc) => doc.data());
          commit(GET_PROJECTS, documents);
        });
    },
    filterProjects({ commit }, payload) {
      commit(FILTER_PROJECTS, payload);
    },
  },
  getters: {
    options(state) {
      const tech = state.projects.map((project) => project.tech);
      return new Set(tech);
    },
    projects(state) {
      return state.filter === 'All' ? state.projects : state.projects.filter((project) => project.tech === state.filter);
    },
  },
};

export default projects;
