<template>
    <div class="typesContainer">
        <PagesHeaderLayout/>
        <PagesTopContent :bgImg="'typeBg.png'" :pageName="'Turlar'"/>
        <SearchInput/>

        <hr class="common"/>
        <TypeContent/>
        <MainFooterLayout/>
    </div>
</template>
<script>
import PagesHeaderLayout from '../../layouts/PagesHeaderLayout.vue';
import PagesTopContent from '../../components/PagesTopContent.vue';
import SearchInput from '../../components/SearchInput.vue';
import TypeContent from '../../components/type-pages/TypeContent.vue';
import MainFooterLayout from '../../layouts/MainFooterLayout.vue';
export default {
    name: 'app-types',
    components: {PagesHeaderLayout, PagesTopContent, SearchInput, TypeContent, MainFooterLayout}
}
</script>
<style lang="scss">
.typesContainer{

    hr{
        margin-top: 40px;
        border: 1px solid #f2f2f2;
    }
}
</style>