<template>
  <ContentWrapper class="app-header">
    <div class="app-header__logo">
      <RouterLink :to="{ name: $options.RouteNames.Landing.Index }">
        Sheng Slogar
      </RouterLink>
    </div>
  </ContentWrapper>
</template>

<script>
import RouteNames from '../../lib/router/names';
import ContentWrapper from '../Content/ContentWrapper';

export default {
  name: 'AppHeader',
  components: { ContentWrapper },
  RouteNames,
}
</script>

<style lang="scss">
@import '../../assets/variables';

.app-header {
  position : relative;
  z-index  : 1;

  &__logo {
    margin-top : 2rem;

    a {
      text-transform  : uppercase;
      font-weight     : 600;
      color           : #adadad;
      font-size       : 1.5rem;
      letter-spacing  : .25rem;
      text-decoration : none;

      &:hover {
        color : #888888;
      }
    }
  }

  @media (max-width : $screen-md-breakpoint) {
    text-align : center;
  }
}
</style>
