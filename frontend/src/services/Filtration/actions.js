export const SET_GENDER ='SET_GENDER';
export const SET_AGE = 'SET_AGE';
export const SET_ANAMNESIS = 'SET_ANAMNESIS';
export const SET_DISEASE = 'SET_DISEASE';
export const SET_LIFESTYLE = 'SET_LIFESTYLE';
export const SET_HEIGHT = 'SET_HEIGHT';
export const SET_WEIGHT = 'SET_WEIGHT';
export const FETCH_FILTERED_EXAMINATION = 'FETCH_FILTERED_EXAMINATION';

export const setGender = gender => ({
    type: SET_GENDER,
    payload : {
        gender
    }
});

export const setAge = age => ({
    type: SET_AGE,
    payload : {
        age
    }
});

export const setAnamnesis = anamnesis => ({
    type: SET_ANAMNESIS,
    payload : {
        anamnesis
    }
});

export const setDisease = disease => ({
    type: SET_DISEASE,
    payload : {
        disease
    }
});

export const setLifestyle = lifestyle => ({
    type: SET_LIFESTYLE,
    payload : {
        lifestyle
    }
});

export const setHeight = height => ({
    type: SET_HEIGHT,
    payload : {
        height
    }
});

export const setWeight = weight => ({
    type: SET_WEIGHT,
    payload : {
        weight
    }
});