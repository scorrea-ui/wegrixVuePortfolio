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
          <div class="o-grid o-grid--middle o-grid--center" v-if="projects">
            <ProjectsItem
            v-for="project in projects" :key="project.project"
              :project="project"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ProjectsItem from './ProjectsItem.vue';
import ProjectsFilter from './ProjectsFilter.vue';

const store = useStore();
store.dispatch('projects/getProjectsAction');
const projects = computed(() => store.getters['projects/projects']);
const options = computed(() => store.getters['projects/options']);
</script>
