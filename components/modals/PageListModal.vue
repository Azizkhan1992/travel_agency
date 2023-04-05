<template>
    <section class="pageListContainer">
        <div class="pageListWrapper">
            <div class="listItems"> 
                <a-row>
                    <font-awesome-icon :icon="['fass', 'xmark']" size="3x" @click="close" class="closeIcon"/>
                </a-row>
                <a-row type="flex" justify="space-between" class="menuRow">
                    <a-col :span="9">
                        <a-row>
                            <p class="menuTitle">Menu:</p>
                        </a-row>
                        
                        <a-row class="menu" v-for="menu in menus" :key="menu.id">
                            <nuxt-link :to="menu.url">{{ menu.name }}</nuxt-link>
                        </a-row>
                    </a-col>
                    <a-col :span="9">
                        <a-row>
                            <p class="menuTitle">Ijtimoiy tarmoqlar:</p>
                        </a-row>

                        <a-row class="socials" v-for="social in socials" :key="social.id">
                            <img :src="require('../../static/images/'+social.img)" alt="">
                            <span @click="goToSite(social.url)">{{ social.name }}</span>
                        </a-row>
                    </a-col>
                </a-row>

                <a-row class="contacts">
                    <a-col :span="11">
                        <a-row>
                            <p class="menuTitle">Ma'lumot uchun raqamlar:</p>
                        </a-row>

                        <a-row class="phone"><span>{{ contact.phone1 }}</span></a-row>
                        <a-row class="phone"><span>{{ contact.phone2 }}</span></a-row>
                    </a-col>
                    <a-col :span="11">
                        <a-row>
                            <p class="menuTitle">Email:</p>
                        </a-row>

                        <a-row>
                            <span>{{ contact.email }}</span>
                        </a-row>
                    </a-col>
                </a-row>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'page-list',
    data(){
        return{
            menus: this.$store.state.menu,
            socials: this.$store.state.socials,
            contact: this.$store.state.contacts
        }
    },
    methods: {
        close(){
            this.$store.commit('changeOpen')
        },
        goToSite(link){
            window.open(`${link}`, '_blanc')
        }
    }
}
</script>
<style lang="scss">
.pageListContainer{
    width: 100%;
    height: 1080px;
    background: rgba(33, 33, 33, 0.4);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    transform-origin: top;
    transition: 0.42s linear;

    &.close{
        transform: scaleY(0);
    }

    &.open{
        transform: scaleY(1);
    }

    .pageListWrapper{
        width: 798px;
        height: 100%;
        background: #fff;
        padding-top: 42px;
        box-sizing: border-box;

        .listItems{
            width: 588px;
            margin: 0 32px 0 180px;
            display: flex;
            flex-direction: column;
            row-gap: 120px;

            .ant-row{

                &.contacts{

                    span{
                        font-size: 1.35rem;
                        line-height: 140%;
                        font-weight: 400;
                        color: #212121;
                    }
                }

                p.menuTitle{
                        font-size: 1.25rem;
                        line-height: 140%;
                        font-weight: 400;
                        color: #898989;
                        margin: 0;
                        margin-bottom: 24px;
                    }

                &.socials{
                    display: flex;
                    align-items: center;
                    column-gap: 8px;
                    margin-bottom: 8px;
                    cursor: pointer;


                    span{
                        font-size: 1.5rem;
                        line-height: 140%;
                        font-weight: 400;
                        color: #212121;
                    }
                }

                .closeIcon{
                    cursor: pointer;
                }
            }


            .ant-row-flex{

                &.menuRow{

                    a{
                        display: block;
                        margin-bottom: 12px;
                        font-size: 2.25rem;
                        line-height: 140%;
                        font-weight: 400;
                        color: #212121;
                    }
                }

                
            }
        }
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .pageListContainer{
        height: 560px !important;

        .pageListWrapper{
            width: 798px;

            .listItems{
                width: 598px !important;
                row-gap: 48px !important;

                .ant-row{

                    &.contacts{
                        
                        span{
                            font-size: 1rem !important;
                        }
                    }

                    &.socials{

                        span{
                            font-size: 1rem !important;
                        }
                    }
                }

                .ant-row-flex{

                    &.menuRow{

                        a{
                            font-size: 1.5rem !important;
                            margin-bottom: 6px !important;
                        }
                    }
                }
            }
        }
    }
}
</style>