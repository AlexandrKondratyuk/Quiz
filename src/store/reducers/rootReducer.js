// rootReducer => a function that integrates all existing reducers

import {combineReducers} from 'redux'
import quizReducer from './quiz'

// esport function in wich we transfer config object and where we describe all reducers
export default combineReducers({
    quiz: quizReducer
})