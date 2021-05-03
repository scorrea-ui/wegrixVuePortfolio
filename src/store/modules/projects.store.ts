/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import getProjects from '../../api/projects';
import { GET_PROJECTS, FILTER_PROJECTS } from '../types/projects.types';

const projects = {
  namespaced: true,
  state: {
    projects: [],
    filter: 'All',
  },
  mutations: {
    [GET_PROJECTS](state: { projects: any[]; }, payload: any) {
      state.projects = [
        ...state.projects,
        ...payload,
      ];
    },
    [FILTER_PROJECTS](state: any[], payload: any) {
      state.filter = payload;
    },
  },
  actions: {
    async getProjects({ commit }: any) {
      commit(GET_PROJECTS, await getProjects());
    },
    filterProjects({ commit }: any, payload: any) {
      commit(FILTER_PROJECTS, payload);
    },
  },
  getters: {
    options(state: { projects: any[]; }) {
      const tech = state.projects.map((project: { tech: any; }) => project.tech);
      return new Set(tech);
    },
    projects(state: { filter: string; projects: any[]; }) {
      return state.filter === 'All' ? state.projects : state.projects.filter((project: { tech: any; }) => project.tech === state.filter);
    },
  },
};

export default projects;
