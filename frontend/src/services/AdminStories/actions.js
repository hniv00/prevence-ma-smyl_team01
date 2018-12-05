export const GET_D_NAME ='GET_D_NAME';
export const GET_D_AGE ='GET_D_AGE';
export const FETCH_STORIES = 'FETCH_STORIES';

export const getName = name => ({
    type: GET_D_NAME,
    payload : {
        name
    }
});

export const getAge = age => ({
    type: GET_D_AGE,
    payload : {
        age
    }
});

export const fetchStories = stories => ({
    type: FETCH_STORIES,
    payload: {stories}
});

export const startFetchStories = () => (dispatch, getState, { api }) => {
  dispatch(fetchStories());

  api
  .get(`story/list`)
  .then(({ data }) => {
    const {stories} = data;
    dispatch(fetchStories(stories));
  })
}
