<template>
  <div class="app-landing-index">
    <LandingSectionHome id="hero"/>
    <LandingSectionProjects id="projects"/>
    <LandingSectionAbout id="about"/>
    <LandingSectionTimeline id="timeline"/>
    <LandingSectionContact id="contact"/>
    <div class="app-landing-index__footer">
      Made in New York!
    </div>
  </div>
</template>

<script>
import LandingSectionHome from './components/LandingSectionHome';
import LandingSectionAbout from './components/LandingSectionAbout';
import LandingSectionProjects from './components/LandingSectionProjects';
import LandingSectionTimeline from './components/LandingSectionTimeline';
import LandingSectionContact from './components/LandingSectionContact';

export default {
  name: 'LandingIndex',
  components: {
    LandingSectionContact,
    LandingSectionTimeline,
    LandingSectionProjects,
    LandingSectionAbout,
    LandingSectionHome,
  },
};
</script>

<style lang="scss">
.app-landing-index {
  &__footer {
    margin     : 1rem auto;
    width      : 256px;
    font-size  : 1rem;
    text-align : center;
    color      : #aaaaaa;
    border-top : 1px solid #eeeeee;
    padding    : 1rem;
  }
}
</style>
