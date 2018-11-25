import { combineReducers } from 'redux';
import filtrationReducer from '../services/Filtration/reducer'
import partnersReducer from '../services/Partners/reducer'

export default combineReducers({
    filterState: filtrationReducer,
    filterPartner: partnersReducer,
});
