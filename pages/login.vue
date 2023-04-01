<template>
    <div class="loginContainer">

        <div class="headerWr">
            <PagesHeaderLayout />
        </div>

        <div class="Wrapper login" v-if="forgot === false">
            <a-row>
                <h3>Kirish</h3>
            </a-row>
            <a-row class="mailRow row">
                <label for="email">Email address:</label>
                <a-input placeholder="Email" id="email" type="email" />
            </a-row>
            <a-row class="passwordRow row">
                <label for="password">Password:</label>
                <a-input placeholder="Password" id="password" type="password" />
            </a-row>
            <a-row>
                <a-button type="primary" class="travelB">
                    Kirish
                </a-button>
            </a-row>
            <a-row type="flex" justify="center">
                <p class="commonP" @click="forgot = true">Parolni unutdingizmi?</p>
            </a-row>
            <a-row type="flex" justify="center">
                <span class="commonP">Avval ro‘yhatdan o‘tmaganmisiz?</span>
            </a-row>
            <a-row>
                <a-button type="dashed" class="dBtn">
                    Ro‘yhatdan o‘tish
                </a-button>
            </a-row>
        </div>

        <div class="Wrapper forgot" v-else-if="isPassword === false">
            <a-row>
                <h3>Parolni tiklash</h3>
            </a-row>
            <a-row class="row">
                <label for="email1">Email address:</label>
                <a-input placeholder="Email" id="email1" type="email" />
            </a-row>
            <a-row>
                <a-button type="primary" class="travelB" @click="isPassword = true">
                    Kirish
                </a-button>
            </a-row>
        </div>

        <div class="Wrapper password" v-if="isPassword">
            <a-row>
                <h3>Parolni tiklash</h3>
            </a-row>
            <a-row>
                <span class="commonP">Iltimos, elektron pochtangizni tekshiring</span>
            </a-row>
            <a-row>
                <p class="mainP">Agar sizning elektron pochtangiz ma'lumotlar bazasida mavjud bo'lsa, siz qayta tiklash havolasini olasiz. Iltimos, elektron pochtangizni tekshiring va parolni tiklash uchun havolani bosing. Agar bu 5 daqiqadan ko'proq vaqt talab qilsa, keraksiz xatingizni tekshiring.</p>
            </a-row>
        </div>
    </div>
</template>
<script>
import PagesHeaderLayout from '../layouts/PagesHeaderLayout.vue';
export default {
    name: 'login-page',
    components: { PagesHeaderLayout },
    data(){
        return{
            forgot: false,
            isPassword: false
        }
    }
}
</script>
<style lang="scss">
.loginContainer {
    background: #f2f2f2;
    padding-bottom: 64px;
    box-sizing: border-box;

    .headerWr {
        width: 100%;
        background: #fff;
    }

    .Wrapper {
        width: 632px;
        height: 628px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #fff;
        border-radius: 16px;
        padding: 32px;
        box-sizing: border-box;
        margin: 60px auto;

        &.password{
            height: 320px;

            .ant-row{

                span.commonP{
                    color: #2067e4;
                }
            }
        }

        &.forgot{
            height: 328px;
        }

        .ant-row-flex{

            p{
                color: #2067e4;
                cursor: pointer;
            }
        }

        .row{

            .ant-input{
                height: 64px;
                border-radius: 8px;
                border: 1px solid #e9e9e9;
                padding: 18px 20px;
                box-sizing: border-box;
            }

            label{
                display: block;
                font-size: 1.25rem;
                line-height: 140%;
                font-weight: 500;
                color: #484848;
                margin-bottom: 6px;
            }
        }

        h3{
            font-size: 2rem;
            line-height: 36px;
            font-weight: 500;
            color: #212121;
        }
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .loginContainer{

        .Wrapper{
            height: 532px;

            .row{

                .ant-input{
                    height: 48px !important;
                }
            }
        }
    }
}
</style>