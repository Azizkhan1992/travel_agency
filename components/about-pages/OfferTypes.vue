<template>
    <div class="offerTypesContainer common">
        <a-row class="titleRow">
            <h3 class="titleT">Taklif turlar</h3>
        </a-row>

        <a-row class="descRow">
            <InnerSwiper :swipe-items="offerTypes"/>
        </a-row>

        <a-row class="planshRow">
            <InnerSwiper :swipe-items="offerTypes" :items="3"/>
        </a-row>
    </div>
</template>
<script>
import InnerSwiper from '../InnerSwiper.vue';
export default {
    name: 'offer-types',
    components: {InnerSwiper},
    data(){
        return{
            offerTypes: this.$store.state.offerTypes
        }
    }
}
</script>
<style lang="scss">
.offerTypesContainer{
    margin-top: 120px;
}
</style>