<template>
  <div class="app-landing-section-contact">
    <ContentWrapper class="app-landing-section-contact__wrapper">
      <h2 class="app-landing-section-contact__h2">
        Send a Note
      </h2>
      <form class="app-landing-section-contact__form"
            name="contact"
            netlify>
        <TextField labelText="Name"
                   name="name"/>
        <TextField labelText="Email"
                   name="email"/>
        <TextField isMultiLine
                   name="message"
                   labelText="What's up?"/>
        <Button type="submit"
                isFullWidth>
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

export default {
  name: 'LandingSectionContact',
  components: { ContentWrapper, Button, TextField },
};
</script>

<style lang="scss">
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

}
</style>
