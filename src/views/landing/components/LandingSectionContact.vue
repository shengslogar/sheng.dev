<template>
  <div class="app-landing-section-contact">
    <ContentWrapper class="app-landing-section-contact__wrapper">
      <h2 class="app-landing-section-contact__h2">
        Send a Note
      </h2>
      <form class="app-landing-section-contact__form"
            method="post"
            :action="$router.resolve({ name: $options.RouteNames.Contact.Success }).href">
        <!-- form-name is for Netlify -->
        <input type="hidden"
               name="form-name"
               value="contact">
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
  }

  &__h2 {
    font-size  : 4rem;
    font-style : italic;
    margin     : 4rem 0;
  }

  &__form {
    background      : url('/static/img/landing-section-contact-background.svg') no-repeat 100% 100%;
    background-size : 12rem;

    input, textarea {
      max-width    : 688px;
      margin-left  : auto;
      margin-right : auto;
    }
  }

  @media (max-width : $screen-md-breakpoint) {
    &__h2 {
      font-size : 3rem;
    }

    &__form {
      background : none;
    }
  }
}
</style>
