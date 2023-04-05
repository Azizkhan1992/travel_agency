<template>
    <main class="ourTeamContainer">
        <PagesHeaderLayout/>
        <PagesTopContent :bg-img="'teamBg.png'" :page-name="'Bizning jamoa'"/>
        <OurTeam/>
        <TeamSupport/>
        <MainFooterLayout/>
    </main>
</template>
<script>
import PagesHeaderLayout from '../layouts/PagesHeaderLayout.vue';
import PagesTopContent from '../components/PagesTopContent.vue';
import MainFooterLayout from '../layouts/MainFooterLayout.vue';
import OurTeam from '../components/our-team/OurTeam.vue';
import TeamSupport from '../components/our-team/TeamSupport.vue';
export default {
    name: 'our-team',
    components: {PagesHeaderLayout, PagesTopContent, MainFooterLayout, OurTeam, TeamSupport}
}
</script>