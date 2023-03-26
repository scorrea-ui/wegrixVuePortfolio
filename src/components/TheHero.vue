<template>
  <section>
    <div class="c-hero">
        <div class="o-grid o-grid--middle o-grid--center">
          <div class="o-grid__col u-5/12@md">
            <h1 data-aos="fade-right" data-aos-delay="400">Santiago Correa</h1>
            <p data-aos="fade-right" data-aos-delay="800">
              A <span>{{ text.text }}</span> that wants to showcase some of the websites he has
              worked on.
            </p>
            <div class="c-hero__wrapper" data-aos="fade-right" data-aos-delay="1200">
              <BaseLink view="Home" className="c-btn c-btn--primary" hash="projects">
                Projects
              </BaseLink>
              <BaseLink view="Contact" className="c-btn c-btn--secondary"> Contact </BaseLink>
            </div>
          </div>
          <div class="o-grid__col u-6/12@md u-text-center">
            <img
              src="https://wegrix-portfolio.s3.amazonaws.com/cetacea.png"
              alt="Hero"
            />
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
