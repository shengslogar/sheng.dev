<template>
  <div class="app-landing-section-home">
    <div class="app-landing-section-home__whitespace"></div>
    <ContentWrapper class="app-landing-section-home__content-wrapper">
      <div class="app-landing-section-home__logo">
        <RouterLink :to="{ name: $options.RouteNames.Landing.Index }">
          Sheng Slogar
        </RouterLink>
      </div>

      <div class="app-landing-section-home__content">
        <h1 class="app-landing-section-home__h1">
          This is me.
        </h1>
        <h2 class="app-landing-section-home__h2">
          Web developer, designer, New Yorker.
        </h2>
        <Button>
          Learn More
        </Button>
      </div>
    </ContentWrapper>
  </div>
</template>

<script>
import RouteNames from '../../../lib/router/names';
import Button from '../../../components/Button/Button';
import ContentWrapper from '../../../components/Content/ContentWrapper';

export default {
  name: 'LandingSectionHome',
  RouteNames,
  components: { ContentWrapper, Button },
};
</script>

<style lang="scss">
.app-landing-section-home {
  background : #4950ff;
  position   : relative;

  &__whitespace {
    position   : absolute;
    top        : 0;
    left       : 0;
    right      : 0;
    bottom     : 0;
    clip-path  : polygon(0 0, 0 100%, 100% 80%, 100% 0);
    background : #ffffff;
  }

  &__content-wrapper {
    position : relative;
    z-index  : 1;
    padding  : 3rem 0;
  }

  &__logo {
    text-transform : uppercase;
    font-weight    : 600;
    color          : #333333;
    font-size      : 1.5rem;
    letter-spacing : 1px;

    a {
      color           : inherit;
      text-decoration : none;
    }
  }

  &__content {
    margin          : 12rem 0;
    background      : url('/assets/img/landing-section-home-hero.svg') no-repeat center right;
    background-size : contain;
  }

  &__h1 {
    font-size   : 5rem;
    font-weight : bold;
  }

  &__h2 {
    font-size   : 1.5rem;
    font-weight : normal;
    color       : #aaaaaa;
    margin      : 3rem 0;
  }
}
</style>
