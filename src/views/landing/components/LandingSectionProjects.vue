<template>
  <BaseLandingSection
      class="app-landing-section-projects"
      backgroundColor="#4950ff"
      titleText="Projects">
    <CardGroup>
      <Card>
        <CardHeader>
          CANiTEXT911
        </CardHeader>
        <CardBody>
          Public information site designed to help U.S. citizens discover if texting 911 is supported in their
          area.
        </CardBody>
        <CardFooter>
          <a href="https://canitext911.us"
             target="_blank">
            Visit Site
          </a>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          Homina
        </CardHeader>
        <CardBody>
          Minimalistic new-tab Chrome extension
        </CardBody>
        <CardFooter>
          <a href="https://chrome.google.com/webstore/detail/homina/fioieebccopjgmnhbgkcfnhaijefjjpj"
             target="_blank">
            Visit Chrome Web Store
          </a>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          Bing Schedules
        </CardHeader>
        <CardBody>
          Chrome extension for Binghamton University students
        </CardBody>
        <CardFooter>
          <a href="https://chrome.google.com/webstore/detail/bing-schedules/ofpmakmjnlpkpnelpdkjpapilnbcafdl?hl=en-US"
             target="_blank">
            Visit Chrome Web Store
          </a>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          Stoudt Associates
        </CardHeader>
        <CardBody>
          Landing Page
        </CardBody>
        <CardFooter>
          <a href="http://stoudtcpas.com/"
             target="_blank">
            Visit Site
          </a>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          Heart&Cart
        </CardHeader>
        <CardBody>
          Landing Page
        </CardBody>
        <CardFooter>
          <a href="http://heartandcart.com/"
             target="_blank">
            Visit Site
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
}
</style>
