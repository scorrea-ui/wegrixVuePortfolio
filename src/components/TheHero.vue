<template>
  <section>
    <div class="c-hero">
      <div class="o-container">
        <div class="o-grid o-grid--middle o-grid--center">
          <div class="o-grid__col u-5/12@md">
            <h1>Santiago Correa</h1>
            <p>
              A <span>{{ text.text }}</span> that wants to showcase some of the
              websites he has worked on.
            </p>
            <div class="c-hero__wrapper">
              <BaseLink
                view="Home"
                className="c-btn c-btn--primary"
                hash="projects"
              >
                Projects
              </BaseLink>
              <BaseLink
                view="Contact"
                className="c-btn c-btn--secondary"
              >
                Contact
              </BaseLink>
            </div>
          </div>
          <div class="o-grid__col u-6/12@md">
            <img
              src="https://f.hubspotusercontent40.net/hubfs/7562645/Portfolio/hero.svg"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseLink from '@/components/BaseLink.vue';
import TypeWriter from '@/utils/TypeWriter';

export default {
  name: 'TheHero',
  components: {
    BaseLink,
  },
  data() {
    return {
      titles: ['Front End Dev', 'UX Designer', 'Learner'],
      text: '',
    };
  },
  methods: {
    updateText() {
      this.text = new TypeWriter(this.titles);
    },
  },
  mounted() {
    this.updateText();
  },
};
</script>
