<template>
  <div class="app-content">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Content',
}
</script>

<style lang="scss">
.app-content {
  font-size : 1rem;
}
</style>
