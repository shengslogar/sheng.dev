<template>
  <div class="app-landing-section-contact">
    <ContentWrapper class="app-landing-section-contact__wrapper">
      <h2 class="app-landing-section-contact__h2">
        Send a Note
      </h2>
      <form class="app-landing-section-contact__form"
            name="contact"
            method="post"
            :action="$router.resolve({ name: $options.RouteNames.Contact.Success }).href"
            netlify>
        <TextField labelText="Name"
                   isRequired
                   name="name"/>
        <TextField labelText="Email"
                   isRequired
                   name="email"
                   type="email"/>
        <TextField isMultiLine
                   isRequired
                   name="message"
                   labelText="What's up?"/>
        <Button type="submit">
          Send Now
        </Button>
      </form>
    </ContentWrapper>
  </div>
</template>

<script>
import TextField from '../../../components/Input/TextField';
import Button from '../../../components/Button/Button';
import ContentWrapper from '../../../components/Content/ContentWrapper';
import RouteNames from '../../../lib/router/names';

export default {
  name: 'LandingSectionContact',
  RouteNames,
  components: { ContentWrapper, Button, TextField },
};
</script>

<style lang="scss">
@import '../../../assets/variables';

.app-landing-section-contact {
  &__wrapper {
    text-align : center;
    max-width  : 800px;
  }

  &__h2 {
    font-size  : 4rem;
    font-style : italic;
    margin     : 4rem 0;
  }

  @media (max-width : $screen-md-breakpoint) {
    &__h2 {
      font-size : 3rem;
    }
  }
}
</style>
