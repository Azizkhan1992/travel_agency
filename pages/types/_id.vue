<template>
    <div class="innerTypeContainer">
        <PagesHeaderLayout/>
        
        <typeInnerContent/>
        <MainFooterLayout/>
    </div>
</template>
<script>
import PagesHeaderLayout from '../../layouts/PagesHeaderLayout.vue';
import PagesTopContent from '../../components/PagesTopContent.vue';
import MainFooterLayout from '../../layouts/MainFooterLayout.vue';
import typeInnerContent from '../../components/type-pages/type-inner-pages/typeInnerContent.vue';
export default {
    name: 'inner-type',
    components: {PagesHeaderLayout, MainFooterLayout, PagesTopContent, typeInnerContent}
}
</script>
<style lang="scss">
.innerTypeContainer{
    .topContainer{
        height: fit-content;
    }
    .innerContent{
        width: 1560px !important;
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .innerTypeContainer{

        .innerContent{
            width: 920px !important;
        }
    }
}
</style>