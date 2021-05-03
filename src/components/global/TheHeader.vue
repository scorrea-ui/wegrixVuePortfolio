<template>
  <header class="c-header" v-click-outside="closeMenu">
    <div class="o-container">
      <div class="o-grid o-grid--between o-grid--middle">
        <div class="o-grid__col u-3/12@md">
          <div class="c-header__logo">
            <a class="c-header__link" href="/">Santiago Correa</a
            ><button
              aria-label="Open Menu"
              class="c-header__hamburger"
              @click="toggleNav"
            >
              <img src="@/assets/icons/hamburger.png" alt="Open menu" />
            </button>
          </div>
        </div>
        <div class="o-grid__col u-9/12@md">
          <nav :class="`c-header__nav ${active ? 'active' : ''}`">
            <ul :class="`c-header__list ${active ? 'active' : ''}`">
              <li class="c-header__item">
                <router-link class="c-header__link" to="/">Home</router-link>
              </li>
              <li class="c-header__item">
                <router-link class="c-header__link" to="/about"
                  >About</router-link
                >
              </li>
              <li class="c-header__item">
                <router-link class="c-header__link" to="/articles"
                  >Articles</router-link
                >
              </li>
              <li class="c-header__item">
                <a class="c-header__link" href="/contact">Contact Me</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import clickOutside from '@/directives/clickOutside';

export default {
  name: 'Header',
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleNav() {
      this.active = !this.active;
    },
    closeMenu() {
      this.active = false;
    },
  },
  directives: {
    clickOutside,
  },
};
</script>
