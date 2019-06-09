<template>
  <div class="app-card">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style lang="scss">

@import '../../assets/variables';

.app-card {
  color         : #000000;
  border-radius : .75rem;
  box-shadow    : 0 2rem 2rem -2rem rgba(0, 0, 0, 0.25);
  background    : #ffffff;
  padding       : 2rem;
  margin        : 4rem 0;
}
</style>
