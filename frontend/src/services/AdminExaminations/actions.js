export const SET_E_NAME ='SET_E_NAME';
export const SET_E_DESCRIPTION = 'SET_E_DESCRIPTION';
export const SET_E_EXAMINATION = 'SET_E_EXAMINATION';

export const FETCH_CREATED_EXAMINATIONS = 'FETCH_CREATED_EXAMINATIONS';

export const setName = name => ({
    type: SET_E_NAME,
    payload : {
        name
    }
});

export const setDescription = description => ({
    type: SET_E_DESCRIPTION,
    payload : {
        description
    }
});

export const setExamination = examination => ({
    type: SET_E_EXAMINATION,
    payload : {
        examination
    }
});


export const fetchCreatedExaminations = () => ({
    type: FETCH_CREATED_EXAMINATIONS
});
