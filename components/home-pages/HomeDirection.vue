<template>
    <section class="directionContainer common">
        <h3>Avantage Group yo‘nalishlari</h3>

        <div class="directionWrapper">
            <a-row type="flex" justify="space-between">
                <a-col :span="11" class="eventCol">
                    <div class="eventItems">
                        <div class="colLeft">
                        <span>Avantage Events</span>
                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                    </div>

                    <img src="../../static/images/logo1.png" alt="">
                    </div>
                </a-col>
                <a-col :span="11" class="graphicCol">
                    <div class="graphicItems">
                        <div class="colLeft">
                        <span>Avantage Graphic</span>
                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                    </div>

                    <img src="../../static/images/logo2.png" alt="">
                    </div>
                </a-col>
            </a-row>
        </div>
    </section>
</template>
<script>
export default {
    name: 'home-direction'
}
</script>
<style lang="scss">
.directionContainer{
    margin-top: 120px;

    h3{
        font-size: 2.25rem;
        line-height: 46px;
        font-weight: 500;
        color: #212121;
        margin: 0;
        text-align: center;
    }

    .directionWrapper{
        margin-top: 40px;

        .ant-row-flex{

            .graphicCol{
                height: 160px;
                border-radius: 12px;
                background: url('../../static/images/bg4.png') no-repeat;
                background-size: 100% 100%;
                position: relative;

                &::after{
                    content: "";
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: rgba(0, 0, 0, 0.4);
                    border-radius: 12px;
                    z-index: 0;
                }

                .graphicItems{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 20px;
                box-sizing: border-box;
                    z-index: 9;

                    .colLeft{
                        display: flex;
                        align-items: center;
                        column-gap: 12px;
                        cursor: pointer;

                        span{
                            font-size: 1.65rem;
                            line-height: 140%;
                            font-weight: 500;
                            color: #fff;
                        }

                        svg{
                            color: #fff;
                        }
                    }
                }
            }

            .eventCol{
                height: 160px;
                border-radius: 12px;
                background: url('../../static/images/bg3.png') no-repeat;
                background-size: 100% 100%;
                position: relative;

                &::after{
                    content: "";
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    background: rgba(0, 0, 0, 0.4);
                    border-radius: 12px;
                    z-index: 0;
                }

                .eventItems{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 20px;
                box-sizing: border-box;
                    z-index: 9;

                    .colLeft{
                        display: flex;
                        align-items: center;
                        column-gap: 12px;
                        cursor: pointer;

                        span{
                            font-size: 1.65rem;
                            line-height: 140%;
                            font-weight: 500;
                            color: #fff;
                        }

                        svg{
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .directionContainer{

        .directionWrapper{

            .ant-row-flex{

                .graphicCol{

                    .graphicItems{
                        img{
                            width: 190px;
                        }

                        .colLeft{

                            span{
                                font-size: 1rem !important;
                            }
                        }
                    }
                }

                .eventItems{

                    img{
                        width: 190px;
                    }
                }

                .eventCol{

                    .colLeft{

                        span{
                            font-size: 1rem !important;
                        }
                    }
                }
            }
        }
    }
}
</style>