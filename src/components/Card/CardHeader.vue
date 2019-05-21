<template>
  <div class="app-card-header">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'CardHeader',
}
</script>

<style lang="scss">
.app-card-header {
  font-size   : 1.5rem;
  font-weight : bold;
}
</style>
