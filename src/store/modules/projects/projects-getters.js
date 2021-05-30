const projectsGetters = {
  options(state) {
    const tech = state.projects.map((project) => project.tech);
    return new Set(tech);
  },
  projects(state) {
    return state.filter === 'All'
      ? state.projects
      : state.projects.filter((project) => project.tech === state.filter);
  },
  loading(state) {
    return state.loading;
  },
};

export default projectsGetters;
