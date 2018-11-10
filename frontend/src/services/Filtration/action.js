export const SET_FILTER_CRITERIA = 'SET_FILTER_CRITERIA';
export const FETCH__FILTERED_EXAMINATION = 'FETCH_FILTERED_EXAMINATION';

export const filterExamination = criteria => ({
    type : SET_FILTER_CRITERIA,
    payload : {
        criteria
    }
});