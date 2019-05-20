<template>
  <div class="app-base-landing-section"
       :style="styles">
    <ContentWrapper class="app-base-landing-section__content-wrapper">
      <h2 class="app-base-landing-section__title">
        {{ titleText }}
      </h2>
      <div class="app-base-landing-section__content">
        <slot/>
      </div>
    </ContentWrapper>
  </div>
</template>

<script>
import ContentWrapper from '../../../components/Content/ContentWrapper';

export default {
  name: 'BaseLandingSection',
  components: { ContentWrapper },
  props: {
    titleText: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
  },
  computed: {
    styles() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },
}
</script>

<style lang="scss">
.app-base-landing-section {
  background : #000000;
  color      : #ffffff;

  &__content-wrapper {
    display     : flex;
    align-items : flex-end;
  }

  &__title {
    font-size  : 6rem;
    font-style : italic;
  }

  &__content {
    padding : 1rem;
  }
}
</style>
