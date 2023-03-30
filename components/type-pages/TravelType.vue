<template>
    <div class="travelTypeContainer">
        <a-row>
            <FilterTitle :title="'Safar turi'" @sendData="sendData" />
        </a-row>

        <a-row class="checkRow" :class="isOpen ? 'open' : 'close'">
            <a-row>
                <a-checkbox @change="onChangeP" class="commonP">
                    Shaxsiy
                </a-checkbox>
            </a-row>

            <a-row>
                <a-checkbox @change="onChangeG" class="commonP">
                    Jamoaviy
                </a-checkbox>
            </a-row>
        </a-row>
    </div>
</template>
<script>
import FilterTitle from './FilterTitle.vue';
export default {
    name: 'travel-type',
    components: { FilterTitle },
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        sendData() {
            this.isOpen = !this.isOpen
        },
        onChangeP(e) {
            this.$store.commit('changePersonalTravel', e.target.checked)
        },
        onChangeG(e) {
            this.$store.commit('changeGroupTravel', e.target.checked)
        }
    }
}
</script>
<style lang="scss">
.travelTypeContainer {
    margin-top: 20px;

    .checkRow {
        height: 0;
        overflow: hidden;
        margin-top: 12px;
        transform-origin: top;
        transition: 0.24s linear;

        &.close {
            transform: scaleY(0);
        }

        &.open {
            height: fit-content;
            transform: scaleY(1);
        }

        .commonP {
            color: #686868;
        }

        .ant-row {
            margin-top: 8px;



            .ant-checkbox-wrapper {

                .ant-checkbox-input {
                    border: 2px solid #e1e1e1;
                }

                .ant-checkbox-inner {
                    border: 1px solid #e1e1e1;
                }
            }
        }
    }
}
</style>