<template>
    <div class="usTopContainer mt-6 common">
        <a-row type="flex" justify="space-between">
            <a-col :span="12">
                <h3>22 yil davomida biz siz bilan sayohat qilishni yaxshi ko'ramiz!</h3>
                <p class="mainP"> Hammer container will involved disband when moments blue. Prioritize win-win-win hammer
                    start win-win-win ideal standup. Exploratory launch usabiltiy ipsum protocol got. Overflow keywords is
                    principles incentivization open. Busy diarize base high assassin win-win-win be management stands.
                    Without office will you today /.
                    Whatever price drawing-board already organic scope. Get also switch managing pollination. Open baked not
                    hammer place globalize horse. Files know recap procrastinating panel minimize t-shaped do eco-system
                    all. Offline calculator 30,000ft enable red-flag asserts.</p>
            </a-col>
            <a-col :span="11" class="videoCol bg" v-if="play !== true">
                <div class="circle df-cen">
                    <font-awesome-icon  :icon="['fas', 'play']" @click="play = true" />
                </div>
            </a-col>
            <a-col class="videoCol" :span="11" v-if="play === true">
                <font-awesome-icon class="closeIcon" :icon="['fas', 'xmark']" size="2x"  @click="play = false"/>
                <iframe  src="https://www.youtube.com/embed/vQVwkyn3-F8?autoplay=1" width="100%" height="100%" style="border: none"></iframe>
            </a-col>
        </a-row>
        <a-row class="personRow" type="flex" justify="space-between">
            <a-col :lg="11" :xxl="7" class="personCol">
                <div class="circleOuter df-cen">
                    <div class="circleInner df-cen">
                        <img src="../../static/images/person1.png" alt="">
                    </div>
                </div>
            </a-col>

            <a-col :lg="12" :xxl="16" class="popupCol">
                <a-row>
                    <img src="../../static/images/quoter1.png" alt="">
                </a-row>
                <a-row>
                    <p class="mainP">If our goal is to rebuild travel in a better way in the post-pandemic world and we want more people to get out of the main tourist hubs and experience themselves and the planet on a new more meaningful and sustainable level, there is no better solution than organized adventures. 'Adventure' means something different to all of us, here at TourRadar we simply define an adventure as a collection of experiences that are fulfilling to the soul because an adventure is whatever you want it to be - whether that be a Tuscany wine tour or an Everest base camp trek.</p>
                </a-row>
                <a-row type="flex" justify="space-between">
                    <a-col>
                        <h3>Recap also</h3>
                        <p class="commonP">CEO and Founder of company</p>
                    </a-col>
                    <a-col>
                        <img src="../../static/images/quoter2.png" alt="">
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </div>
</template>
<script>
export default {
    name: 'about-us-top',
    data(){
        return{
            play: false
        }
    }
}
</script>
<style lang="scss">
.usTopContainer {
    .personRow{
        margin-top: 80px;
        align-items: center;

        .popupCol{
            height: 484px;
            background: #f2f2f2;
            border-radius: 16px;
            position: relative;
            padding: 60px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            row-gap: 24px;

            h3{
                font-size: 1.5rem;
                line-height: 150%;
                font-weight: 500;
                color: #212121;
            }

            &::before{
                content: "";
                width: 0;
                height: 0;
                border-top: 36px solid transparent;
                border-bottom: 36px solid transparent;
                border-right: 36px solid #f2f2f2;
                position: absolute;
                left: -32px;
                top: 45%;
            }
        }

        .personCol{

            .circleOuter{
                width: 378px;
                height: 378px;
                border-radius: 50%;
                background: #e3f8f7;

                .circleInner{
                    width: 340px;
                    height: 340px;
                    border-radius: 50%;
                    background: #c3efed;
                }
            }
        }
    }

    .videoCol{
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url('../../static/images/about.png') no-repeat;
        background-size: 100% 100%;
        border-radius: 12px;
        position: relative;

        &.bg{
            &::before{
                content: "";
                width: 100%;
                height: 100%;
                border-radius: 12px;
                background: #212121;
                opacity: 0.6;
                position: absolute;
                top: 0;
                left: 0;
            }
        }

        .closeIcon{
            position: absolute;
            right: -24px;
            z-index: 49;
            top: 4px;
            cursor: pointer;
        }

        .circle{
            width: 64px;
            height: 64px;
            background: #03a6a0;
            border-radius: 50%;
            color: #fff;
            cursor: pointer;
            position: absolute;
            z-index: 9;
        }
    }

    h3 {
        font-size: 2.5rem;
        line-height: 140%;
        font-weight: 500;
        color: #212121;
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .usTopContainer {

        .personRow{

            .popupCol{
                padding: 40px;
                height: 584px;
            }
        }

        .videoCol{
            height: 240px;
        }

        h3 {
            font-size: 1.5rem;
        }
    }
}</style>