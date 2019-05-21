<template>
  <div class="app-contact-success">
    <AppHeader/>
    <ContentWrapper>
      <Content>
        <h1>
          Thanks! I'll be in touch.
        </h1>
        <p>
          <RouterLink :to="{ name: $options.RouteNames.Landing.Index }">
            &leftarrow; Back to Home
          </RouterLink>
        </p>
      </Content>
    </ContentWrapper>
  </div>
</template>
<script>
import ContentWrapper from '../../components/Content/ContentWrapper';
import AppHeader from '../../components/App/Header';
import Content from '../../components/Content/Content';
import RouteNames from '../../lib/router/names';

export default {
  name: 'ContactSuccess',
  RouteNames,
  components: {
    Content,
    AppHeader,
    ContentWrapper,
  },
}
</script>

<style lang="scss">
.app-contact-success {
  h1 {
    font-size : 4rem;
    margin    : 3rem 0;
  }
}
</style>
