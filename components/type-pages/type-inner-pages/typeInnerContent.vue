<template>
    <div class="typeInnerContainer common">
        <a-row class="questionRow" v-if="question === true">
            <AskQuestionModal @closeQuestion="closeQuestion" />
        </a-row>
        <a-row type="flex" justify="space-between" class="typeWrapper">

            <a-col :span="16">
                <PagesTopContent :inner-page="true"
                    :page-name="'Cheap Egypt holiday to Cairo-Luxor-Aswan-Abu Simbel 11 Days with sleeping train'" />
                <innerTypeHeader />
                <a-row class="descRow row">
                    <h3 class="titleP">Siz ko'radigan joylar</h3>
                    <InnerSwiper :swipe-items="places" :items="3" :is-btn="true" />
                </a-row>
                <a-row class="planshRow row">
                    <h3 class="titleP">Siz ko'radigan joylar</h3>
                    <InnerSwiper :swipe-items="places" :items="2" :is-btn="true" />
                </a-row>

                <a-row class="mapRow">
                    <h3 class="mainT">Sayohat xaritasi</h3>

                    <img src="../../../static/images/map.png" alt="">
                </a-row>

                <a-row class="locationRow">
                    <a-row type="flex" justify="space-between">
                        <h3 class="titleP">Yo‘nalish jadvali</h3>
                        <p class="commonP">Barchasini ochish</p>
                    </a-row>
                    <LocationTable :tabs="locationPlan" />
                </a-row>

                <a-row class="usersRow">
                    <a-row class="descRow row">
                        <h3 class="titleP">Foydalanuvchilar suratlari</h3>
                        <InnerSwiper :swipe-items="usersPhotos" :items="3" />
                    </a-row>
                    <a-row class="planshRow row">
                        <h3 class="titleP">Foydalanuvchilar suratlari</h3>
                        <InnerSwiper :swipe-items="usersPhotos" :items="2" />
                    </a-row>
                </a-row>

                <a-row class="videoRow">
                    <h3 class="titleP">Video</h3>
                    <a-col class="deactiveCol" v-if="play !== true">
                        <div class="play" @click="play = true">
                            <font-awesome-icon :icon="['fas', 'play']" size="2x" />
                        </div>
                    </a-col>

                    <a-col class="videoCol" v-else>
                        <font-awesome-icon class="videoIcon" :icon="['fas', 'xmark']" size="2x" @click="play = false" />
                        <iframe src="https://www.youtube.com/embed/vQVwkyn3-F8?autoplay=1" width="100%" height="100%"
                            style="border: none"></iframe>
                    </a-col>
                </a-row>

                <a-row class="askRow mt-8">
                    <a-row>
                        <h3 class="titleP">Savolingiz bormi?</h3>
                    </a-row>
                    <a-row>
                        <p class="commonP">Hammer container will involved disband when moments blue. Prioritize win-win-win
                            hammer start win-win-win ideal standup. Exploratory launch usabiltiy ipsum protocol got. </p>
                    </a-row>
                    <a-row>
                        <button class="dBtn ask" @click="question = true">
                            <svg class="askIcon" width="32" height="32" viewBox="0 0 32 32" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_566_2548)">
                                    <path
                                        d="M27.9997 18.6667L23.9997 14.6667H14.6663C14.3127 14.6667 13.9736 14.5262 13.7235 14.2761C13.4735 14.0261 13.333 13.687 13.333 13.3333V5.33333C13.333 4.97971 13.4735 4.64057 13.7235 4.39052C13.9736 4.14048 14.3127 4 14.6663 4H26.6663C27.02 4 27.3591 4.14048 27.6092 4.39052C27.8592 4.64057 27.9997 4.97971 27.9997 5.33333V18.6667Z"
                                        stroke="#03A6A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M18.6667 19.9999V22.6666C18.6667 23.0202 18.5262 23.3593 18.2761 23.6094C18.0261 23.8594 17.687 23.9999 17.3333 23.9999H8L4 27.9999V14.6666C4 14.313 4.14048 13.9738 4.39052 13.7238C4.64057 13.4737 4.97971 13.3333 5.33333 13.3333H8"
                                        stroke="#03A6A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_566_2548">
                                        <rect width="32" height="32" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <p class="mainP">Ask a Question</p>
                        </button>
                    </a-row>
                </a-row>
                <a-row>
                    <a-row class="descRow row">
                        <h3 class="titleP">O‘xshash turlar</h3>
                        <InnerSwiper :swipe-items="similarTravels" :items="3" :is-btn="true" />
                    </a-row>
                    <a-row class="planshRow row">
                        <h3 class="titleP">O‘xshash turlar</h3>
                        <InnerSwiper :swipe-items="similarTravels" :items="2" :is-btn="true" />
                    </a-row>
                </a-row>
            </a-col>
            <a-col :span="7" class="payCol">
                <a-row>
                    <p class="commonP oldPr">From 7 000 000 UZS</p>
                </a-row>
                <a-row>
                    <p class="mainT price">4 500 000 UZS</p>
                </a-row>
                <a-row>
                    <button class="travelB" @click="goToCheck">Xarid qilish</button>
                </a-row>
                <a-row>
                    <button class="dBtn ask" @click="question = true">
                        <svg class="askIcon" width="32" height="32" viewBox="0 0 32 32" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_566_2548)">
                                <path
                                    d="M27.9997 18.6667L23.9997 14.6667H14.6663C14.3127 14.6667 13.9736 14.5262 13.7235 14.2761C13.4735 14.0261 13.333 13.687 13.333 13.3333V5.33333C13.333 4.97971 13.4735 4.64057 13.7235 4.39052C13.9736 4.14048 14.3127 4 14.6663 4H26.6663C27.02 4 27.3591 4.14048 27.6092 4.39052C27.8592 4.64057 27.9997 4.97971 27.9997 5.33333V18.6667Z"
                                    stroke="#03A6A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M18.6667 19.9999V22.6666C18.6667 23.0202 18.5262 23.3593 18.2761 23.6094C18.0261 23.8594 17.687 23.9999 17.3333 23.9999H8L4 27.9999V14.6666C4 14.313 4.14048 13.9738 4.39052 13.7238C4.64057 13.4737 4.97971 13.3333 5.33333 13.3333H8"
                                    stroke="#03A6A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_566_2548">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p class="mainP">Ask a Question</p>
                    </button>
                </a-row>

                <a-row type="flex" class="payRow">
                    <a-col v-for="pay in payments" :key="pay.id">
                        <img :src="require('../../../static/images/' + pay.img)" alt="">
                    </a-col>
                </a-row>

                <a-row type="flex" justify="space-between">
                    <a-col :span="11">
                        <p class="miniP">Sayohat davomiyligi:</p>
                        <span class="miniP">10 kun</span>
                    </a-col>
                    <a-col :span="11">
                        <p class="miniP">Manzil:</p>
                        <span class="miniP">Cairo</span>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </div>
</template>
<script>
import innerTypeHeader from './innerTypeHeader.vue';
import PagesTopContent from '../../PagesTopContent.vue';
import InnerSwiper from '../../InnerSwiper.vue';
import LocationTable from './LocationTable.vue';
import AskQuestionModal from '../../modals/AskQuestionModal.vue';
export default {
    name: 'type-inner',
    components: { innerTypeHeader, PagesTopContent, InnerSwiper, LocationTable, AskQuestionModal },
    data() {
        return {
            payments: [
                {
                    id: 1,
                    img: 'visa.png'
                },
                {
                    id: 2,
                    img: 'master.png'
                },
                {
                    id: 3,
                    img: 'pay.png'
                },
                {
                    id: 4,
                    img: 'click.png'
                }
            ],
            places: [
                {
                    id: 1,
                    title: 'Cairo',
                    img: 'img14.png'
                },
                {
                    id: 2,
                    title: 'Luxor',
                    img: 'img15.png'
                },
                {
                    id: 3,
                    title: 'Valley of the Kings',
                    img: 'img16.png'
                }
            ],
            locationPlan: [
                {
                    id: 1,
                    title: '1 kun: Cairo',
                    descript: 'Hammer container will involved disband when moments blue. Prioritize win-win-win hammer start win-win-win ideal standup. Exploratory launch usabiltiy ipsum protocol got. Overflow keywords is principles incentivization open. Busy diarize base high assassin win-win-win be management stands. Without office will you today. Whatever price drawing- board already organic scope.Get also switch managing pollination.Open baked not hammer place globalize horse.Files know recap procrastinating panel minimize t- shaped do eco - system all.Offline calculator 30, 000ft enable red - flag asserts.'
                },
                {
                    id: 2,
                    title: '2 kun: Cairo City Tour, Overnight Sleeper Train',
                    descript: 'Hammer container will involved disband when moments blue. Prioritize win-win-win hammer start win-win-win ideal standup. Exploratory launch usabiltiy ipsum protocol got. Overflow keywords is principles incentivization open. Busy diarize base high assassin win-win-win be management stands. Without office will you today. Whatever price drawing-board already organic scope. Get also switch managing pollination. Open baked not hammer place globalize horse. Files know recap procrastinating panel minimize t-shaped do eco-system all. Offline calculator 30,000ft enable red-flag asserts.'
                },
                {
                    id: 3,
                    title: '3 kun: Aswan',
                    descript: 'Hammer container will involved disband when moments blue. Prioritize win-win-win hammer start win-win-win ideal standup. Exploratory launch usabiltiy ipsum protocol got. Overflow keywords is principles incentivization open. Busy diarize base high assassin win-win-win be management stands. Without office will you today. Whatever price drawing-board already organic scope. Get also switch managing pollination. Open baked not hammer place globalize horse. Files know recap procrastinating panel minimize t-shaped do eco-system all. Offline calculator 30,000ft enable red-flag asserts.'
                },
                {
                    id: 4,
                    title: '4 kun: Aswan, Felucca Cruise',
                    descript: 'Hammer container will involved disband when moments blue. Prioritize win-win-win hammer start win-win-win ideal standup. Exploratory launch usabiltiy ipsum protocol got. Overflow keywords is principles incentivization open. Busy diarize base high assassin win-win-win be management stands. Without office will you today. Whatever price drawing-board already organic scope. Get also switch managing pollination. Open baked not hammer place globalize horse. Files know recap procrastinating panel minimize t-shaped do eco-system all. Offline calculator 30,000ft enable red-flag asserts.'
                },
                {
                    id: 5,
                    title: '5 kun: Felucca cruise on the Nile',
                    descript: 'Hammer container will involved disband when moments blue. Prioritize win-win-win hammer start win-win-win ideal standup. Exploratory launch usabiltiy ipsum protocol got. Overflow keywords is principles incentivization open. Busy diarize base high assassin win-win-win be management stands. Without office will you today. Whatever price drawing-board already organic scope. Get also switch managing pollination. Open baked not hammer place globalize horse. Files know recap procrastinating panel minimize t-shaped do eco-system all. Offline calculator 30,000ft enable red-flag asserts.'
                },
                {
                    id: 6,
                    title: '6 kun: Felucca cruise on the Nile, Edfu, Komombo, Luxor',
                    descript: 'Hammer container will involved disband when moments blue. Prioritize win-win-win hammer start win-win-win ideal standup. Exploratory launch usabiltiy ipsum protocol got. Overflow keywords is principles incentivization open. Busy diarize base high assassin win-win-win be management stands. Without office will you today. Whatever price drawing-board already organic scope. Get also switch managing pollination. Open baked not hammer place globalize horse. Files know recap procrastinating panel minimize t-shaped do eco-system all. Offline calculator 30,000ft enable red-flag asserts.'
                },
                {
                    id: 7,
                    title: '7 kun: Luxor, Overnight Sleeper Train',
                    descript: 'Hammer container will involved disband when moments blue. Prioritize win-win-win hammer start win-win-win ideal standup. Exploratory launch usabiltiy ipsum protocol got. Overflow keywords is principles incentivization open. Busy diarize base high assassin win-win-win be management stands. Without office will you today. Whatever price drawing-board already organic scope. Get also switch managing pollination. Open baked not hammer place globalize horse. Files know recap procrastinating panel minimize t-shaped do eco-system all. Offline calculator 30,000ft enable red-flag asserts.'
                },
                {
                    id: 8,
                    title: '8 kun: Cairo',
                    descript: 'Hammer container will involved disband when moments blue. Prioritize win-win-win hammer start win-win-win ideal standup. Exploratory launch usabiltiy ipsum protocol got. Overflow keywords is principles incentivization open. Busy diarize base high assassin win-win-win be management stands. Without office will you today. Whatever price drawing-board already organic scope. Get also switch managing pollination. Open baked not hammer place globalize horse. Files know recap procrastinating panel minimize t-shaped do eco-system all. Offline calculator 30,000ft enable red-flag asserts.'
                }
            ],
            usersPhotos: [
                {
                    id: 1,
                    img: 'img17.png'
                },
                {
                    id: 2,
                    img: 'img18.png'
                },
                {
                    id: 3,
                    img: 'img19.png'
                }
            ],
            play: false,
            similarTravels: [
                {
                    id: 1,
                    img: 'img20.png'
                },
                {
                    id: 2,
                    img: 'img21.png'
                },
                {
                    id: 3,
                    img: 'img22.png'
                }
            ],
            question: false
        }
    },
    methods: {
        closeQuestion() {
            this.question = false
        },
        goToCheck(){
            this.$router.push({name: 'check-payment'})
        }
    }
}
</script>
<style lang="scss">
.typeInnerContainer {
    position: relative;

    .questionRow {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(33, 33, 33, 0.4);
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .askRow {

        p {
            margin-top: 16px;
        }

        button.ask {
            width: 260px;
            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 8px;
            cursor: pointer;
            transition: 0.12s linear;
            margin-top: 28px;

            &:hover {

                p {
                    color: #fff;
                }

                svg {
                    g {
                        path {
                            stroke: #fff;
                        }
                    }
                }
            }
        }
    }

    .videoRow {
        margin-top: 80px;

        .videoCol {
            width: 100%;
            height: 500px;
            position: relative;
            display: flex;
            flex-direction: column;
            margin-top: 24px;

            .videoIcon {
                align-self: flex-end;
                margin-bottom: 12px;
                cursor: pointer;
            }
        }

        .deactiveCol {
            width: 100%;
            height: 500px;
            background: url('../../../static/images/video.png') no-repeat;
            background-size: 100% 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 24px;

            .play {
                width: 64px;
                height: 64px;
                border-radius: 50%;
                background: #03a0a6;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                cursor: pointer;
            }
        }
    }

    .titleP {
        color: #212121;
    }

    .typeWrapper {

        .usersRow {
            .row {

                .swiper-button-next {
                    top: 50% !important;
                }

                .swipeTitle {
                    display: none;
                }
            }
        }

        .locationRow {
            margin-top: 80px;

            .ant-row-flex {
                align-items: center;

                p {
                    color: #03a0a6;
                    cursor: pointer;
                }
            }

            h3 {
                color: #212121;
            }
        }

        .mapRow {
            margin-top: 80px;

            img {
                width: 100%;
                margin-top: 24px;
            }
        }

        .row {
            margin-top: 80px;

            .titleP {
                color: #212121;
            }

            .innerSwiper {
                margin-top: 24px;

                .swiper-container {
                    padding: 0;

                    .swiper-button-prev {
                        display: none;
                    }

                    .swiper-button-next {
                        top: 40%;
                        right: 0;
                        border-radius: 50%;
                    }

                    .swiper-slide {
                        padding: 0 24px 0 0;
                        height: fit-content;
                        border: 0;
                        box-shadow: none;

                        .more {
                            display: none;
                        }
                    }
                }
            }
        }
    }

    .topContainer {
        .innerContent {
            width: fit-content !important;
        }
    }

    .payCol {
        height: 430px;
        padding: 24px;
        box-sizing: border-box;
        background: #fff;
        border: 1px solid #e9e9e9;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        row-gap: 16px;

        .payRow {

            img {
                cursor: pointer;
            }
        }

        button.ask {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: 0.12s linear;

            p {
                color: #03a0a6;
            }

            &:hover {

                p {
                    color: #fff;
                }

                .askIcon {

                    g {
                        path {
                            stroke: #fff;
                        }
                    }
                }
            }
        }

        p.price {
            color: #03a0a6;
        }

        p.oldPr {
            text-decoration: line-through;
            color: #898989;
        }
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .typeInnerContainer {

        .videoRow {
            .videoCol {
                height: 320px;
            }

            .deactiveCol {
                height: 320px;
            }
        }

        .payCol {

            .payRow {
                column-gap: 10px;

                img {
                    width: 44px;
                }
            }
        }
    }
}</style>