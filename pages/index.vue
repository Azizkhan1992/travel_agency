<template>
  <div class="mainContainer">
    <MainHeaderLayout />
    <div class="homeContent">
      <PageListModal :class="$store.state.isOpen ? 'open' : 'close'"/>
      <HotOffers />
      <GreatLeisure />
      <HomeAdvantage />
      <HomeWise />
      <HomeSupport/>
      <HomeDirection/>
    </div>
    <MainFooterLayout />
  </div>
</template>

<script>
import MainHeaderLayout from '../layouts/MainHeaderLayout.vue';
import MainFooterLayout from '../layouts/MainFooterLayout.vue';
import HotOffers from '../components/home-pages/HotOffers.vue';
import GreatLeisure from '../components/home-pages/GreatLeisure.vue';
import HomeAdvantage from '../components/home-pages/HomeAdvantage.vue';
import HomeWise from '../components/home-pages/HomeWise.vue';
import HomeSupport from '../components/home-pages/HomeSupport.vue';
import HomeDirection from '../components/home-pages/HomeDirection.vue';
import PageListModal from '../components/modals/PageListModal.vue';
export default {
  name: 'IndexPage',
  components: { MainHeaderLayout, MainFooterLayout, HotOffers, GreatLeisure, HomeAdvantage, HomeWise, HomeSupport, HomeDirection, PageListModal }
}
</script>
<style lang="scss">
.mainContainer{
  position: relative;
}
.homeContent {
  margin-top: 200px;
}
</style>
