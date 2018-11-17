import { combineReducers } from 'redux';
import filtrationReducer from '../services/Filtration/reducer'

export default combineReducers({
    filterState: filtrationReducer
});