<template>
  <BaseLandingSection
      class="app-landing-section-projects"
      backgroundColor="#4950ff"
      titleText="Projects">
    <CardGroup>
      <Card v-for="({ title, date, description, linkHref, linkText }) in projectItems"
            :key="linkHref">
        <CardHeader>
          {{ title }}
          <div class="app-landing-section-projects__date">
            {{ date }}
          </div>
        </CardHeader>
        <CardBody v-html="description"/>
        <CardFooter>
          <a :href="linkHref"
             target="_blank">
            {{ linkText }}
          </a>
        </CardFooter>
      </Card>
    </CardGroup>
  </BaseLandingSection>
</template>

<script>
import BaseLandingSection from './BaseLandingSection';
import Card from '../../../components/Card/Card';
import CardHeader from '../../../components/Card/CardHeader';
import CardBody from '../../../components/Card/CardBody';
import CardFooter from '../../../components/Card/CardFooter';
import CardGroup from '../../../components/Card/CardGroup';

export default {
  name: 'LandingSectionProjects',
  data() {
    return {
      projectItems: [
        {
          title: 'Smokey Legend BBQ',
          date: 'July 2019',
          description: `Simple WordPress-powered website for the folks with some of Upstate New York's finest barbecue.`,
          linkHref: 'https://smokeylegend.com',
          linkText: 'Visit Site',
        },
        {
          title: 'CANiTEXT911',
          date: 'December 2018',
          description: `CiT is an online database of FCC-approved areas where texting 911 is supported.
          It's fast, responsive, lightweight, and
          <a href="https://github.com/CanIText911" target="_blank">open source</a>!`,
          linkHref: 'https://canitext911.us',
          linkText: 'Visit Site',
        },
        {
          title: 'Homina',
          date: 'June 2018',
          description: `Homina is a simplistic new tab page for Chrome. All the cool factor, none of the bloat.`,
          linkHref: 'https://chrome.google.com/webstore/detail/homina/fioieebccopjgmnhbgkcfnhaijefjjpj',
          linkText: 'Visit Chrome Web Store',
        },
        {
          title: 'Bing Schedules',
          date: 'February 2018',
          description: `Bing Schedules was created during my college days to import a web-based class schedule
          into the calendar on my phone and laptop.`,
          linkHref: 'https://chrome.google.com/webstore/detail/bing-schedules/ofpmakmjnlpkpnelpdkjpapilnbcafdl',
          linkText: 'Visit Chrome Web Store',
        },
        {
          title: 'Stoudt Associates',
          date: 'October 2016',
          description: `Stoudt needed a simple yet classy way to attract new clientele in the financial industry,
          so we came up with a no-frills approach to do the job.`,
          linkHref: 'http://stoudtcpas.com',
          linkText: 'Visit Site',
        },
        {
          title: 'Heart&Cart',
          date: 'May 2016',
          description: `As a fresh new startup, Heart&Cart needed a way to track new potential customers
          and incentivize sharing. This landing page did just that.`,
          linkHref: `http://heartandcart.com`,
          linkText: 'Visit Site',
        },
      ],
    };
  },
  components: {
    CardGroup,
    CardFooter,
    CardBody,
    CardHeader,
    Card,
    BaseLandingSection,
  },
};
</script>

<style lang="scss">
.app-landing-section-projects {
  background-image : linear-gradient(175deg, #4950ff 45%, #3d5ffb);

  &__date {
    margin-top  : .25rem;
    font-size   : .95rem;
    font-weight : normal;
    color       : #555555;
  }
}
</style>
