<template>
  <div id="app">
    <RouterView/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600,700&display=swap');

* {
  box-sizing          : border-box;
  transition          : .2s ease;
  transition-property : color, background-color, border-color, opacity, transform, visibility;
  margin              : 0;
  font-family         : inherit;
}

html {
  font : 16px 'IBM Plex Sans', sans-serif;
}

body {
  font-size : 0;
  cursor    : default;
}
</style>
