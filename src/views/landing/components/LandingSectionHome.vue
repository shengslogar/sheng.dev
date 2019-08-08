<template>
  <div class="app-landing-section-home">
    <AppHeader/>
    <div class="app-landing-section-home__whitespace"></div>
    <ContentWrapper class="app-landing-section-home__content-wrapper">
      <div class="app-landing-section-home__content">
        <h1 class="app-landing-section-home__h1">
          Hello!
        </h1>
        <h2 class="app-landing-section-home__h2">
          Developer, designer, Utahn. Howdy! &#x1f44b;
        </h2>
        <Button @click="handleLearnMore">
          Learn More
        </Button>
      </div>
    </ContentWrapper>
  </div>
</template>

<script>
import Button from '../../../components/Button/Button';
import ContentWrapper from '../../../components/Content/ContentWrapper';
import AppHeader from '../../../components/App/Header';

export default {
  name: 'LandingSectionHome',
  methods: {
    handleLearnMore() {
      document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    },
  },
  components: { AppHeader, ContentWrapper, Button },
};
</script>

<style lang="scss">
@import '../../../assets/variables';

.app-landing-section-home {
  background : #4950ff;
  position   : relative;

  &__whitespace {
    position   : absolute;
    top        : 0;
    left       : 0;
    right      : 0;
    bottom     : 0;
    clip-path  : polygon(0 0, 0 100%, 100% 82%, 100% 0);
    background : #ffffff;
  }

  &__content-wrapper {
    position : relative;
    z-index  : 1;
  }

  &__content {
    padding         : 9rem 0 15rem;
    background      : url('/static/img/landing-section-home-hero.svg') no-repeat 100% calc(50% - 75px);
    background-size : auto 300px;
  }

  &__h1 {
    font-size   : 7rem;
    font-weight : bold;
  }

  &__h2 {
    font-size   : 1.5rem;
    font-weight : normal;
    color       : #aaaaaa;
    margin      : 0 0 2rem;
  }

  @media (max-width : $screen-md-breakpoint) {
    &__whitespace {
      clip-path : none;
    }

    &__content-wrapper {
      text-align : center;
    }

    &__content {
      background : none;
      padding    : 9rem 0 10rem;
    }
  }

  @media (max-width : $screen-sm-breakpoint) {
    &__h1 {
      font-size : 3.5rem;
    }

    &__h2 {
      font-size : 1.25rem;
    }
  }
}
</style>
