<template>
    <div class="breadcrumbContainer">
        <a-breadcrumb separator=">">
            <a-breadcrumb-item>
                <nuxt-link class="commonP link" to="/">Asosiy sahifa</nuxt-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item class="commonP">
                <nuxt-link class="commonP link" to="types">Turlar</nuxt-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item class="commonP prev">Cheap Egypt holiday to Cairo-Luxor-Aswan-Abu Simbel 11 Days with sleeping train</a-breadcrumb-item>
            <a-breadcrumb-item class="commonP next">Check</a-breadcrumb-item>
        </a-breadcrumb>
    </div>
</template>
<script>
export default {
    name: 'travel-breadcrumb'
}
</script>
<style lang="scss">
.breadcrumbContainer{
    .prev{
        color: rgba(0, 0, 0, 0.45);
    }
    .next{
        color: #484848 !important;
        font-weight: 500;
    }
}
</style>