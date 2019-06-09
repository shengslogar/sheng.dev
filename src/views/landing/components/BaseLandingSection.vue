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
@import '../../../assets/variables';

.app-base-landing-section {
  background : #000000;
  color      : #ffffff;

  &__content-wrapper {
    display     : flex;
    align-items : flex-end;
    flex-wrap   : wrap;
    padding     : 5rem 1rem;
  }

  &__title {
    font-size  : 5rem;
    font-style : italic;
    flex       : 1 1 45%;
    padding    : 0 5rem 4rem 0;
    position   : sticky;
    bottom     : 0;
    text-align : right;
  }

  &__content {
    padding : 1rem;
    flex    : 1 1 50%;
  }


  @media (max-width : $screen-md-breakpoint) {
    &__content-wrapper {
      flex-direction : column;
      align-items    : flex-start;
      padding        : 2rem 1rem;
    }

    &__title {
      position   : static;
      font-size  : 4rem;
      text-align : left;
    }

    &__title,
    &__content {
      padding : 2rem;
      width   : 100%;
    }
  }

  @media (max-width : $screen-sm-breakpoint) {
    &__title {
      text-align : center;
      font-size  : 3rem;
    }
  }
}
</style>
