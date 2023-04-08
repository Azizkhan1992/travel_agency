<template>
    <div class="registerContainer">
        <div class="headerWrapper">
            <PagesHeaderLayout />
        </div>

        <div class="regWrapper">
            <a-row class="registerRow" type="flex" justify="space-between">
                <a-row>
                    <h3>Ro‘yhatdan o‘tish</h3>
                </a-row>
                <a-row class="nameRow row">
                    <label for="name">Full name:</label>
                    <a-input placeholder="Name" id="name" type="text" />
                </a-row>
                <a-row class="mailRow row">
                    <label for="email">Email:</label>
                    <a-input placeholder="Email" id="email" type="email" />
                </a-row>
                <a-row class="passwordRow row">
                    <label for="password">Enter password:</label>
                    <a-input placeholder="Password" id="password" type="password" />
                </a-row>
                <a-row class="passwordRow row">
                    <label for="password1">Repeat password:</label>
                    <a-input placeholder="Password" id="password1" type="password" />
                </a-row>
                <a-row>
                    <a-button type="dashed" class="travelB">
                        Ro‘yhatdan o‘tish
                    </a-button>
                </a-row>
                <a-row type="flex" justify="center">
                    <span class="commonP">Avval ro‘yhatdan o‘tmaganmisiz?</span>
                </a-row>
                <a-row>
                    <a-button type="primary" class="dBtn" @click="goToLogin">
                        Kirish
                    </a-button>
                </a-row>


            </a-row>
        </div>
    </div>
</template>
<script>
import PagesHeaderLayout from '../layouts/PagesHeaderLayout.vue'
export default {
    name: 'app-register',
    components: { PagesHeaderLayout },
    methods: {
        goToLogin(){
            this.$router.push({name: 'login'})
        }
    }
}
</script>
<style lang="scss">
.registerContainer {
    background: #f2f2f2;

    .regWrapper {
        width: 100%;
        height: 100%;
        padding-bottom: 64px;
        box-sizing: border-box;

        .registerRow {
            width: 632px;
            height: 860px;
            margin: 60px auto;
            background: #fff;
            border-radius: 16px;
            padding: 32px;
            box-sizing: border-box;
            flex-direction: column;

            .row{

                label{
                    display: block;
                    font-size: 1.25rem;
                    line-height: 140%;
                    font-weight: 500;
                    color: #484848;
                    margin-bottom: 6px;
                }

                .ant-input{
                    height: 64px;
                    border-radius: 8px;
                    border: 1px solid #e9e9e9;
                }
            }

            h3 {
                font-size: 2rem;
                line-height: 140%;
                font-weight: 500;
                color: #212121;
            }
        }
    }

    .headerWrapper {
        width: 100%;
        background: #fff;
    }
}

@media screen and (max-width: 1560px) and (min-width: 960px) {
    .registerContainer{

        .regWrapper{

            .registerRow{
                height: 760px;

                .row{

                    .ant-input{
                        height: 48px;
                    }
                }
            }
        }
    }
}
</style>