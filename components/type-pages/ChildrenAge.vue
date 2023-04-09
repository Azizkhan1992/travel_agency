<template>
    <div class="childAgeContainer">
        <a-row>
            <FilterTitle :title="children_age" @sendData="sendData" />
        </a-row>
        <a-row class="ageRow" :class="isOpen ? 'open' : 'close'">
            <a-row>
                <span class="commonP">{{ $t('children_age') }}</span>
            </a-row>
            <a-row class="selectRow">
                <a-select :default-value="provinceData[0]" style="width: 120px" @change="handleProvinceChange">
                    <a-select-option v-for="province in provinceData" :key="province">
                        {{ province }}
                    </a-select-option>
                </a-select>
            </a-row>
        </a-row>
    </div>
</template>
<script>
import FilterTitle from './FilterTitle.vue'
export default {
    name: 'app-age',
    components: { FilterTitle },
    data() {
        return {
            provinceData: ['1 yosh', '2 yosh', '3 yosh', '4 yosh', '5 yosh', '6 yosh', '7 yosh'],
            isOpen: false,
            children_age: {
                uz: 'Yosh bolalimisiz',
                ru: 'У вас есть маленький ребенок?',
                en: 'Do you have a young child?'
            }
        }
    },
    methods: {
        handleProvinceChange(value) {
            this.$store.commit('changeChildrenAge', value)
        },
        sendData(){
            this.isOpen = !this.isOpen
        }
    }
}
</script>
<style lang="scss">
.childAgeContainer {
    margin-top: 20px;

    .selectRow{
        margin-top: 12px;

        .ant-select{
            width: 100% !important;

            .anticon{
                color: #646464;
            }
        }
    }

    .ageRow {
        margin-top: 12px;
        height: 0;
        overflow: hidden;
        transform-origin: top;
        transition: 0.24s linear;

        &.close{
            transform: scaleY(0);
        }

        &.open{
            height: fit-content;
            transform: scaleY(1);
        }

        .commonP {
            color: #686868;
        }
    }
}
</style>