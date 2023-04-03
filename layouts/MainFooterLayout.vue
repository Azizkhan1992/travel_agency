<template>
    <div class="footerLayout">
        <div class="footerWrapper common">
            <a-row type="flex" justify="space-between" class="topRow">
                <a-col :lg="6" :xxl="4" class="logoCol">
                    <a-row>
                        <img src="../static/images/Logo.png" alt="" class="logo">
                    </a-row>

                    <a-row type="flex" justify="space-between">
                        <a-col v-for="item in socials" :key="item.id">
                            <img :src="require('../static/images/'+item.img)" alt="">
                        </a-col>
                    </a-row>
                </a-col>
                <a-col :lg="4" :xxl="3" class="companyCol col">
                    <h3>Kompaniya</h3>

                    <nuxt-link to="about-us">Biz haqimizda</nuxt-link>

                    <nuxt-link to="#">Bizning jamoa</nuxt-link>
                </a-col>
                <a-col :lg="4" :xxl="3" class="supportCol col">
                    <h3>Qo‘llab quvatlash</h3>

                    <nuxt-link to="contact">Biz bilan aloqa</nuxt-link>

                    <nuxt-link to="#">Yordam markazi</nuxt-link>
                </a-col>
                <a-col :lg="4" :xxl="3" class="contactCol">
                    <h3>Telefon raqam:</h3>

                    <p>+998 95 144-04-44</p>

                    <p>+998 95 144-04-40</p>
                </a-col>
                <a-col :lg="5" :xxl="4" class="contactCol">
                    <h3>Email:</h3>
                    <p>info@avantagetravel.com</p>
                </a-col>
            </a-row>
            <hr/>

            <a-row type="flex" justify="space-between" class="bottomCol">
                <a-col :span="7">
                    <p>Copyright © Avantage Travel. All Rights Reserved.</p>
                </a-col>
                <a-col :span="2" class="bCols">
                    <span>Legal Notice</span>
                </a-col>
                <a-col :span="2" class="bCols">
                    <span>Privacy Policy</span>
                </a-col>
                <a-col :span="2" class="bCols">
                    <span>Cookies</span>
                </a-col>
                <a-col :span="2" class="bCols">
                    <span>Terms & Conditions</span>
                </a-col>
                <a-col :span="7" class="payCol">
                    <a-row type="flex" justify="space-between">
                        <a-col v-for="pay in payments" :key="pay.id">
                            <img :src="require('../static/images/'+pay.img)" alt="">
                        </a-col>
                    </a-row>
                </a-col>
            </a-row>
        </div>
    </div>
</template>
<script>
export default {
    name: 'footer-layout',
    data(){
        return{
            socials: [
        {
            id: 1,
            img: 'tg.png'
        },
        {
            id: 2,
            img: 'ins.png'
        },
        {
            id: 3,
            img: 'you.png'
        },
        {
            id: 4,
            img: 'tw.png'
        },
        {
            id: 5,
            img: 'fb.png'
        }
    ],
    payments: [
        {
            id: 1,
            img: 'pay1.png'
        },
        {
            id: 2,
            img: 'pay2.png'
        },
        {
            id: 3,
            img: 'pay3.png'
        },
        {
            id: 4,
            img: 'pay4.png'
        }
    ]
        }
    }
}
</script>
<style lang="scss">
.footerLayout{
    background: #048a85;
    margin-top: 120px;

    .footerWrapper{
        padding: 55px 0 35px 0;
        box-sizing: border-box;

        hr{
            margin: 48px 0 24px 0;
            border: 1px solid #fff;
            opacity: 0.2;
        }

        .ant-row-flex{

            .bCols{
                span{
                    font-size: 1.15rem;
                    line-height: 140%;
                    font-weight: 400;
                    color: #fff;
                    opacity: 0.8;
                }
            }

            &.bottomCol{
                .ant-col{
                    p{
                        font-size: 1.15rem;
                        line-height: 140%;
                        font-weight: 400;
                        color: #fff;
                    }
                }
            }

            .contactCol{
                h3{
                    font-size: 1.15rem;
                    line-height: 140%;
                    font-weight: 400;
                    opacity: 0.8;
                    color: #fff;
                }

                p{
                    font-size: 1.35rem;
                    line-height: 140%;
                    font-weight: 500;
                    color: #fff;
                }
            }

            .col{
                h3{
                    font-size: 1.35rem;
                    line-height: 140%;
                    font-weight: 500;
                    color: #fff;
                }

                a{
                    display: block;
                    margin-bottom: 8px;
                    font-size: 1.15rem;
                    line-height: 140%;
                    font-weight: 400;
                    color: #fff;
                }
            }

            .logoCol{
                display: flex;
                flex-direction: column;
                row-gap: 24px;

                .ant-row-flex{

                    .ant-col{
                        width: 40px;
                        height: 40px;
                        background: rgba(255, 255, 255, 0.15);
                        border-radius: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .footerLayout{

        .footerWrapper{

            .ant-row-flex{

                .bCols{
                    span{
                        font-size: 0.85rem !important;
                    }
                }

                .payCol{
                    .ant-col{

                        img{
                            width: 62px;
                        }
                    }
                }

                &.bottomCol{
                    .ant-col{

                        p{
                            font-size: 0.85rem !important;
                        }
                    }
                }

                .contactCol{
                    h3{
                        font-size: 0.85rem !important;
                    }

                    p{
                        font-size: 1rem !important;
                    }
                }

                .col{

                    h3{
                        font-size: 1.15rem !important;
                    }

                    a{
                        font-size: 0.85rem !important;
                    }
                }

                .logoCol{

                    img.logo{
                        width: 190px;
                    }
                }
            }
        }
    }
}
</style>