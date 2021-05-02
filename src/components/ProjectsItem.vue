<template>
  <div class="o-grid__col u-4/12@md" key="{project.project}">
    <a
      class="c-projects__wrapper"
      :href="project.url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="c-projects__card">
        <img
          :src="project.image"
          :alt="project.project"
          width="400px"
          height="400px"
        />
        <div class="c-projects__content">
          <div class="c-projects__copy">
            <p class="c-projects__tagline">{{ project.company }}</p>
            <h3 class="c-projects__heading">{{ project.project }}</h3>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ProjectsItem',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
