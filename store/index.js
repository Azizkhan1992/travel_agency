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

    travelTypes: [
        {
            id: 1,
            title: 'Barcha turlar',
            descript: 'Barcha turlar ko‘rsatilsin',
            checked: true
        },
        {
            id: 2,
            title: 'Guruh turlari',
            descript: 'Guruh turlar ko‘rsatilsin',
            checked: false
        },
        {
            id: 3,
            title: 'Shaxsiy turlari',
            descript: 'Shaxsiy turlar ko‘rsatilsin',
            checked: false
        }
    ],


    filters: {
        travelContinious: null,
        travelDays: {
            travelBegin: null,
            travelEnd: null
        },
        travelType: {
            all: false,
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
    ],

    famousTravels: [
        {
            id: 1,
            title: 'Tog‘li o‘rmondagi kun',
            country: 'Shvetsariya',
            limit: '10 kun',
            price: 680,
            img: 'iceland16.png'
        },
        {
            id: 2,
            title: 'Tog‘li o‘rmondagi kun',
            country: 'Shvetsariya',
            limit: '10 kun',
            price: 680,
            img: 'famous1.png'
        },
        {
            id: 3,
            title: 'Tog‘li o‘rmondagi kun',
            country: 'Shvetsariya',
            limit: '10 kun',
            price: 680,
            img: 'iceland4.png'
        },
        {
            id: 4,
            title: 'Tog‘li o‘rmondagi kun',
            country: 'Shvetsariya',
            limit: '10 kun',
            price: 680,
            img: 'famous2.png'
        },
        {
            id: 5,
            title: 'Tog‘li o‘rmondagi kun',
            country: 'Shvetsariya',
            limit: '10 kun',
            price: 680,
            img: 'iceland10.png'
        }
    ],

    moreRead: [
        {
            id: 1,
            title: 'Win-win-win optimal viral bake donuts teeth including.',
            descript: 'Respectively calculator slipstream uat eod tent tentative go next. Alarming winning muted centric caught first points.',
            img: 'img2.png'
        },
        {
            id: 2,
            title: 'Put q1 cross nor shoot bed. Performance too deep reality.',
            descript: 'Identify quarter optimal anomalies money. Helicopter put low banner will eco-system enable discussion close.',
            img: 'img3.png'
        },
        {
            id: 3,
            title: 'Activities muted didn\'t pulling identify hanging. Hill customer.',
            descript: 'Brainstorming right quick fastworks functional ensure economy watches boys. Lunch goto goto slipstream weaponize.',
            img: 'img4.png'
        },
        {
            id: 4,
            title: 'Focus competitors ask hill box should discussion. Baseline pee.',
            descript: 'Agile will blue initiative that\'s cob dangerous pretend invested. Territories message drive space charts / net.',
            img: 'img7.png'
        },
        {
            id: 5,
            title: 'Cheap Egypt holiday to Cairo-Luxor-Aswan-Abu Simbel 11 Days with sleeping train',
            descript: 'Respectively calculator slipstream uat eod tent tentative go next. Alarming winning muted centric caught first points.',
            img: 'img6.png'
        }
    ],

    photoGallery: [
        {
            id: 1,
            galleryName: 'Mijozlarimiz rasmlari',
            photoGallery: [
                {
                    id: 1,
                    date: '22.02.2023',
                    title: 'Win-win-win optimal viral bake donuts teeth including.',
                    img: 'img1.png'
                },
                {
                    id: 2,
                    date: '22.02.2023',
                    title: 'Moments overflow they turn at search first today. Focus.',
                    img: 'img2.png'
                },
                {
                    id: 3,
                    date: '22.02.2023',
                    title: 'Best fruit optimal last catching idea happenings. Churning these.',
                    img: 'img3.png'
                },
                {
                    id: 4,
                    date: '22.02.2023',
                    title: 'Going activities re-inventing inclusion only. Field we regroup.',
                    img: 'img4.png'
                },
                {
                    id: 5,
                    date: '22.02.2023',
                    title: 'Knowledge follow baseline let\'s search horse happenings.',
                    img: 'img5.png'
                },
                {
                    id: 6,
                    date: '22.02.2023',
                    title: 'Tentative streamline issues work hear old when nail rundown. Nor.',
                    img: 'img6.png'
                },
                {
                    id: 7,
                    date: '22.02.2023',
                    title: 'Better point paradigm ditching flesh clean boil pushback social.',
                    img: 'img7.png'
                },
                {
                    id: 8,
                    date: '22.02.2023',
                    title: 'Unit when hammer can churning. Should asserts we a deliverables.',
                    img: 'img8.png'
                },
                {
                    id: 9,
                    date: '22.02.2023',
                    title: 'Shift know also hear good invite social / spaces alarming social.',
                    img: 'img9.png'
                },
                {
                    id: 10,
                    date: '22.02.2023',
                    title: 'Gave moving support circle resources. Stop site productive.',
                    img: 'img10.png'
                },
                {
                    id: 11,
                    date: '22.02.2023',
                    title: 'Nor three line dog initiative. Eco-system catching tent only.',
                    img: 'img11.png'
                },
                {
                    id: 12,
                    date: '22.02.2023',
                    title: 'Dangerous we\'ve deep innovation be sky disband closer game.',
                    img: 'img12.png'
                }
            ]
        },
        {
            id: 2,
            galleryName: 'Ichki turizm',
            photoGallery: [
                {
                    id: 1,
                    date: '22.02.2023',
                    title: 'Win-win-win optimal viral bake donuts teeth including.',
                    img: 'img10.png'
                },
                {
                    id: 2,
                    date: '22.02.2023',
                    title: 'Moments overflow they turn at search first today. Focus.',
                    img: 'img3.png'
                },
                {
                    id: 3,
                    date: '22.02.2023',
                    title: 'Best fruit optimal last catching idea happenings. Churning these.',
                    img: 'img1.png'
                },
                {
                    id: 4,
                    date: '22.02.2023',
                    title: 'Going activities re-inventing inclusion only. Field we regroup.',
                    img: 'img2.png'
                },
                {
                    id: 5,
                    date: '22.02.2023',
                    title: 'Knowledge follow baseline let\'s search horse happenings.',
                    img: 'img6.png'
                },
                {
                    id: 6,
                    date: '22.02.2023',
                    title: 'Tentative streamline issues work hear old when nail rundown. Nor.',
                    img: 'img8.png'
                },
                {
                    id: 7,
                    date: '22.02.2023',
                    title: 'Better point paradigm ditching flesh clean boil pushback social.',
                    img: 'img12.png'
                },
                {
                    id: 8,
                    date: '22.02.2023',
                    title: 'Unit when hammer can churning. Should asserts we a deliverables.',
                    img: 'img11.png'
                },
                {
                    id: 9,
                    date: '22.02.2023',
                    title: 'Shift know also hear good invite social / spaces alarming social.',
                    img: 'img5.png'
                },
                {
                    id: 10,
                    date: '22.02.2023',
                    title: 'Gave moving support circle resources. Stop site productive.',
                    img: 'img4.png'
                },
                {
                    id: 11,
                    date: '22.02.2023',
                    title: 'Nor three line dog initiative. Eco-system catching tent only.',
                    img: 'img1.png'
                },
                {
                    id: 12,
                    date: '22.02.2023',
                    title: 'Dangerous we\'ve deep innovation be sky disband closer game.',
                    img: 'img6.png'
                }
            ]
        },
        {
            id: 3,
            galleryName: 'Chet\'el turizmi',
            photoGallery: [
                {
                    id: 1,
                    date: '22.02.2023',
                    title: 'Win-win-win optimal viral bake donuts teeth including.',
                    img: 'img5.png'
                },
                {
                    id: 2,
                    date: '22.02.2023',
                    title: 'Moments overflow they turn at search first today. Focus.',
                    img: 'img1.png'
                },
                {
                    id: 3,
                    date: '22.02.2023',
                    title: 'Best fruit optimal last catching idea happenings. Churning these.',
                    img: 'img7.png'
                },
                {
                    id: 4,
                    date: '22.02.2023',
                    title: 'Going activities re-inventing inclusion only. Field we regroup.',
                    img: 'img3.png'
                },
                {
                    id: 5,
                    date: '22.02.2023',
                    title: 'Knowledge follow baseline let\'s search horse happenings.',
                    img: 'img12.png'
                },
                {
                    id: 6,
                    date: '22.02.2023',
                    title: 'Tentative streamline issues work hear old when nail rundown. Nor.',
                    img: 'img4.png'
                },
                {
                    id: 7,
                    date: '22.02.2023',
                    title: 'Better point paradigm ditching flesh clean boil pushback social.',
                    img: 'img7.png'
                },
                {
                    id: 8,
                    date: '22.02.2023',
                    title: 'Unit when hammer can churning. Should asserts we a deliverables.',
                    img: 'img10.png'
                },
                {
                    id: 9,
                    date: '22.02.2023',
                    title: 'Shift know also hear good invite social / spaces alarming social.',
                    img: 'img2.png'
                },
                {
                    id: 10,
                    date: '22.02.2023',
                    title: 'Gave moving support circle resources. Stop site productive.',
                    img: 'img11.png'
                },
                {
                    id: 11,
                    date: '22.02.2023',
                    title: 'Nor three line dog initiative. Eco-system catching tent only.',
                    img: 'img1.png'
                },
                {
                    id: 12,
                    date: '22.02.2023',
                    title: 'Dangerous we\'ve deep innovation be sky disband closer game.',
                    img: 'img6.png'
                }
            ]
        }
    ],

    contacts: [
        {
            id: 1,
            title: 'Manzil',
            address: '87 Shahriobod ko\'chasi, Tashkent 100084',
            location: '#'
        },
        {
            id: 2,
            title: 'Telefon',
            phone: '+998 95 144-04-44'
        },
        {
            id: 3,
            title: 'Email',
            mail: 'info@avantagetravel.com'
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