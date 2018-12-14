export const FETCH_STORIES = 'STORIES.FETCH_STORIES';
export const FETCH_STORIES_SUCCESS = 'STORIES.FETCH_SUCCESS';
export const FETCH_STORIES_FAILURE = 'STORIES.FETCH_FAILURE';

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
