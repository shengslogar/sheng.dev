<template>
  <BaseLandingSection
      class="app-landing-section-about"
      backgroundColor="#292929"
      titleText="About">
    <Content class="app-landing-section-about__content">
      <img src="/assets/img/landing-section-about-avatar.jpg"
           class="app-landing-section-about__avatar"
           alt="Sheng Slogar headshot">
      <p>
        Hello! I'm Sheng, a full-stack developer from New York. My passion
        is creating a better online experience for everyone.
      </p>
      <p>
        From landing pages to advanced solutions for companies
        like Delta Air Lines, I make technology that works.
      </p>
      <p>
        Let's talk about your next project!
      </p>
    </Content>
  </BaseLandingSection>
</template>

<script>
import BaseLandingSection from './BaseLandingSection';
import Content from '../../../components/Content/Content';

export default {
  name: 'LandingSectionAbout',
  components: {
    Content,
    BaseLandingSection,
  },
};
</script>

<style lang="scss">
.app-landing-section-about {
  background-image : linear-gradient(175deg, #292929, #141414);

  &__avatar {
    float         : left;
    width         : 148px;
    height        : 148px;
    border-radius : 50%;
    shape-outside : circle();
    margin        : 0 3rem 1rem 0;
  }

  &__content {
    font-size   : 1.1rem;
    line-height : 1.75;

    p {
      margin : 2rem 0;
    }
  }
}
</style>
