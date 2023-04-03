<template>
    <div class="articleInnerContainer innerP">
        <PagesHeaderLayout/>
        <PagesTopContent :inner-page="true" :page-link="'articles'" :link-name="'Articles'" :page-name="'Barqarorlik rezolyutsiyalari 2023'"/>
        <InnerDescripts/>
        <MainFooterLayout/>
    </div>
</template>
<script>
import PagesHeaderLayout from '../../layouts/PagesHeaderLayout.vue';
import PagesTopContent from '../../components/PagesTopContent.vue';
import InnerDescripts from '../../components/article-pages/articles-inner/InnerDescripts.vue';
import MainFooterLayout from '../../layouts/MainFooterLayout.vue';
export default {
    name: 'articles-inner-page',
    components: {PagesHeaderLayout, PagesTopContent, InnerDescripts, MainFooterLayout}
}
</script>
<style lang="scss">

</style>