<template>
  <div class="app-content-wrapper">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'ContentWrapper',
}
</script>

<style lang="scss">
.app-content-wrapper {
  max-width : 1104px;
  margin    : 0 auto;
  padding   : 1rem;
}
</style>
