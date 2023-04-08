<template>
    <header class="headerLayout">
        <a-row class="maxW">
            <a-row type="flex" justify="space-between" align="middle">
                <a-col :xs="{ span: 2 }" :lg="{ span: 4, offset: 1 }" class="ml-0">
                    <font-awesome-icon :icon="['fas', 'bars']" size="3x" class="open" @click="open"/>
                </a-col>
                <a-col :xs="{ span: 10 }" :lg="{ span: 10, offset: 1 }">
                    <div class="siteLogo">
                        <img src="../static/images/Logo.png" alt="">
                    </div>
                </a-col>
                <a-col :xs="{ span: 8 }" :lg="{ span: 6 }" class="topIcons">
                    <div class="languages icons" @mouseover="isLang = true" @mouseleave="isLang = false">
                        <img src="../static/images/world.png" alt="">
                        <SelectLanguage :class="isLang ? 'open' : 'close'"/>

                    </div>
                    <div class="person icons" @click="goToPage">
                        <img src="../static/images/person.png" alt="">
                    </div>
                </a-col>
            </a-row>
            <a-row class="title-row">
                <a-col class="headerTitle">
                    <h1 class="commonT">
                        {{ $t('home_title') }}
                    </h1>
                    <p class="commonP">
                        {{ $t('home_desc') }}
                    </p>
                </a-col>
            </a-row>

            <a-row type="flex" justify="space-between" align="middle" class="topFilter">
                <a-col :xs="{ span: 24 }" :lg="{ span: 6 }" :xxl="{ span: 7 }" class="filter-col">
                    <div class="dropContainer">
                        <Dropdown :placehold="where" :img="'Address.png'" :drop-items="travelLocation" />
                    </div>
                </a-col>
                <a-col :xs="{ span: 24 }" :lg="{ span: 6 }" :xxl="{ span: 7 }">
                    <div class="datepicker">
                        <div class="pickerItems">
                            <img src="../static/images/airplane.png" alt="">
                            <p class="descGr">
                                {{ !date ? string_date?.[$i18n.locale] : date }}
                            </p>
                        </div>
                        
                        <a-month-picker :getCalendarContainer="getCalendarContainer()"  @change="onChange"> 
                            <font-awesome-icon icon="fa-solid fa-chevron-down" />
                        </a-month-picker>
                    </div>
                </a-col>

                <a-col :xs="{ span: 24 }" :lg="{ span: 6 }" :xxl="{ span: 7 }">
                    <div class="dropContainer">
                        <Dropdown :placehold="sort" :img="'Address.png'" :drop-items="types" />
                    </div>
                </a-col>

                <a-col :xs="{ span: 24 }" :lg="{ span: 3 }" :xxl="{ span: 2 }" class="searchCol">
                    <!-- <a-input-search /> -->
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" size="2x" />
                </a-col>
            </a-row>

            <a-row class="offerToTravel">
                <img src="../static/images/line.png" alt="" class="leftImg">
                <a-col>
                    <div class="offerItems">
                        <div class="offerTitle">
                            <h1>{{ $t('umra1') }}<i>Umra</i> {{ $t('umra2') }}</h1>
                        </div>

                        <div class="offerDescript">
                            <span>{{ $t('umra_title') }}</span>
                            <a-button>{{ $t('more') }}</a-button>
                        </div>
                    </div>
                </a-col>
                <div class="rightImages">
                    <img src="../static/images/Vector 12.png" alt="">
                    <img src="../static/images/travell.png" alt="" class="travelImg">
                </div>
            </a-row>
        </a-row>
    </header>
</template>
<script>
import Dropdown from '../components/Dropdown.vue';
import SelectLanguage from '../components/SelectLanguage.vue';
export default {
    name: 'header-layout',
    components: { Dropdown, SelectLanguage },
    data() {
        return {
            travelLocation: [
                { id: 1, name: {
                    uz: 'Yangi Zelandiya',
                    en: 'New Zealend',
                    ru: 'Новая Зеландия'
                } },
                { id: 2, name: {
                    uz: 'Hindiston',
                    en: 'India',
                    ru: 'Индия'
                } },
                { id: 3, name: {
                    uz: 'Turkiya',
                    ru: 'Турция',
                    en: 'Turkey'
                } },
                {id: 4, name: {
                    uz: 'Marokash',
                    en: 'Morocco',
                    ru: 'Марокко'
                }},
                {id: 5, name: {
                    uz: 'Islandiya',
                    en: 'Iceland',
                    ru: 'Исландия'
                }}
            ],
            where: {
                uz: 'Qayerga',
                en: 'Where',
                ru: 'Куда'
            },
            string_date: {
                uz: 'Borish vaqti',
                en: 'Time to go',
                ru: 'Время'
            },
            sort: {
                uz: 'Saralash',
                en: 'Sort',
                ru: 'Сортировка'
            },
            types: this.$store.state.travelTypes,
            date: null,
            isLang: false
        }
    },
    methods: {
        getCalendarContainer(){
            return (triggerNode) => {
                return triggerNode.parentNode.parentNode;
            }
        },
        onChange(date, dateString) {
            this.date = dateString;
        },

        open(){
            this.$store.commit('changeOpen')
        },
        goToPage(){
            this.$router.push({name: 'login'})
        }
    }
}
</script>
<style lang="scss">

// .ant-calendar-picker-container {
//     left: 480px !important;
//     top: 480px !important;
// }

.headerLayout {
  height: 742px;
  position: relative;
  background: url("../static/images/bg1.png") no-repeat;
  background-position: center;
  background-size: cover;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(33, 33, 33, 0.8);
    z-index: 0;
  }

  .maxW{
    max-width: 1560px;
    margin: 0 auto;
  }

  .ant-row-flex{

    .ant-col{
        color: #fff;

        svg.open{
            cursor: pointer;
        }

        .siteLogo{
            display: flex;
            justify-content: center;
        }

        &.topIcons{
            display: flex;
            column-gap: 16px;
            justify-content: flex-end;
          }

        .icons{
            width: 56px;
            height: 56px;
            border-radius: 12px;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            &.languages{
                position: relative;
            }
    
            img{
                width: 28px;
                height: 28px;
                color: #484848;
            }
          }
    }
  }

  .ant-row {
    padding: 40px 0;
    box-sizing: border-box;

    &.title-row{
        margin-top: 60px;
    }

    .ant-col {
      color: #fff;

      &.filter-col{
        height: 100px;
        margin-left: 0 !important;
        // width: 100%;

        .dropContainer{
            height: 100%;
        }
      }

      &.headerTitle{
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 12px;

        .commonP{
            color: #fff;
        }

        h1{
            text-align: center;
            color: #fff;
        }

        p{
            text-align: center;
            opacity: 80%;
        }
      }

      

      
    }
  }
}

.offerToTravel {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .rightImages {
        position: absolute;
        right: 132px;
        top: 118px;
        z-index: 19;

        img {
            border-radius: 16px;

            &:nth-child(1) {
                position: absolute;
                right: 10px;
            }
        }
    }

    img.leftImg {
        position: absolute;
        left: 168px;
        top: 120px;
        z-index: 19;
    }

    .ant-col {
        width: 1294px;
        height: 240px;
        position: absolute;
        top: 118px;
        padding: 40px;
        box-sizing: border-box;
        background: linear-gradient(180deg, #03A6A0 0%, #04817C 100%);
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
        border-radius: 16px;
        z-index: 9;

        .offerItems {
            width: 55%;
            margin-left: 100px;
            display: flex;
            justify-content: space-between;

            .offerTitle {
                width: calc(55% - 12px);

                h1 {
                    display: inline-block;
                    font-size: 1.85rem;
                    font-weight: 500;
                    text-align: center;
                    text-transform: uppercase;
                    color: #fff;

                    i {
                        display: block;
                        font-style: normal;
                        font-size: 5rem;
                        font-weight: 900;
                        line-height: 90px;
                        text-transform: uppercase;
                        color: #f9c81d;
                        margin: 0;
                    }
                }
            }

            .offerDescript {
                width: calc(45% - 12px);
                display: flex;
                flex-direction: column;
                align-items: center;
                row-gap: 24px;

                span {
                    font-size: 1.25rem;
                    line-height: 150%;
                    font-weight: 400;
                    display: block;
                    text-align: center;
                }

                button.ant-btn {
                    width: 164px;
                    height: 56px;
                    border-radius: 64px;
                    background: #0e5e6f;
                    color: #fff;
                }
            }
        }
    }
}



.topFilter {
    height: 180px;
    background: #fff;
    border-radius: 30px;
    padding: 40px;
    box-sizing: border-box;
    display: flex;
    column-gap: 20px;

    .ant-col {
        height: 100px;

        .dropContainer {
            height: 100%;

            .dropItem {
                height: 100%;

                .dropVisible {
                    height: 100%;
                }
            }
        }
    }

    .searchCol {
        height: 100px;
        border-radius: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #0e5e6f;

        svg{
            cursor: pointer;
        }

        .ant-input-suffix {
            position: static;
            width: 18px;
            height: 18px;

            i {
                color: #fff;
            }
        }

        input {
            display: none;
            overflow: hidden;
        }
    }

    .ant-input-search {
        width: fit-content !important;
    }

    .datepicker {
        width: 420px;
        height: 100px;
        background: #f3f3f3;
        border-radius: 80px;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

        .ant-calendar-month-panel-body{

            .ant-calendar-month-panel-cell{

                &.ant-calendar-month-panel-selected-cell{
                    a{
                        background: #03A6A0;
                    }
                }
                
                a{
                    width: calc(100% - 12px);
                height: 46px;
                border: 1px solid #e9e9e9;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;

                &:hover{
                    color: #03A6A0;
                }
                }
            }
        }

        .ant-calendar-picker-container{
            top: 112px !important;
            left: 0 !important;

            .ant-calendar-month-panel-header{
                display: flex;
                height: 60px;
                align-items: center;
                padding: 8px 4px;
                box-sizing: border-box;

                .ant-calendar-month-panel-year-select{
                    margin-left: 8px;

                    &:hover{
                        span{
                            color: #03A6A0;
                        }
                    }

                    span{
                        font-size: 1.35rem;
                        line-height: 140%;
                        font-weight: 500;

                        &:hover{
                            color: #03A6A0;
                        }
                    }
                }

                .ant-calendar-month-panel-prev-year-btn{
                    left: initial;
                    right: 52px !important;
                }

                .ant-calendar-month-panel-prev-year-btn, .ant-calendar-month-panel-next-year-btn{
                    align-self: flex-end;
                    top: 10px;
                    width: 40px;
                    height: 40px;
                    background: #f2f2f2;
                    border-radius: 12px;
                    color: #03A6A0;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    &::before{
                        left: initial;
                        border-color: #03A6A0 !important;
                    }

                    &::after{
                        display: none;
                    }
                }
            }
        }

        .pickerItems {
            display: flex;
            align-items: center;
            column-gap: 12px;
        }

        p {
            margin: 0;
        }


        .ant-calendar-picker {
            width: 50px;
            height: 50px;
            border-radius: 40px;
            background: #d5e2e2;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            svg {

                &:focus {
                    outline: none !important;
                }
            }
        }

        .ant-calendar-picker-input {
            display: none;

            &:focus {
                outline: none;
                border: none;
            }
        }

        .ant-calendar-picker-icon {
            position: static;
            color: #027471;
        }
    }
}

@media screen and (max-width: 1560px) and (min-width: 960px) {
    // .ant-calendar-picker-container{
    //     left: 380px !important;
    // }
    .offerItems {
        .offerTitle {
            h1 {
                font-size: 1.15rem !important;

                h3 {
                    font-size: 2.25rem !important;
                    line-height: 56px !important;
                }
            }
        }

        .offerDescript {
            row-gap: 16px !important;

            span {
                font-size: 0.85rem !important;
                line-height: 115% !important;
            }

            button.ant-btn {
                width: 132px !important;
                height: 32px !important;
            }
        }
    }

    img.leftImg {
        left: 108px !important;
    }

    .datepicker {
        width: 100% !important;
    }

    .offerToTravel {
        img.leftImg{
            top: 164px !important;
        }
        .ant-col {
            width: 824px !important;
            height: 146px !important;
            padding: 20px !important;
            top: 164px !important;
        }

        .rightImages {
            right: 48px !important;
            top: 164px !important;

            img {
                width: 280px !important;
                height: 100% !important;
            }
        }
    }
}

@media screen and (min-width: 1560px) {
    .ant-calendar-picker-container {
        left: 780px !important;
    }
}

@media screen and (max-width: 960px) {
    .topFilter .searchCol{
        align-self: flex-start;
        width: 120px;
    }
    .headerLayout {
        height: 1042px;
        .siteLogo {
            width: 100% !important;

            img {
                width: 100% !important;
                object-fit: contain;
            }
        }

        .topIcons {
            .icons {
                width: 42px !important;
                height: 42px !important;
            }
        }

        .topFilter {
            height: fit-content !important;
            flex-direction: column;
            row-gap: 24px;

            .dropContainer {
                width: 100% !important;

                .dropItem {
                    width: 100% !important;

                    .dropdownItems {
                        z-index: 49;
                    }
                }
            }

            .datepicker {
                width: 100% !important;
            }

            .ant-calendar-picker-container {
                left: 0 !important;
            }
        }
    }
}

@media screen and (max-width: 960px) {
    .offerToTravel{
        .ant-col{
            display: flex;
            align-items: center;
            top: 78px;
            width: calc(100% - 64px);
            height: 160px;
            padding: 10px;

            .offerItems{
                margin-left: 0;
                width: 100%;

                .offerDescript{
                    row-gap: 12px;

                    button.ant-btn{
                        width: 98px;
                        height: 28px;
                    }

                    span{
                        font-size: 0.75rem;
                    }
                }

                .offerTitle{

                    h1{
                        font-size: 1.15rem;

                        i{
                            display: block;
                            font-size: 1.85rem;
                            line-height: 45px;
                        }
                    }
                }
            }
        }
        img.leftImg{
            left: 48px;
            top: 80px;
            display: none;
        }

        .rightImages{
            right: 32px;
            top: 78px;
            width: calc(30% - 24px);
            height: 160px;
            display: none;

            img{
                display: none;
            }
        }
    }
}
</style>