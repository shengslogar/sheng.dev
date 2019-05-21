<template>
  <BaseLandingSection
      class="app-landing-section-about"
      backgroundColor="#292929"
      titleText="About">
    <Content class="app-landing-section-about__content">
      <img src="/static/img/landing-section-about-avatar.jpg"
           class="app-landing-section-about__avatar"
           alt="Sheng Slogar headshot">
      <p>
        Hi! I'm Sheng, a Utah-bound front-end developer originally from Upstate New York.
        My passion is creating a better online experience for everyone.
      </p>
      <p>
        From landing pages to advanced solutions for a Fortune 500 company,
        I make technology that works.
      </p>
      <p>
        Let's grab some coffee! Or tea!
        <a href="mailto:sheng@shengslogar.com">
          Shoot me an email
        </a> or say hi on the socials.
      </p>
      <p>
        <a href="https://twitter.com/ShengSlogar"
           target="_blank">
          Twitter
        </a>
        &bull;
        <a href="https://github.com/shengslogar"
           target="_blank">
          GitHub
        </a>
        &bull;
        <a href="https://www.linkedin.com/in/shengslogar/"
           target="_blank">
          LinkedIn
        </a>
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
    max-width     : 40%;
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

    a {
      color           : #ff5e5e;
      text-decoration : none;
    }
  }
}
</style>
