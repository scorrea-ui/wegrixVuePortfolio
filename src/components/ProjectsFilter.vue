<template>
  <select
    aria-label="Filter projects worked on"
    class="c-projects__select"
    v-model="selectedFilter"
  >
    <option value="All">All</option>
    <option v-for="option in options" :key="option">{{ option }}</option>
  </select>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProjectsFilter',
  props: {
    options: {
      type: Set,
      required: true,
    },
    projects: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedFilter: 'All',
    };
  },
  methods: {
    ...mapActions({
      filterProjects: 'projects/filterProjects',
    }),
  },
  watch: {
    selectedFilter() {
      this.filterProjects(this.selectedFilter);
    },
  },
};
</script>
