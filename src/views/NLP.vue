<template>
  <div class="c-nlp">
    <div class="o-container u-12/12">
      <div class="o-grid o-grid--center o-grid--middle">
        <div class="o-grid__col u-12/12">
          <h1>NLP: How are you feeling</h1>
          <form @submit="appendWordToTextArray">
            <BaseTextArea v-model="text" name="comments" ariaLabel="Comments" />
            <BaseButton
              type="submit"
              ariaLabel="Submit Sentiment Analsysis Text"
              >Submit</BaseButton
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import BaseTextArea from '@/components/BaseTextArea.vue';

export default {
  components: {
    BaseButton,
    BaseTextArea,
  },
  data() {
    return {
      text: '',
      sentiment: 0,
    };
  },
  methods: {
    async appendWordToTextArray(event) {
      event.preventDefault();

      const res = await fetch('http://localhost:8002/spellcheck', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(this.text.split(' ')),
      });

      this.sentiment = await res.json();
    },
  },
};
</script>
