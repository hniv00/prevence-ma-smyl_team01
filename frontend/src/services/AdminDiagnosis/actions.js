export const SET_D_NAME ='SET_D_NAME';
export const SET_D_DESCRIPTION = 'SET_D_DESCRIPTION';
export const SET_D_EXAMINATION = 'SET_D_EXAMINATION';

export const FETCH_CREATED_DIAGNOSIS = 'FETCH_CREATED_DIAGNOSIS';

export const setName = name => ({
    type: SET_D_NAME,
    payload : {
        name
    }
});

export const setDescription = description => ({
    type: SET_D_DESCRIPTION,
    payload : {
        description
    }
});

export const setExamination = examination => ({
    type: SET_D_EXAMINATION,
    payload : {
        examination
    }
});


export const fetchCreatedDiagnosis = () => ({
    type: FETCH_CREATED_DIAGNOSIS
});
