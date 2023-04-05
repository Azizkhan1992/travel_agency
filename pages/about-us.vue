<template>
    <main class="aboutContainer">
        <PagesHeaderLayout/>
        <PagesTopContent :bg-img="'aboutBg.png'" :pageName="'Biz haqimizda'"/>
        <AboutUsTop/>
        <TravelExperts/>
        <WhyExactlyUs/>
        <OfferTypes/>
        <MostReadable/>
        <MainFooterLayout/>
    </main>
</template>
<script>
import PagesHeaderLayout from '../layouts/PagesHeaderLayout.vue';
import PagesTopContent from '../components/PagesTopContent.vue';
import MainFooterLayout from '../layouts/MainFooterLayout.vue';
import AboutUsTop from '../components/about-pages/AboutUsTop.vue';
import TravelExperts from '../components/about-pages/TravelExperts.vue';
import WhyExactlyUs from '../components/about-pages/WhyExactlyUs.vue';
import OfferTypes from '../components/about-pages/OfferTypes.vue';
import MostReadable from '../components/about-pages/MostReadable.vue';
export default {
    name: 'about-us',
    components: {PagesHeaderLayout, PagesTopContent, MainFooterLayout, AboutUsTop, TravelExperts, WhyExactlyUs, OfferTypes, MostReadable}
}
</script>