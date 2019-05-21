<template>
  <div class="app-timeline-item">
    <h2 class="app-timeline-item__title">
      <span class="app-timeline-item__title-dot"></span>
      <span class="app-timeline-item__title-text">
        <slot name="Title"/>
      </span>
    </h2>
    <div class="app-timeline-item__date">
      <slot name="Date"/>
    </div>
    <div class="app-timeline-item__description">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimelineItem',
}
</script>

<style lang="scss">
.app-timeline-item {
  padding  : 2rem 0;
  position : relative;
  overflow : hidden;

  &__title {
    display     : flex;
    align-items : center;

    &-dot {
      display       : block;
      width         : .75rem;
      height        : .75rem;
      border-radius : 50%;
      margin-right  : 3.25rem;
      border        : 3px solid #ffffff;
      position      : relative;

      &::before,
      &::after {
        content    : '';
        position   : absolute;
        background : #ffffff;
        height     : 40rem;
        width      : 2px;
        left       : 2px;
      }

      &::before {
        bottom : 100%;
      }

      &::after {
        top : 100%;
      }
    }

    &-text {
      font-size : 1.5rem;
    }
  }

  &__date,
  &__description {
    padding-left : 4rem;
  }

  &__date {
    font-size  : 1rem;
    font-style : italic;
    margin     : .5rem 0;
  }

  &__description {
    font-size : 1rem;
  }
}
</style>
