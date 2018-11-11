import {
    FETCH_MENU_SUCCESS,
    FETCH_SERVICE_SUCCESS,
    FETCH_APP_SUCCESS,
    FETCH_SLIDER_SUCCESS, FETCH_MENU_ERROR, FETCH_SECOND_SLIDER_SUCCESS
} from '../actions/actionType'

let initialState = {
    elements: [],
    services: [],
    secondSlider:{
        title:'',
        desc:"",
        cost:"",
        images:[],
    },
    about: {
        title:'',
        desc:'',
        services:[]
    },
    partners: {
        title:'',
        tile:[],
    },
    contacts: {
        title:'',
        phone:'',
        email:'',
        otherInfo:'',
        address:{
            desc:'',
            lat:'',
            lon:''
        },
    },
    carousel: {
        current:0,
        title: [],
        img: []
    }
}

export default function appReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_MENU_SUCCESS:
            return {
                ...state, elements: action.elements
            }
        case FETCH_MENU_ERROR:
            return {
                ...state, elements: action.elements
            }
        case FETCH_SERVICE_SUCCESS:
            return {
                ...state, services: action.services
            }
        case FETCH_APP_SUCCESS:
            return {
                ...state, ...action.app
            }
        case FETCH_SLIDER_SUCCESS:
            return {
                ...state, carousel: action.carousel
            }
        case FETCH_SECOND_SLIDER_SUCCESS:
            return {
                ...state, secondSlider: action.service
            }
        default:
            return state
    }
}