<template>
    <div class="filterContainer">
        <h3>{{ $t('type_filter') }}</h3>
        <FilterTop />
        <Selector/>
        <hr class="filHr"/>
        <RangeFilter/>
        <hr class="filHr"/>
        <SelectDate/>
        <hr class="filHr">
        <TravelType/>
        <hr class="filHr">
        <ChildrenAge/>
        <hr class="filHr">
        <SelectPrice/>
    </div>
</template>
<script>
import FilterTop from './FilterTop.vue';
import Selector from '../Selector.vue';
import RangeFilter from '../RangeFilter.vue';
import SelectDate from './SelectDate.vue';
import TravelType from './TravelType.vue';
import ChildrenAge from './ChildrenAge.vue';
import SelectPrice from './SelectPrice.vue';
export default {
    name: 'filter-container',
    components: { FilterTop, Selector, RangeFilter, SelectDate, TravelType, ChildrenAge, SelectPrice }
}
</script>
<style lang="scss">
.filterContainer{
    height: fit-content;

    .filHr{
        margin-top: 20px;
    }
}
</style>