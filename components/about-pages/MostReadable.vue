<template>
    <div class="mostReadContainer common">
        <h3 class="titleT">Eng ko‘p o‘qilgan maqolalar</h3>

        <a-row class="descRow">
            <InnerSwiper :swipe-items="mostRead" :is-btn="true"/>
        </a-row>
        <a-row class="planshRow">
            <InnerSwiper :swipe-items="mostRead" :is-btn="true" :items="3"/>
        </a-row>
    </div>
</template>
<script>
import InnerSwiper from '../InnerSwiper.vue';
export default {
    name: 'most-read',
    components: {InnerSwiper},
    data(){
        return{
            mostRead: this.$store.state.moreRead
        }
    }
}
</script>
<style lang="scss">
.mostReadContainer{
    margin-top: 120px;
}
</style>