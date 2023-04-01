<template>
    <div class="dropItem">
        <div class="dropVisible">
            <div class="dropLeft">
                <img :src="require('../static/images/' + img)" alt="">
                <p class="descGr">{{ placehold }}</p>
            </div>
            <div class="dropIcon" @click="checkDrop = !checkDrop">
                <font-awesome-icon icon="fa-solid fa-chevron-down" />
            </div>
        </div>
        <div class="dropdownItems" :class="checkDrop ? 'visible' : 'hidden'">
            <div class="items" v-for="item in dropItems" :key="item.id">
                <a-row v-if="item.name">
                    <p class="descGr">{{ item.name }}</p>
                </a-row>
                <a-row v-else type="flex" justify="space-between">
                    <a-col :span="16">
                        <p class="commonP">{{ item.title }}</p>
                        <span class="miniP">{{ item.descript }}</span>
                    </a-col>
                    <a-col :span="3">
                        <a-checkbox @change="onChange(item.id, $event)">
                        </a-checkbox>
                    </a-col>
                </a-row>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app-drop',
    props: {
        placehold: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: ''
        },
        dropItems: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            checkDrop: false
        }
    },
    methods: {
        onChange(id, e) {
            // console.log(id, e.target.checked);
        },
    }
}
</script>
<style lang="scss">
.dropItem {
    width: 420px;
    height: 100px;
    position: relative;


    .dropVisible {
        background: #f3f3f3;
        border-radius: 80px;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .dropLeft {
            display: flex;
            align-items: center;
            column-gap: 12px;
        }

        .dropIcon {
            width: 50px;
            height: 50px;
            border-radius: 40px;
            background: #d5e2e2;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;


            svg {

                path {
                    fill: #027471;
                }
            }
        }

        p {
            margin: 0;
        }
    }

    .dropdownItems {
        width: 100%;
        border-radius: 16px;
        padding: 10px;
        box-sizing: border-box;
        position: absolute;
        top: 110px;
        background: #fff;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        row-gap: 4px;
        transform-origin: top;
        transition: 0.24s linear;
        z-index: 49;

        .items {
            padding: 12px;
            box-sizing: border-box;
            border-radius: 8px;

            .ant-col {
                height: fit-content;
            }

            span.miniP {
                color: #898989;
            }

            .ant-row-flex {
                padding: 0;
                align-items: center;

                .ant-checkbox-wrapper:hover .ant-checkbox-inner,
                .ant-checkbox:hover .ant-checkbox-inner,
                .ant-checkbox-input:focus+.ant-checkbox-inner {
                    border-color: #03a6a0;
                }

                .ant-checkbox {

                    .ant-checkbox-inner {
                        // border-color: #03a6a0;
                    }

                    &::after {
                        border: 1px solid #03a6a0;
                    }
                }

                .ant-checkbox-checked {
                    .ant-checkbox-inner {
                        background: #03a6a0;
                    }
                }


            }

            &:hover {
                cursor: pointer;
                background: #f2f2f2;
            }

            p {
                margin: 0;
            }
        }

        &.hidden {
            transform: scaleY(0);
        }

        &.visible {
            transform: scaleY(1);
        }
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .dropItem {
        width: 100% !important;
    }
}
</style>