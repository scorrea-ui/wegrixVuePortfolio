<template>
  <div class="c-theme">
    <span class="c-theme__text">Light</span>
    <div class="c-theme__wrapper">
      <label for="theme-btn">
        <input type="checkbox" id="theme-btn" v-model="checked" />
        <div class="c-theme__slider">
          <div class="c-theme__btn"></div>
          <span class="star star-1"></span>
          <span class="star star-2"></span>
          <span class="star star-3"></span>
          <span class="star star-4"></span>
          <span class="star star-5"></span>
          <span class="star star-6"></span>
        </div>
      </label>
    </div>
    <span class="c-theme__text">Dark</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  mounted() {
    const themeToggle = JSON.parse(window.localStorage.getItem('theme_toggle'));
    if (themeToggle) {
      this.toggled = themeToggle;
      this.toggleTheme(themeToggle);
    }
  },
  data() {
    return {
      toggled: false,
    };
  },
  methods: {
    ...mapActions({
      toggleTheme: 'themes/toggleTheme',
    }),
  },
  computed: {
    ...mapGetters({
      theme: 'themes/getTheme',
    }),
    checked: {
      get() {
        return this.toggled;
      },
      set(val) {
        this.toggled = val;
        this.toggleTheme(val);
      },
    },
  },
};
</script>
