import { combineReducers } from 'redux';
import filtrationReducer from '../services/Filtration/reducer'
import partnersReducer from '../services/Partners/reducer'
import diagnosisReducer from '../services/AdminDiagnosis/reducer'
import contactFormReducer from '../services/Contact/reducer'
import adminDiagnosisReducer from '../services/AdminDiagnosis/reducer'
import adminStoriesReducer from '../services/AdminStories/reducer'
import adminExamsReducer from '../services/AdminExaminations/reducer'
import storiesReducer from '../services/Stories/reducer'
import eventsReducer from '../services/Events/reducer'
import adminIndicationsReducer from '../services/AdminIndication/reducer'
import adminArticlesReducer from '../services/AdminArticle/reducer'
import adminEventsReducer from '../services/AdminEvents/reducer'

export default combineReducers({
    filterState: filtrationReducer,
    filterPartner: partnersReducer,
    createDiagnosis: diagnosisReducer,
    sendContactForm: contactFormReducer,
    adminDiagnosis: adminDiagnosisReducer,
    adminStories: adminStoriesReducer,
    adminExams: adminExamsReducer,
    showStories: storiesReducer,
    showEvents: eventsReducer,
    adminIndications: adminIndicationsReducer,
    adminArticles: adminArticlesReducer,
    adminEvents: adminEventsReducer,
});
