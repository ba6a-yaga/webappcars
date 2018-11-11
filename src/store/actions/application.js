import {
    FETCH_MENU_SUCCESS,
    FETCH_MENU_ERROR,
    FETCH_SERVICE_SUCCESS,
    FETCH_APP_SUCCESS,
    FETCH_SLIDER_SUCCESS,
    FETCH_SECOND_SLIDER_SUCCESS
} from './actionType'
import firebase from '../../firebase'

export function fetchSlider(props) {
    return dispatch => {
        try {
            let carousel = {}
            const db = firebase.firestore();
            const settings = {timestampsInSnapshots: true};
            db.settings(settings);
            db.collection('slider').get()
                .then((querySnapshot)=>{
                    querySnapshot.forEach((doc) => {
                        carousel = doc.data()
                    })
                    dispatch(fetchSliderSuccess(carousel))
                })
                .catch((e)=>{
                    console.log("error(fetchSlider): ",e)
                    carousel = {
                        current:0,
                        title: [
                            "АРЕНДА АВТОМОБИЛЕЙ",
                            "АРЕНДА СПЕЦТЕХНИКИ",
                            "АРЕНДА СНЕГОПЛАВЕЛЬНЫХ ПУНКТОВ"
                        ],
                        img: [
                            "https://firebasestorage.googleapis.com/v0/b/cars-d572a.appspot.com/o/%D0%9A%D0%B0%D1%80%D1%83%D1%81%D0%B5%D0%BB%D1%8C%2F%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%203.png?alt=media&token=64732f24-1a8b-4b28-aed4-59d9aba5edb1",
                            "https://firebasestorage.googleapis.com/v0/b/cars-d572a.appspot.com/o/%D0%9A%D0%B0%D1%80%D1%83%D1%81%D0%B5%D0%BB%D1%8C%2Fcar_02.jpg?alt=media&token=3733e729-3baf-477e-8239-e5a5e490e711",
                            "https://firebasestorage.googleapis.com/v0/b/cars-d572a.appspot.com/o/%D0%9A%D0%B0%D1%80%D1%83%D1%81%D0%B5%D0%BB%D1%8C%2F%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%203.png?alt=media&token=64732f24-1a8b-4b28-aed4-59d9aba5edb1"
                        ]
                    }

                    dispatch(fetchSliderSuccess(carousel))
                })
        } catch(e) {
            console.log("dispatch error - fetchSlider:",e)
        }
    }
}

export function fetchSliderSuccess(carousel) {
    return {
        type: FETCH_SLIDER_SUCCESS,
        carousel
    }
}

export function fetchSecondSlider(props) {
    return dispatch => {
        try {
            let service = {}
            const db = firebase.firestore();
            const settings = {timestampsInSnapshots: true};
            db.settings(settings);
            db.collection('second_slider').get()
                .then((querySnapshot)=>{
                    querySnapshot.forEach((doc) => {
                        service = doc.data()
                    })
                    dispatch(fetchSecondSliderSuccess(service))
                })
                .catch((e)=>{
                    console.log("error(fetchSlider): ",e)
                })
        } catch(e) {
            console.log("dispatch error - fetchSecondSlider:",e)
        }
    }
}

export function fetchSecondSliderSuccess(service) {
    return {
        type: FETCH_SECOND_SLIDER_SUCCESS,
        service
    }
}

export function fetchApp(props) {
    return dispatch => {
        try {
            let app = {}
            const db = firebase.firestore();
            const settings = {timestampsInSnapshots: true};
            db.settings(settings);
            db.collection('app').get()
                .then((querySnapshot)=>{
                    querySnapshot.forEach((doc) => {
                        app = {
                            about: doc.data().about,
                            contacts: {
                                titleBtn: doc.data().contacts.title_button,
                                ...doc.data().contacts,
                            },
                            partners: doc.data().partners
                        }
                    })

                    dispatch(fetchAppSuccess(app))
                })
                .catch((e)=>{
                    console.log("error(fetchApp)",e)
                    app = {
                        about: {
                            title:'О компании',
                            desc:`С 2013 года компания ООО "Сити ЖКХ" работает в сфере благоустройства<br />
                        в ЦАО г.Москвы. Основными видами деятельности компании являются`,
                            services:[
                                {icon:'',title:'Уборка снега',desc:`с улиц ЦАО г. Москвы<br />
                            собственным автопарком<br />
                            спецтехники`},
                                {icon:'',title:'Утилизация снега',desc:'на собственных мобильных снегоплавильных пунктах'},
                                {icon:'',title:'Выполнение работ по озеленению и благоустройству городских территорий',desc:'ООО «Сити ЖКХ» является одним из подрядчиков Префектуры ЦАО города Москвы.'},
                                {icon:'',title:'Изготовление металлоконструкций ',desc:'Наличие собственного производства позволяет выполнять заказы любой сложности, как в рамках государственного заказа, так и для коммерческих организаций.'},
                            ]
                        },
                        partners: {
                            title:'Партнеры',
                            tile:[
                                {icon:'',title:'Название',desc:'Город'},
                                {icon:'',title:'Название',desc:'Город'},
                                {icon:'',title:'Название',desc:'Город'},
                                {icon:'',title:'Название',desc:'Город'},
                                {icon:'',title:'Название',desc:'Город'},
                                {icon:'',title:'Название',desc:'Город'},
                                {icon:'',title:'Название',desc:'Город'},
                                {icon:'',title:'Название',desc:'Город'},
                                {icon:'',title:'Название',desc:'Город'},
                                {icon:'',title:'Название',desc:'Город'},
                                {icon:'',title:'Название',desc:'Город'},
                                {icon:'',title:'Название',desc:'Город'},
                            ],
                        },
                        contacts: {
                            title:'"СитиПлюс"',
                            desc:'Общество с ограниченной ответственностью',
                            phone:'+7 (905) 123-45-67',
                            email:'info@sitizkh.ru',
                            otherInfo:'',
                            titleBtn:'Загрузить реквизиты',
                            address:{
                                desc:'',
                                lat:'',
                                lon:''
                            },
                        },
                    }

                    dispatch(fetchAppSuccess(app))
                })
        } catch(e) {

        }
    }
}

export function fetchAppSuccess(app) {
    return {
        type: FETCH_APP_SUCCESS,
        app
    }
}

export function fetchMenu(props) {
    return dispatch => {
        try {
            let elements = []
            const db = firebase.firestore();
            const settings = {timestampsInSnapshots: true};
            db.settings(settings);
            db.collection('menu').get()
                .then((querySnapshot)=>{
                    querySnapshot.forEach((doc) => {
                        doc.data().elements.map(menu => {
                            return (
                                Boolean(menu.isElementSelect) ?
                                    elements.push({
                                        name: menu.name,
                                        link: '#'+menu.link,
                                        isElementSelect: menu.isElementSelect,
                                        active: false,
                                        handleClick: props.handleSelectedMenuItem,
                                        subElements:menu.subElements,
                                    }) :
                                    elements.push({
                                        name: menu.name,
                                        link: '#'+menu.link,
                                    })
                                )
                        })
                    })
                    dispatch(fetchMenuSuccess(elements))
                })
                .catch((e)=>{
                    console.log("error(fetchMenu): ",e)
                    elements = [
                        {
                            name: "Аренда",
                            link: "",
                            isElementSelect:true,
                            active:false,
                            handleClick:props.handleSelectedMenuItem,
                            subElements: [
                                {
                                    name: "Прием и утилизация снега",
                                    link: "#subSlider",
                                    handleClick:null,
                                },
                                {
                                    name: "Аренда спецтехники",
                                    link: "#block1",
                                    handleClick:null,
                                },
                                {
                                    name: "Аренда премиальных автомобилей",
                                    link: "#block2",
                                    handleClick:null,
                                },
                            ],
                        },
                        {name: "О компании", link: "#about"},
                        {name: "Партнеры", link: "#partners"},
                        {name: "Контакты", link: "#footer"},
                    ]
                    dispatch(fetchMenuError(elements))
                })
        } catch(e) {

        }
    }
}

export function fetchMenuSuccess(elements) {
    return {
        type: FETCH_MENU_SUCCESS,
        elements
    }
}

export function fetchMenuError(elements) {
    return {
        type: FETCH_MENU_ERROR,
        elements
    }
}

export function activatedMenuList(props) {
    return dispatch => {
        try {
            const els = props.props.elements
            const elements = [
                {
                    name: els[0].name,
                    link: '#'+els[0].link,
                    isElementSelect:els[0].isElementSelect,
                    active:!els[0].active,
                    handleClick:props.handleSelectedMenuItem,
                    subElements: els[0].subElements,
                },
                {...els[1]},
                {...els[2]},
                {...els[3]},
            ]
            dispatch(fetchMenuSuccess(elements))
        } catch(e) {

        }
    }
}

export function fetchService() {
    return dispatch => {
        try {
            let services = []
            const db = firebase.firestore();
            const settings = {timestampsInSnapshots: true};
            db.settings(settings);
            db.collection('services').get()
                .then((querySnapshot)=>{
                    querySnapshot.forEach((doc,i) => {
                        let service = {
                            title: doc.data().title,
                            cardHor: [],
                            cardVer: []
                        }
                        doc.data().card.map((c,key) => {
                            if (key <= 7) {
                                service.cardHor.push({
                                    name: doc.data().card[key].name,
                                    img: doc.data().card[key].img,
                                    desc: doc.data().card[key].desc,
                                    cost: doc.data().card[key].cost
                                })
                            } else if (key <= 10) {
                                service.cardVer.push({
                                    name: doc.data().card[key].name,
                                    img: doc.data().card[key].img,
                                    desc: doc.data().card[key].desc,
                                    cost: doc.data().card[key].cost
                                })
                            }
                            return null
                        })
                        services.push(service)
                    })
                    dispatch(fetchServiceSuccess(services))
                })
                .catch((e)=>{
                    // handle error
                })
        } catch(e) {

        }
    }
}

export function fetchServiceSuccess(services) {
    return {
        type: FETCH_SERVICE_SUCCESS,
        services
    }
}