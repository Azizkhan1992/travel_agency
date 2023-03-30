<template>
    <div class="filterTopContainer">
        <a-row type="flex" justify="space-between">
            <a-col><p class="miniP">3 ta filter tanlandi</p></a-col>
            <a-col>
                <font-awesome-icon :icon="['fas', 'chevron-up']" />
            </a-col>
        </a-row>

        <a-row>
            <a-col class="datePickerCol">
            </a-col>
        </a-row>
        <a-row>
            <a-col class="selectCol">   
            </a-col>
        </a-row>
    </div>
</template>
<script>
import RangeDatepicker from '../RangeDatepicker.vue'
import Multiselect from '../Multiselect.vue';
export default {
    name: 'filter-top',
    components: {RangeDatepicker, Multiselect},
    data(){
        return{
            childs: this.$store.state.selectChilds
        }
    }
}
</script>
<style lang="scss">
.filterTopContainer{
    margin-top: 20px;
    background: #03a39d;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 8px;
    color: #fff;

    .ant-row{

        .datePickerCol{
            margin-top: 12px;
        }
    }

    .ant-row-flex{

        p{
            color: #fff;
        }
    }
}
</style>