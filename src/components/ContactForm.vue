<template>
  <div class="c-contact">
    <div class="o-container">
      <div class="o-grid o-grid--center o-grid--middle">
        <div class="o-grid__col u-8/12@md">
          <h2 class="c-contact__title">Contact Me</h2>
          <h3 class="c-contact__copy">Any question or remarks? Write a message!</h3>
          <p v-if="message" class="u-text-center">{{ message }}</p>
          <form
            name="contact"
            method="post"
            action="/contact-us"
            data-netlify="true"
            netlify
            netlify-honeypot="bot-field"
            data-netlify-honeypot="bot-field"
            @submit="submit"
            ref="form"
          >
            <BaseInput name="form-name" type="hidden" value="contact" />
            <BaseFieldSet data-aos="fade-right" data-aos-delay="300">
              <BaseError v-if="name.error" text="Say my name, say my name" />
              <BaseInput
                name="name"
                type="text"
                :modelValue="name.value"
                ariaLabel="Full Name"
                @blur="inputLostFocus"
                @input="inputTouched"
              />
              <BaseLabel htmlFor="name" text="Full Name" />
            </BaseFieldSet>
            <BaseFieldSet data-aos="fade-right" data-aos-delay="500">
              <BaseError v-if="email.error" text="Are you sure this is an email?" />
              <BaseInput
                name="email"
                type="email"
                ariaLabel="Email"
                :modelValue="email.value"
                @blur="inputLostFocus"
                @input="inputTouched"
              />
              <BaseLabel htmlFor="email" text="Email" />
            </BaseFieldSet>
            <BaseFieldSet data-aos="fade-right" data-aos-delay="700">
              <BaseError v-if="phone.error" text="Hey I just met you, and this is crazy" />
              <BaseInput
                name="phone"
                type="tel"
                ariaLabel="Phone Number"
                :modelValue="phone.value"
                @blur="inputLostFocus"
                @input="inputTouched"
              />
              <BaseLabel htmlFor="phone" text="Phone" />
            </BaseFieldSet>
            <BaseFieldSet data-aos="fade-right" data-aos-delay="900">
              <BaseTextArea
                name="comments"
                ariaLabel="Comments"
                :modelValue="comments.value"
                @blur="inputLostFocus"
                @input="inputTouched"
              />
              <BaseLabel htmlFor="comments" text="Comments" />
            </BaseFieldSet>
            <div class="c-contact__end">
              <BaseButton
                type="submit"
                :disabled="disableSubmitButton"
                ariaLabel="Submit to contact me"
                className="c-contact__btn c-btn c-btn--primary"
              >
                Send Message
              </BaseButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emailValidation, textValidation, phoneValidation } from '@/utils/Validation';
import BaseButton from './BaseButton.vue';
import BaseFieldSet from './BaseFieldSet.vue';
import BaseInput from './BaseInput.vue';
import BaseTextArea from './BaseTextArea.vue';
import BaseLabel from './BaseLabel.vue';
import BaseError from './BaseError.vue';
import axios from 'axios';

export default {
  components: {
    BaseButton,
    BaseFieldSet,
    BaseInput,
    BaseTextArea,
    BaseLabel,
    BaseError,
  },
  data() {
    return {
      message: '',
      success: false,
      disableSubmitButton: false,
      name: {
        value: '',
        error: false,
        touched: false,
        validator: textValidation,
      },
      email: {
        value: '',
        error: false,
        touched: false,
        validator: emailValidation,
      },
      phone: {
        value: '',
        error: false,
        touched: false,
        validator: phoneValidation,
      },
      comments: {
        value: '',
        error: false,
        touched: false,
        validator: textValidation,
      },
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
    },
    inputTouched(e) {
      this[e.target.name] = {
        ...this[e.target.name],
        value: e.target.value,
      };
    },
    inputLostFocus(e) {
      this[e.target.name] = {
        ...this[e.target.name],
        error: this[e.target.name].validator(e.target.value),
      };
    },
    handleAxiosFormSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      };
      axios.post(
        '/',
        this.encode({
          'form-name': 'contact',
          name: this.name.value,
          email: this.email.value,
          phone: this.phone.value,
          comments: this.comments.value,
        }),
        axiosConfig,
      );
    },
    async submit(event) {
      event.preventDefault();

      if (this.name.value && this.email.value && this.phone.value && this.comments.value) {
        this.success = true;
        this.message = 'Woohoo your form has been submitted correctly';
        this.disableSubmitButton = true;
        this.handleAxiosFormSubmit();
      } else {
        this.success = false;
        this.message = 'Aww, please make sure everything has a value';
      }
    },
  },
};
</script>
