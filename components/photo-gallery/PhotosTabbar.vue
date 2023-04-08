<template>
    <section class="photoTabContainer common">
        <a-row class="tabRow">
            <a-tabs :default-active-key="1" @change="callback">
                <a-tab-pane v-for="tab in photoTabs" :key="tab.id" :tab="tab.galleryName">

                    <a-row class="contentRow" type="flex" justify="space-between">
                        <a-col :span="6" v-for="gallery in tab.photoGallery" :key="gallery.id">
                            <img :src="require('../../static/images/photoGallery/' + gallery.img)" alt="">

                            <a-row class="titleRow">
                                <a-row><span class="miniP">{{ gallery.date }}</span></a-row>
                                <a-row>
                                    <h3 class="mainP">{{ gallery.title }}</h3>
                                </a-row>
                                <a-row>
                                    <nuxt-link to="#" class="commonP">Batafsil
                                        <font-awesome-icon :icon="['fass', 'angle-right']" />
                                    </nuxt-link>
                                </a-row>
                            </a-row>
                        </a-col>
                    </a-row>

                    <a-pagination v-model="current" :total="50" show-less-items />
                </a-tab-pane>
            </a-tabs>
        </a-row>
    </section>
</template>
<script>
export default {
    name: 'photo-tabbar',
    data() {
        return {
            photoTabs: this.$store.state.photoGallery,
            current: 2
        }
    },
    methods: {
        callback(key) {
            // console.log(key);
        },
    }
}
</script>
<style lang="scss">
.photoTabContainer {
    margin-top: 64px;

    .ant-tabs {

        .ant-pagination {
            margin-top: 40px;
            display: flex;
            justify-content: center;

                li {
                    border-radius: 12px;

                    &.ant-pagination-prev {

                        &:hover {
                            background: #f2f2f2;

                            a {
                                border: 0;
                            }
                        }
                    }

                    &.ant-pagination-next {

                        &:hover {
                            a {
                                border: 0;
                            }
                        }
                    }

                    &.ant-pagination-item-active {
                        background: #03a6a0;
                        border: 0;

                        &:hover {

                            a {
                                color: #fff;
                            }
                        }

                        a {
                            background: #03a6a0;
                            color: #fff;
                        }
                    }

                    &:hover {
                        border: 0;

                        a {
                            color: #03a6a0;
                        }
                    }

                    a {
                        background: #f2f2f2;
                        border-radius: 12px;
                    }
                }

                .ant-pagination-item-link {
                    background: #f2f2f2;
                }
            
        }

        .ant-tabs-bar {

            .ant-tabs-nav-scroll {

                .ant-tabs-nav {
                    width: 100%;

                    .ant-tabs-ink-bar {
                        display: none !important;
                    }

                    div {
                        display: flex;
                        justify-content: space-between;
                        background: #f2f2f2;
                        border-radius: 12px;
                        padding: 6px;
                        box-sizing: border-box;

                        .ant-tabs-tab {
                            width: calc(32% - 12px);
                            display: flex;
                            justify-content: center;
                            font-size: 1.25rem;
                            line-height: 140%;
                            font-weight: 500;
                            color: #898989;

                            &::before {
                                display: none;
                            }
                        }

                        .ant-tabs-tab-active {
                            background: #03a6a0;
                            height: 100%;
                            color: #fff;

                        }
                    }
                }
            }
        }
    }

    .tabRow {
        .contentRow {
            margin-top: 40px;
            row-gap: 40px;

            .titleRow {
                display: flex;
                flex-direction: column;
                row-gap: 8px;

                a.commonP {
                    display: inline-block;
                    margin-top: 8px;
                    color: #03a6a0;
                }
            }


            .ant-col {
                width: 366px;
                height: 394px;
                box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
                border-radius: 16px;
                padding: 20px;
                box-sizing: border-box;

                img {
                    width: 100%;
                }
            }
        }
    }
}

@media screen and (max-width: 1560px) and (min-width: 960px) {
    .photoTabContainer {

        .tabRow {

            .contentRow {

                .ant-col {
                    width: 296px !important;
                    height: 336px !important;
                }
            }
        }
    }
}</style>