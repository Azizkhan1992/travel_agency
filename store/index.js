import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
    isOpen: false,
    menu: [
        {
            id: 1,
            name: 'Turlar',
            url: 'types'
        },
        {
            id: 2,
            name: 'Maqolalar',
            url: 'articles'
        },
        {
            id: 3,
            name: 'Fotogalereya',
            url: 'photo-gallery'
        },
        {
            id: 4,
            name: 'Aloqa',
            url: 'contact'
        }
    ],
    socials: [
        {
            id: 1,
            name: 'Telegram',
            img: 'tg.svg',
            url: 'https://telegram.org/'
        },
        {
            id: 2,
            name: 'Instagram',
            img: 'inst.svg',
            url: 'https://www.instagram.com/'
        },
        {
            id: 3,
            name: 'YouTube',
            img: 'you.svg',
            url: 'https://www.youtube.com/'
        },
        {
            id: 4,
            name: 'Twitter',
            img: 'tw.svg',
            url: 'https://twitter.com/'
        },
        {
            id: 5,
            name: 'Facebook',
            img: 'fb.svg',
            url: 'https://www.facebook.com/'
        }
    ],
    contacts: {
        phone1: '+998 95 144-04-44',
        phone2: '+998 95 144-04-40',
        email: 'info@avantagetravel.com'
    },

    selectChilds: [
        {
            id: 1,
            title: '1 yoshli bolalar uchun',
        },
        {
            id: 2,
            title: '2 yoshli bolalar uchun'
        },
        {
            id: 3,
            title: '3 yoshli bolalar uchun'
        },
        {
            id: 4,
            title: '4 yoshli bolalar uchun'
        },
        {
            id: 5,
            title: '5 yoshli bolalar uchun'
        }
    ],

    TravelContinius: null,
    travelBegin: null,
    travelEnd: null,

    filters: {
        travelContinious: null,
        travelDays: {
            travelBegin: null,
            travelEnd: null
        },
        travelType: {
            personal: false,
            group: false
        },
        childrenAge: '1 yosh',
        travelPrice: {
            begin: 100,
            end: 10000
        }
    },
    foundPlaces: [
        {
            id: 1,
            title: '6 kun - Islandiya atrofida sarguzasht',
            descript: '"Have used Intrepid for over 7 trips and loved every single one ran by them exclusively...."',
            places: ['Reykjavik,', 'Dover,', 'Hvolsvollur,', 'Skogafoss,', 'Vatnajokull National Park'],
            country: 'Iceleand Coast South',
            travelType: 'Shaxsiy, Jamoaviy',
            travelContinious: '10 kun',
            sale: 20,
            oldPrice: '7 000 000 UZS',
            price: '4 500 000 UZS',
            features: ['wifi1', 'kitchen', 'airplane'],
            images: ['iceland1.png', 'iceland2.png', 'iceland3.png']
        },
        {
            id: 2,
            title: 'Per principles eat start too fastworks.',
            descript: 'Teeth now quarter finance sky gmail optimize. Technologically hands closing.',
            places: ['Hanging streamline sorry sorry shoot go model going. Shark no a.'],
            country: 'Iceleand Coast South',
            travelType: 'Shaxsiy, Jamoaviy',
            travelContinious: '10 kun',
            sale: 0,
            price: '12 000 000 UZS',
            features: ['wifi1', 'kitchen', 'relocate', 'airplane'],
            images: ['iceland4.png', 'iceland5.png', 'iceland6.png']
        },
        {
            id: 3,
            title: 'Ideal level engagement initiative paradigm.',
            descript: 'Ocean moving I shark crystallize unit muted discussion stands.',
            places: ['Staircase opportunity space pushback issues. Stakeholder.'],
            country: 'Iceleand Coast South',
            travelType: 'Shaxsiy, Jamoaviy',
            travelContinious: '10 kun',
            sale: 0,
            price: '5 200 000 UZS',
            features: ['wifi1', 'kitchen', 'airplane'],
            images: ['iceland7.png', 'iceland8.png', 'iceland9.png']
        },
        {
            id: 4,
            title: 'Can\'t before first-order are message functional.',
            descript: 'Criticality power join switch seems way both when go are.',
            places: ['Focus new eod third be ipsum reference make. Loss feed data well.'],
            country: 'Iceleand Coast South',
            travelType: 'Shaxsiy, Jamoaviy',
            travelContinious: '10 kun',
            sale: 0,
            price: '7 500 000 UZS',
            features: ['wifi1', 'kitchen'],
            images: ['iceland10.png', 'iceland11.png', 'iceland12.png']
        },
        {
            id: 5,
            title: 'Circle 2 indicators land day game. Uat reinvent no.',
            descript: 'Innovation to when intersection tentative important looking churning.',
            places: ['This masking revision unpack ditching comms. Standup ipsum for.'],
            country: 'Iceleand Coast South',
            travelType: 'Shaxsiy, Jamoaviy',
            travelContinious: '10 kun',
            sale: 20,
            oldPrice: '11 000 000 UZS',
            price: '8 500 000 UZS',
            features: ['kitchen', 'airplane'],
            images: ['iceland13.png', 'iceland14.png', 'iceland15.png']
        },
        {
            id: 6,
            title: 'Strategy as 30,000ft down calculator.',
            descript: 'Yet shower land too own. Hours conversation circle client investigation anomalies at deploy call ground.',
            places: ['Open our cadence conversation open scope jumping. Own when.'],
            country: 'Iceleand Coast South',
            travelType: 'Shaxsiy, Jamoaviy',
            travelContinious: '10 kun',
            sale: 0,
            price: '2 500 000 UZS',
            features: ['wifi1', 'airplane'],
            images: ['iceland16.png', 'iceland17.png', 'iceland18.png']
        }
    ],

    articles: [
        {
            id: 1,
            title: 'Win-win-win optimal viral bake donuts teeth including.',
            img: 'iceland2.png'
        },
        {
            id: 2,
            title: 'Impact most world canatics first. Synchronise as could quick-win hours talk please due socialize.',
            img: 'article1.png'
        },
        {
            id: 3,
            title: 'Also first hard regroup power hands another place when journey. Need when future-proof.',
            descript: 'Place board customer strategies hours synchronise. Hour identify picture chime closest moments let ui shoot timepoint relaxation.',
            img: 'article2.png'
        },
        {
            id: 4,
            title: 'Panel book who\'s incentivization of squad keep. Management working charts they we\'ve. Cause.',
            descript: 'Land chime were search cause also competitors chime productize bed. Catching get field needle giant mindfulness.',
            img: 'article3.png'
        },
        {
            id: 5,
            title: 'Stands unpack by solutions pollination better clean beforehand ipsum clean. Competitors.',
            descript: 'Sandwich welcome message down globalize three customer welcome spaces. No-brainer moving first-order eod spaces next.',
            img: 'article4.png'
        }
    ]

    // counter: 0
})

export const actions = {



    // counterUp({ state, commit }){
    //     commit('setCounter', state.counter + 1)
    //   }
}

export const mutations = {

    changeOpen(state){
        state.isOpen = !state.isOpen
    },
    changeContinious(state, data){
        state.filters.travelContinious = data
    },
    changeTravelBegin(state, data){
        state.filters.travelBegin = data
    },
    changeTravelEnd(state, data){
        state.filters.travelEnd = data
    },
    changePersonalTravel(state, data){
        state.filters.travelType.personal = data
    },
    changeGroupTravel(state, data){
        state.filters.travelType.group = data
    },
    changeChildrenAge(state, data){
        state.filters.childrenAge = data
    }
}

export const getters = {


    // myGetter(state){ return state.counter + 1000}
}