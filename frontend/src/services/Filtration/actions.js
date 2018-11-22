export const SET_GENDER ='SET_GENDER';
export const SET_AGE = 'SET_AGE';
export const SET_ANAMNESIS = 'SET_ANAMNESIS';
export const SET_DISEASE = 'SET_DISEASE';
export const SET_LIFESTYLE = 'SET_LIFESTYLE';
export const SET_HEIGHT = 'SET_HEIGHT';
export const SET_WEIGHT = 'SET_WEIGHT';
export const FETCH_FILTERED_EXAMINATION = 'FETCH_FILTERED_EXAMINATION';
export const FETCH_FILTERED_EXAMINATION_SUCCESS = 'FETCH_FILTERED_EXAMINATION_SUCCESS';
export const FETCH_FILTERED_EXAMINATION_FAILURE = 'FETCH_FILTERED_EXAMINATION_FAILURE';

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

export const fetchFilteredExamination = () => ({
    type: FETCH_FILTERED_EXAMINATION
});

export const fetchFilteredExaminationSuccess = examinations => ({
    type: FETCH_FILTERED_EXAMINATION_SUCCESS,
    payload: {examinations}
});

export const fetchFilteredExaminationFailure = error => ({
    type: FETCH_FILTERED_EXAMINATION_FAILURE,
    payload: {error}
});

export const startFetchFilteredExaminations = criteria => (dispatch, getState, { api }) => {
    dispatch(fetchFilteredExamination());
    console.log(criteria);
    console.log(getState())
    api
      .get(decideRoute(getState()))
      .then(({ data }) => {
        const examinations = data;
        dispatch(fetchFilteredExaminationSuccess(examinations));
      })
      .catch(() => {
        dispatch(fetchFilteredExaminationFailure('Failed fetching examinations'));
      });
  };

const decideRoute = (state) =>{
    if (state.filterState.anamnesis.lenght === 0 || state.filterState.disease.lenght === 0) {
        let {age, gender} = state.filterState;
        return 'examinations/${gender}/${age}'
    }
}