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
.app-card {
  color         : #000000;
  border-radius : .25rem;
  box-shadow    : 0 8px 20px rgba(0, 0, 0, .1);
  background    : #ffffff;
  padding       : 2rem;
  margin        : 4rem 0;
}
</style>
