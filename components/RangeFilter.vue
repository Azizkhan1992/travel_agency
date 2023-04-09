<template>
    <div class="rangeContainer">
        <a-row type="flex" justify="space-between" class="openRow" >
            <p class="mainP" @click="isOpen = !isOpen">{{ $t('type_continious') }}</p>
            <font-awesome-icon :icon="['fas', 'chevron-down']" @click="isOpen = !isOpen" :class="isOpen ? 'active' : ''" />
        </a-row>

        <a-row class="filterRow" :class="isOpen ? 'open' : 'close'">
            <a-row type="flex" justify="space-between" class="limitRow">
            <a-col>
                <p class="commonP">min: <span class="commonP">1 {{ $t('day') }}</span></p>
            </a-col>
            <a-col>
                <span class="commonP">10 {{$t('day')}}+</span>
            </a-col>
        </a-row>

        <a-row class="rangeRow">
            <a-slider range :step="1" :max="30" :min="1" :default-value="[1, 10]" @change="onChange" @afterChange="onAfterChange" />
        </a-row>
        </a-row>
    </div>
</template>
<script>
export default {
    name: 'app-range',
    data(){
        return{
            isOpen: false
        }
    },
    methods: {
        onChange(value) {
            // console.log('change: ', value);
        },
        onAfterChange(value) {
            this.$store.commit('changeContinious', value[1])
        },
    }
}
</script>
<style lang="scss">
.rangeContainer {
    margin-top: 20px;

    .rangeRow{
        .ant-slider{
            &:hover{
                .ant-slider-handle{
                    border: 2px solid #03a6a0;
                }
            }
        }
        .ant-slider-track{
            background: #03a6a0;
        }

        .ant-slider-handle{
            border: 2px solid #03a6a0;
        }
    }

    .filterRow{
        transform-origin: top;
        transition: 0.24s linear;
        height: 0;
        overflow: hidden;

        &.close{
            transform: scaleY(0);
        }

        &.open{
            transform: scaleY(1);
            height: fit-content;
        }
    }

    .ant-row-flex {
        align-items: center;

        svg{
            color: #2067e4;
            transition: 0.24s linear;

            &.active{
                transform: rotate(180deg);
            }
        }

        &.openRow{
            cursor: pointer;
        }

        &.limitRow{
            margin-top: 12px;
        }

        span{
            color: #03a3a9;
        }
    }
}
</style>