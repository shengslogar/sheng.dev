<template>
  <div class="app-card-group">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'CardGroup',
}
</script>

<style lang="scss">
.app-card-group {
  margin : -4rem 0;
}
</style>
