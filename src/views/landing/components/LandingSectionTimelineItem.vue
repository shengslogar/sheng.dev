<template>
  <div class="app-landing-section-timeline-item">
    <h2 class="app-landing-section-timeline-item__title">
      <span class="app-landing-section-timeline-item__title-dot"></span>
      <span class="app-landing-section-timeline-item__title-text">
        <slot name="Title"/>
      </span>
    </h2>
    <div class="app-landing-section-timeline-item__date">
      <slot name="Date"/>
    </div>
    <div class="app-landing-section-timeline-item__description">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingSectionTimelineItem',
}
</script>

<style lang="scss">
@import '../../../assets/variables';

.app-landing-section-timeline-item {
  position : relative;
  margin   : 1rem 0;

  &:not(:first-of-type):not(:last-of-type) {
    margin : 4rem 0;
  }

  &__title {
    display     : flex;
    align-items : center;

    &-dot {
      flex          : 0 0 auto;
      display       : block;
      width         : 16px;
      height        : 16px;
      border-radius : 50%;
      margin-right  : calc(5rem - 16px);
      border        : 3px solid #ffffff;

      &::after {
        content     : '';
        position    : absolute;
        background  : #ffffff;
        width       : 3px;
        margin-left : 3px;
        // this is bad...
        top         : calc(1.5rem - 4px);
        bottom      : calc(-4rem - 4px);
      }
    }

    &-text {
      font-size   : 1.5rem;
      line-height : 1.5rem;
    }
  }

  &__date,
  &__description {
    padding-left : 5rem;
  }

  &__date {
    font-size : 1rem;
    margin    : .5rem 0;
  }

  &__description {
    font-size   : 1rem;
    line-height : 1.6;
  }

  @media (max-width : $screen-sm-breakpoint) {
    &__title {
      &-dot {
        display : none;
      }
    }

    &__date,
    &__description {
      padding-left : 0;
    }
  }
}
</style>
