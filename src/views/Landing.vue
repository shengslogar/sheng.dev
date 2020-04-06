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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: min-content;

    // for business card
    perspective: 1000px;
}
</style>
