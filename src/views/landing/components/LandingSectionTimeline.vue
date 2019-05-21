<template>
  <BaseLandingSection
      class="app-landing-section-timeline"
      backgroundColor="#eb1c63"
      titleText="Timeline">
    <TimelineItem v-for="({ title, date, description }) in timelineItems"
                  :key="title">
      <template #Title>
        {{ title }}
      </template>
      <template #Date>
        {{ date}}
      </template>
      {{ description }}
    </TimelineItem>
  </BaseLandingSection>
</template>

<script>
import BaseLandingSection from './BaseLandingSection';
import TimelineItem from '../../../components/Timeline/TimelineItem';

export default {
  name: 'LandingSectionTimeline',
  data() {
    return {
      timelineItems: [
        {
          title: 'Independent Contractor',
          date: '2019 - Present',
          description: `Responsible for various websites and web applications
          ranging from a Fortune 500 company to local businesses.`,
        },
        {
          title: 'Web Developer - Onjax',
          date: '2018 - 2019',
          description: `Front-end software development in an agile environment. Responsible for reimagining
          and building legacy features into a brand-new application that is highly interactive, performant,
          and works on every screen.`,
        },
        {
          title: 'Intern Web Developer - Triberr',
          date: '2014 - 2016',
          description: `Led an internal development refresh effort for our front-facing consumer app.
          Created mockups, graphics, and hand coded fully-functioning web prototypes while presenting
          both best practices and radically new ideas.`,
        },
      ],
    };
  },
  components: {
    TimelineItem,
    BaseLandingSection,
  },
};
</script>

<style lang="scss">
.app-landing-section-timeline {
  background-image : linear-gradient(175deg, #eb1c63, #fb1261);
}
</style>
