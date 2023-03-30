<template>
    <div class="selectPriceContainer">
        <a-row>
            <FilterTitle :title="'Narx'" @sendData="sendData" />
        </a-row>
        <a-row class="priceRow" :class="isOpen ? 'open' : 'close'">
            <a-row type="flex" justify="space-between">
                <a-col :span="10">
                    <a-input :defaultValue="100" v-model="minPrice" @change="minChange" placeholder="Narx" />
                </a-col>
                <a-col :span="10">
                    <a-input :defaultValue="10000" v-model="maxPrice" placeholder="Narx" />
                </a-col>
            </a-row>
            <a-row type="flex" justify="space-between" class="limitRow">
                <a-col>
                    <p class="commonP">min: <span class="commonP">$100</span></p>
                </a-col>
                <a-col>
                    <p class="commonP">max: <span class="commonP">$10000</span></p>
                </a-col>
            </a-row>
            <a-row>
                <a-slider range :min="100" :max="10000" :step="10" :default-value="[100, 2000]"
                    @afterChange="onAfterChange" />
            </a-row>
        </a-row>
    </div>
</template>
<script>
import FilterTitle from './FilterTitle.vue'
export default {
    name: 'select-price',
    components: { FilterTitle },
    data() {
        return {
            minPrice: 100,
            maxPrice: 10000,
            isOpen: false
        }
    },
    methods: {
        onAfterChange(value) {
            this.minPrice = value[0]
            this.maxPrice = value[1]
            console.log(value)
        },
        minChange(e) {
            this.minPrice = e.target.value
            console.log(this.minPrice)
        },
        sendData() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>
<style lang="scss">
.selectPriceContainer {
    margin-top: 20px;

    .ant-slider {
        color: #03a6a0;

        &:hover {

            .ant-slider-handle {
                border: 2px solid #03a6a0;
            }
        }

        .ant-slider-track {
            background: #03a6a0;
        }

        .ant-slider-handle {
            border: 2px solid #03a6a0;
        }
    }

    .limitRow {
        margin: 12px 0;

        span.commonP {
            color: #03a39d;
        }

        .commonP {
            font-weight: 500;
        }
    }

    .priceRow {
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
    }
}
</style>