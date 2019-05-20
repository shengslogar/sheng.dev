<template>
  <div id="app-landing-index">
    <LandingSectionHome id="hero"/>
    <LandingSectionProjects id="projects"/>
    <LandingSectionAbout id="about"/>
    <LandingSectionTimeline id="timeline"/>
  </div>
</template>

<script>
import LandingSectionHome from './components/LandingSectionHome';
import LandingSectionAbout from './components/LandingSectionAbout';
import LandingSectionProjects from './components/LandingSectionProjects';
import LandingSectionTimeline from './components/LandingSectionTimeline';

export default {
  name: 'LandingIndex',
  components: {
    LandingSectionTimeline,
    LandingSectionProjects,
    LandingSectionAbout,
    LandingSectionHome,
  },
};
</script>

<style lang="scss">
#app-landing-index {

}
</style>
