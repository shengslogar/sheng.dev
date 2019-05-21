<template>
  <div class="app-card-footer">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'CardFooter',
}
</script>

<style lang="scss">
.app-card-footer {
  font-size  : 1rem;
  text-align : right;

  a {
    text-decoration : none;
    color           : #4b50ff;
  }
}
</style>
