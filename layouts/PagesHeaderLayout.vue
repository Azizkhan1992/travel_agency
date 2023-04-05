<template>
    <header class="pagesHeaderContainer common">
        <PageListModal :class="$store.state.isOpen ? 'open' : 'close'"/>
        <a-row type="flex" justify="space-between">
            <a-col :span="7">
                <font-awesome-icon :icon="['fas', 'bars']" size="3x" class="open" @click="open"/>
            </a-col>

            <a-col :span="5">
                <nuxt-link to="/">
                    <img src="../static/images/logo3.png" alt="" class="pageLogo">
                </nuxt-link>
            </a-col>

            <a-col :span="9" class="itemsCol">
                <a-row type="flex" justify="space-between" class="ItemsRow">
                    <a-col class="item search" @mouseover="isSearch = true" @mouseleave="isSearch = false" :class="isSearch ? 'active' : 'deactive'">
                        <a-input placeholder="Izlang" class="searchI" :class="isSearch ? 'open' : 'close'" />
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" size="2x"/>
                    </a-col>

                    <a-col :span="4" class="item world" @click="isLang = ! isLang">
                        <font-awesome-icon :icon="['fas', 'globe']" size="2x"/>
                        <SelectLanguage :class="isLang ? 'open' : 'close'"/>
                    </a-col>

                    <a-col :span="4" class="item user" @click="goToLogin">
                        <font-awesome-icon :icon="['fas', 'user']"  size="2x"/>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </header>
</template>
<script>
import PageListModal from '../components/modals/PageListModal.vue';
import SelectLanguage from '../components/SelectLanguage.vue';
export default {
    name: 'pages-header',
    components: {PageListModal, SelectLanguage},
    data(){
        return{
            isLang: false,
            isSearch: false
        }
    },
    methods: {
        open(){
            this.$store.commit('changeOpen')
        },
        goToLogin(){
            this.$router.push({name: 'login'})
        }
    }
}
</script>
<style lang="scss">
.pagesHeaderContainer{
    height: 120px;
    padding: 24px 0;
    box-sizing: border-box;
    position: relative;

    .ant-row-flex{

        .itemsCol{

            .ItemsRow{
                justify-content: flex-end;
                column-gap: 16px;

                
            }

            .item{
                width: 56px;
                height: 56px;
                border-radius: 12px;
                background: #f2f2f2;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                &.active{
                    width: fit-content;
                    max-width: 146px;
                    padding: 0 8px;
                    box-sizing: border-box;
                    column-gap: 4px;
                }

                .searchI{
                    transform-origin: right;
                    transition: 0.24s linear;
                    background: rgba(242, 242, 242, 0.2);
                    border-radius: 12px;
                    height: 42px;

                    &.close{
                        display: none;
                        transform: scaleX(0);
                    }

                    &.open{
                        transform: scaleX(1);
                    }
                }
            }
        }

        img.pageLogo{
            cursor: pointer;
        }

        svg.open{
            cursor: pointer;
        }
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .pagesHeaderContainer{

        .ant-row-flex{

            img.pageLogo{
                width: 190px !important;
            }
        }
    }
}
</style>