<template>
    <main class="checkPaymentContainer">
        <PagesHeaderLayout />

        <section class="common">
            <a-row>
            <a-col :span="16">
                <TravelBreadcrumb/>
            </a-col>
            <a-col :span="7">

            </a-col>
        </a-row>

        <a-row type="flex" justify="space-between">
            <a-col :span="16">
                <CheckTravellers/>
            </a-col>
            <a-col :span="7">
                <CheckTitle/>
            </a-col>
        </a-row>
        </section>

        <MainFooterLayout/>
    </main>
</template>
<script>
import CheckTravellers from '../components/check-payment/CheckTravellers.vue';
import TravelBreadcrumb from '../components/TravelBreadcrumbs.vue';
import PagesHeaderLayout from '../layouts/PagesHeaderLayout.vue';
import CheckTitle from '../components/check-payment/CheckTitle.vue';
import MainFooterLayout from '../layouts/MainFooterLayout.vue';
export default {
    name: 'check-payment',
    components: { PagesHeaderLayout, TravelBreadcrumb, CheckTravellers, CheckTitle, MainFooterLayout }
}
</script>