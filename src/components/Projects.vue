<template>
  <section id="projects">
    <div class="c-projects">
      <div class="o-container">
        <div class="c-projects__wrapper">
          <h2 class="c-projects__title">Web {{ 'DEV' }} Public Projects()</h2>
        </div>
        <div class="o-grid -grid--middle o-grid--center">
          <div class="o-grid__col u-12/12 u-text-center">
            <ProjectsFilter :projects="projects" :options="options" />
          </div>
          <div class="o-grid o-grid--middle o-grid--center">
            <img v-if="loading" src="../assets/icons/loading.svg" alt="Loading..." />
            <ProjectsItem v-for="project in projects" :key="project.project" :project="project" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProjectsItem from './ProjectsItem.vue';
import ProjectsFilter from './ProjectsFilter.vue';

export default {
  name: 'Projects',
  components: {
    ProjectsItem,
    ProjectsFilter,
  },
  methods: {
    ...mapActions({
      getProjects: 'projects/getProjects',
    }),
  },
  created() {
    if (this.projects.length === 0) {
      this.getProjects();
    }
  },
  computed: {
    ...mapGetters({
      projects: 'projects/projects',
      options: 'projects/options',
      loading: 'projects/loading',
    }),
  },
};
</script>
