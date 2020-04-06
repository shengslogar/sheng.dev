<template>
    <div id="app">
        <Landing/>
    </div>
</template>

<script>
import Landing from './views/Landing';

export default {
    name: 'App',
    components: {Landing}
}
</script>

<style lang="scss">
@import '//fonts.googleapis.com/css2?family=Oxygen:wght@400;700&display=swap';

* {
    box-sizing: border-box;
    margin: 0;
}

html,
body,
#app {
    height: 100%;
}

html {
    font: 16px 'Oxygen', sans-serif;
    cursor: default;
    min-width: 320px;
}

body {
    font-size: 0;
}
</style>
