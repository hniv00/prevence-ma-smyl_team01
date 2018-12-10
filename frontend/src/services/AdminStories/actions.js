export const GET_S_NAME ='ADMIN_STORIES.GET_S_NAME';
export const GET_S_AGE ='ADMIN_STORIES.GET_S_AGE';
export const FETCH_STORIES = 'ADMIN_STORIES.FETCH_STORIES';
export const FETCH_STORIES_SUCCESS = 'ADMIN_STORIES.FETCH_SUCCESS';
export const FETCH_STORIES_FAILURE = 'ADMIN_STORIES.FETCH_FAILURE';
export const DELETE_STORY = 'ADMIN_STORIES.DELETE_STORIES';
export const DELETE_STORY_SUCCESS = 'ADMIN_STORIES.DELETE_SUCCESS';
export const DELETE_STORY_FAILURE = 'ADMIN_STORIES.DELETE_FAILURE';

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

 // -- DELETE -- //

 export const deleteStory = () => ({
    type: DELETE_STORY,
});

export const deleteStorySuccess = response => ({
    type: DELETE_STORY_SUCCESS,
    payload: {response}
});

export const deleteStoryFailure = error => ({
    type: DELETE_STORY_FAILURE,
    payload: {error}
});

export const startDeleteStory = (storyId) => (dispatch, getState, { api }) => {
  dispatch(deleteStory());
  api
  .post(`story/deletestory/${storyId}`)
  .then(() => {
    dispatch(deleteStorySuccess(`Deleted storyination with ID ${storyId}`));
  })
  .catch(deleteStoryFailure("Failed to delete story"));
  dispatch(startFetchStories())
}

/* Just a start of an experiment */
/*
export const startDeleteStory = () => (dispatch, getState, {api}) => {
  dispatch(deleteStory());
  api
  .post('story/deletestory/:id', deleteStoryController)
  .catch(deleteStoryFailure("Failed to delete the story"));
}
*/
