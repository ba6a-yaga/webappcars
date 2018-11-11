import {combineReducers} from 'redux'
import appReducer from './application'

export default combineReducers({
    app: appReducer
})