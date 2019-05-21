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
@import './assets/_variables.scss';
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600,700&display=swap');

* {
  box-sizing          : border-box;
  transition          : .2s ease;
  transition-property : color, background-color, border-color, opacity, transform, visibility, box-shadow;
  margin              : 0;
  font-family         : inherit;
}

::selection {
  background : #ffbc49;
  color      : #000000;
}

html,
body,
#app {
  height : 100%;
}

html {
  font : 16px 'IBM Plex Sans', sans-serif;

  @media (max-width : $screen-md-breakpoint) {
    font-size : 15px;
  }
}

body {
  font-size : 0;
  cursor    : default;
  min-width : $app-min-width;
}

a {
  text-decoration : none;
  color           : $primary-color;
}
</style>
