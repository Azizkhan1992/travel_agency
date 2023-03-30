<template>
    <div class="selectDateContainer">
        <a-row>
            <FilterTitle :title="'Safar kunlari'" @sendData="sendData"/>
        </a-row>
        <a-row :class="isOpen ? 'open' : 'close'" class="dateRow">
            <a-row>
            <Datepicker :placeholder="'Boshlanish sanasi'" :dateType="'begin'"/>
        </a-row>
        <a-row>
            <Datepicker :placeholder="'Tugash sanasi'" :dateType="'end'"/>
        </a-row>
        </a-row>
    </div>
</template>
<script>
import Datepicker from '../Datepicker.vue'
import FilterTitle from './FilterTitle.vue';
export default {
    name: 'select-date',
    components: {Datepicker, FilterTitle},
    data(){
        return{
            isOpen: false
        }
    },
    methods: {
        sendData(){
            this.isOpen = !this.isOpen
        }
    }
}
</script>
<style lang="scss">
.selectDateContainer{
    margin-top: 20px;

    .ant-row{
        transform-origin: top;
        transition: 0.24s linear;

        &.dateRow{
            height: 0;
            overflow: hidden;
        }

        &.close{
            transform: scaleY(0);
        }

        &.open{
            height: fit-content;
            transform: scaleY(1);
        }
    }
}
</style>