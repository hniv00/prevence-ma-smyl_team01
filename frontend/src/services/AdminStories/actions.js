export const GET_S_NAME ='ADMIN_STORIES.GET_S_NAME';
export const GET_S_AGE ='ADMIN_STORIES.GET_S_AGE';
export const FETCH_STORIES = 'ADMIN_STORIES.FETCH_STORIES';

export const getName = name => ({
    type: GET_S_NAME,
    payload : {
        name
    }
});

export const getAge = age => ({
    type: GET_S_AGE,
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
