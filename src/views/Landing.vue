<template>
    <div class="landing">
        <Menu/>
        <BusinessCard/>
    </div>
</template>

<script>
import BusinessCard from './partials/LandingBusinessCard';
import Menu from '../components/Menu';

export default {
    name: 'Landing',
    components: {
        BusinessCard,
        Menu
    }
};
</script>

<style lang="scss">
.landing {
    min-height: 100%;
    background: #202328;
}
</style>
