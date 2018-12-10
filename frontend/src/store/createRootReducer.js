import { combineReducers } from 'redux';
import filtrationReducer from '../services/Filtration/reducer'
import partnersReducer from '../services/Partners/reducer'
import diagnosisReducer from '../services/AdminDiagnosis/reducer'
import contactFormReducer from '../services/Contact/reducer'
import adminDiagnosisReducer from '../services/AdminDiagnosis/reducer'
import adminStoriesReducer from '../services/AdminStories/reducer'
import adminExamsReducer from '../services/AdminExaminations/reducer'

export default combineReducers({
    filterState: filtrationReducer,
    filterPartner: partnersReducer,
    createDiagnosis: diagnosisReducer,
    sendContactForm: contactFormReducer,
    adminDiagnosis: adminDiagnosisReducer,
    adminStories: adminStoriesReducer,
    adminExams: adminExamsReducer,
});
