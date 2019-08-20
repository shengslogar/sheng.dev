<template>
  <BaseLandingSection
      class="app-landing-section-timeline"
      backgroundColor="#eb1c63"
      titleText="Timeline">
    <div class="app-landing-section-timeline__items">
      <LandingSectionTimelineItem v-for="({ title, date, description }) in timelineItems"
                                  :key="title">
        <template #Title>
          {{ title }}
        </template>
        <template #Date>
          {{ date}}
        </template>
        {{ description }}
      </LandingSectionTimelineItem>
    </div>
  </BaseLandingSection>
</template>

<script>
import BaseLandingSection from './BaseLandingSection';
import LandingSectionTimelineItem from './LandingSectionTimelineItem';

export default {
  name: 'LandingSectionTimeline',
  data() {
    return {
      timelineItems: [
        {
          title: 'Web Developer - Diglactic',
          date: '2017 - Present',
          description: `Currently working on websites and web apps, specializing in Vue.js, Laravel, and WordPress.`,
        },
        {
          title: 'Web Developer - Onjax',
          date: '2018 - 2019',
          description: `Responsible for transforming the legacy front end of our main software offering
          into a modern and highly polished web app that worked on every device.`,
        },
        {
          title: 'Intern Web Developer - Triberr',
          date: '2014 - 2016',
          description: `Remotely led an internal development effort for our front-facing consumer app.
          Created mockups, graphics, and coded fully-functioning web prototypes while presenting best practices
          and radically new ideas.`,
        },
      ],
    };
  },
  components: {
    LandingSectionTimelineItem,
    BaseLandingSection,
  },
};
</script>

<style lang="scss">
.app-landing-section-timeline {
  background-image : linear-gradient(175deg, #eb1c63, #fb1261);

  &__items {
    overflow : hidden;
  }
}
</style>
