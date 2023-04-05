<template>
    <div class="ourTeamWrapper mt-6">
        <a-row class="titleRow common">
            <h3 class="titleT">About our team</h3>
            <span class="mainP"> Hammer container will involved disband when moments blue. Prioritize win-win-win hammer
                start win-win-win ideal standup. Exploratory launch usabiltiy ipsum protocol got. Overflow keywords is
                principles incentivization open. Busy diarize base high assassin win-win-win be management stands. Without
                office will you today</span>
        </a-row>

        <a-row class="sliderRow">
            <div class="carouselItems" v-for="item in team" :key="item.id" :id="item.id" :class="item.id == team[0].id ? 'hidden-l' : '' ||
                item.id == team[4].id ? 'hidden-r' : '' ||
                item.id == team[1].id ? 'shown' : '' ||
                item.id == team[2].id ? 'shown' : '' ||
                item.id == team[3].id ? 'shown' : ''
            ">
                <img :src="require('../../static/images/swipeImages/' + item.img)" alt="">

                <a-row class="itemsRow">
                    <p>{{ item.title }}</p>
                    <span class="commonP">{{ item.descript }}</span>
                </a-row>
            </div>
        </a-row>
        <a-row class="btnRow common">
            <a-col class="btnCol">
                <button class="mainBtn left" id="lBtn" :disabled="isLeft">
                <font-awesome-icon :icon="['fas', 'chevron-left']" />
                </button>

                <button class="mainBtn right" id="rBtn" :disabled="isRight">
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />
                </button>
            </a-col>
        </a-row>
    </div>
</template>
<script>
import InnerSwiper from '../InnerSwiper.vue';
export default {
    name: 'app-team',
    components: { InnerSwiper },
    data() {
        return {
            team: [
                {
                    id: 1,
                    title: 'Abdullayev Ravshan',
                    descript: 'Заместитель главного менеджера',
                    img: 'team4.jpg'
                },
                {
                    id: 2,
                    title: 'Tursunxodjayev Uyg‘unxo‘ja',
                    descript: 'Главный менеджер',
                    img: 'team1.png'
                },
                {
                    id: 3,
                    title: 'Tursunxodjayev Mexmonxo‘ja',
                    descript: 'Заместитель главного менеджера',
                    img: 'team2.png'
                },
                {
                    id: 4,
                    title: 'Rahmonov Farrux',
                    descript: 'Главный бухгалтер',
                    img: 'team3.png'
                },
                {
                    id: 5,
                    title: 'Tursunxodjayeva Fotima',
                    descript: 'Начальник отдела',
                    img: 'team4.jpg'
                }
            ],
            playInterval: '',
            isLeft: false,
            isRight: false
        }
    },
    mounted() {
        this.mover()
    },
    methods: {
        mover() {
            let left = document.getElementById('lBtn'),
                right = document.getElementById('rBtn')

            left.addEventListener('click', () => {
                clearInterval(this.playInterval)

                let item = this.team.pop()
                this.team.unshift(item)

                this.isLeft = true

                setTimeout(() => {
                    this.isLeft = false
                }, 1000)
            })

            right.addEventListener('click', () => {
                clearInterval(this.playInterval)

                let item = this.team.shift()
                this.team.push(item)

                this.isRight = true

                setTimeout(() => {
                    this.isRight = false
                }, 1000)
            })
        }
    }
}
</script>
<style lang="scss">
.ourTeamWrapper {
    height: 784px;

    .btnRow{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 16px;
        margin-top: 40px;

        .btnCol{
            width: calc(15% - 48px);
            display: flex;
            justify-content: space-between;
        }

        .mainBtn{
            width: 56px;
            height: 56px;
            background: #f2f2f2;
            border: 0;
            border-radius: 12px;
            cursor: pointer;
            color: #027471;
        }
    }

    .sliderRow {
        display: flex;
        margin-left: 180px;
        margin-top: 40px;
        width: calc(100% - 180px);
        column-gap: 24px;
        position: relative;
        overflow: hidden;

        .carouselItems {
            min-width: 490px;
            width: 490px;
            height: 550px;
            border-radius: 12px;
            background: #03a6a0;
            position: relative;
            z-index: 9;

            .itemsRow{
                width: 100%;
                height: 25%;
                background: #35b8b3;
                border-bottom-left-radius: 12px;
                border-bottom-right-radius: 12px;
                padding: 20px;
                box-sizing: border-box;

                p{
                    font-size: 1.5rem;
                    line-height: 140%;
                    font-weight: 500;
                    color: #fff;
                    margin: 0;
                }

                span{
                    color: #fff;
                }
            }

            img{
                width: 100%;
                height: 75%;
                object-fit: cover;
                border-top-left-radius: 12px;
                border-top-right-radius: 12px;
            }
            
            &.shown{
                margin-left: 0;
                margin-right: 0;
                transition: all 3s cubic-bezier(0.19, 1, 0.9, 1);
            }

            &.hidden-l {
                margin-left: -530px;
                opacity: 0;
                transition: all 3s cubic-bezier(0.19, 1, 0.9, 1);
            }

            &.hidden-r{
                width: 210px !important;
                margin-right: -630px;
                transition: all 3s cubic-bezier(0.19, 1, 0.9, 1);
                z-index: 0;
            }
        }
    }

    .titleRow {
        h3 {
            text-align: start;
            margin-bottom: 16px;
        }

        span {
            display: block;
            text-align: center;
        }
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .ourTeamWrapper {
        height: 684px;

        .btnRow{

            .btnCol{
                width: calc(25% - 24px);
            margin-left: 80px;
            }
        }

        .sliderRow{

            .carouselItems{
                min-width: 310px !important;
                width: 310px;
                height: 410px;

                .itemsRow{

                    p{
                        font-size: 1.15rem;
                    }
                }

                &.hidden-l{
                    margin-left: -355px !important;
                }
            }
        }
    }
}
</style>