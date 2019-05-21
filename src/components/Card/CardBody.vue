<template>
  <div class="app-card-body">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'CardBody',
}
</script>

<style lang="scss">
.app-card-body {
  font-size : 1rem;
  margin    : 1rem 0;
}
</style>
