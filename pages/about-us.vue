<template>
    <div class="aboutContainer">
        <PagesHeaderLayout/>
        <PagesTopContent :bg-img="'aboutBg.png'" :pageName="'Biz haqimizda'"/>
        <AboutUsTop/>
        <MainFooterLayout/>
    </div>
</template>
<script>
import PagesHeaderLayout from '../layouts/PagesHeaderLayout.vue';
import PagesTopContent from '../components/PagesTopContent.vue';
import MainFooterLayout from '../layouts/MainFooterLayout.vue';
import AboutUsTop from '../components/about-pages/AboutUsTop.vue';
export default {
    name: 'about-us',
    components: {PagesHeaderLayout, PagesTopContent, MainFooterLayout, AboutUsTop}
}
</script>