<template>
    <footer class="footerLayout">
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
                    <h3>{{ $t('company') }}</h3>

                    <nuxt-link to="about-us">{{ $t('about_us') }}</nuxt-link>

                    <nuxt-link to="our-team">{{ $t('our_team') }}</nuxt-link>
                </a-col>
                <a-col :lg="4" :xxl="3" class="supportCol col">
                    <h3>{{ $t('footer_support') }}</h3>

                    <nuxt-link to="contact">{{ $t('contact_us') }}</nuxt-link>

                    <nuxt-link to="#">{{ $t('footer_help') }}</nuxt-link>
                </a-col>
                <a-col :lg="4" :xxl="3" class="contactCol">
                    <h3>{{ $t('footer_phone') }}:</h3>

                    <p>+998 95 144-04-44</p>

                    <p>+998 95 144-04-40</p>
                </a-col>
                <a-col :lg="5" :xxl="4" class="contactCol">
                    <h3>{{ $t('mail') }}:</h3>
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

            <a-row class="mobileRow">

                <div class="mobCol">
                    <span>Legal Notice</span>
                    <span>Privacy Policy</span>
                </div>

                <div class="mobCol">
                    <span>Cookies</span>
                    <span>Terms & Conditions</span>
                </div>


                <div class="mobPayCol">
                    <a-row type="flex">
                        <a-col v-for="pay in payments" :key="pay.id">
                            <img :src="require('../static/images/'+pay.img)" alt="">
                        </a-col>
                    </a-row>
                </div>

                <p>Copyright © Avantage Travel. All Rights Reserved.</p>
            </a-row>
        </div>
    </footer>
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

        .mobileRow{
                display: none;
            }

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

@media screen and (max-width: 1560px) and (min-width: 960px) {
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

@media screen and (max-width: 960px) {
    .footerLayout{

        .footerWrapper{

            .bottomCol{
                display: none;
            }

            .mobileRow{
                display: flex;
                flex-direction: column;
                row-gap: 16px;

                p{
                    font-size: 1.15rem;
                    line-height: 140%;
                    font-weight: 400;
                    color: #fff;
                    margin: 0;
                    text-align: center;
                }

                .mobPayCol{

                    .ant-row-flex{
                        justify-content: space-evenly;
                    }

                    img{
                        max-width: 72px;
                    }
                }

                .mobCol{
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;

                    span{
                        font-size: 1.15rem;
                        line-height: 140%;
                        font-weight: 400;
                        color: #fff;
                    }
                }
            }

            .topRow{
                flex-direction: column;
                row-gap: 16px;

                .companyCol, .supportCol,  .contactCol{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .logoCol{

                    .ant-row{
                        &:first-child{

                            display: flex;
                            justify-content: center;
                        }
                    }
                }
            }
        }
    }
}
</style>