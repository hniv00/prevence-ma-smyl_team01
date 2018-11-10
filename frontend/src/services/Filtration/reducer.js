import {SET_FILTER_CRITERIA} from './action';

const initialState = {
    filterCriteria: {
        gender : null,
        age : 35,
        anamnesis : [],
        lifeStyle : [],
        height : 0,
        weight : 0
    }
}
export const filtrationReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_FILTER_CRITERIA: {
            return {...state, filterCriteria: action.payload.criteria}
        }
        default: {
            return state;
        }
    }
}