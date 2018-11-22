export const SET_DIAGNOSIS ='SET_DIAGNOSIS';

export const setDiagnosis = diagnosis => ({
    type: SET_DIAGNOSIS,
    payload : {
        diagnosis
    }
});
