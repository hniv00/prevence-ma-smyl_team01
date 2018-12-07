export const GET_S_NAME ='ADMIN_STORIES.GET_S_NAME';
export const GET_S_AGE ='ADMIN_STORIES.GET_S_AGE';
export const FETCH_STORIES = 'ADMIN_STORIES.FETCH_STORIES';
export const FETCH_STORIES_SUCCESS = 'ADMIN_STORIES.FETCH_SUCCESS';
export const FETCH_STORIES_FAILURE = 'ADMIN_STORIES.FETCH_FAILURE';

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

export const fetchStories = () => ({
    type: FETCH_STORIES,
});

export const fetchStoriesSuccess = stories => ({
    type: FETCH_STORIES_SUCCESS,
    payload: {stories}
});

export const fetchStoriesFailure = error => ({
    type: FETCH_STORIES_FAILURE,
    payload: {error}
});

export const startFetchStories = () => (dispatch, getState, { api }) => {
  dispatch(fetchStories());
  api
  .get(`story/list`)
  .then(({ data }) => {
      let {stories} = data;
    dispatch(fetchStoriesSuccess(stories));
  })
  .catch(fetchStoriesFailure("Failed to fetch stories"));
}
