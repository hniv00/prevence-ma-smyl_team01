export const GET_S_NAME = 'ADMIN_STORIES.GET_S_NAME';
export const GET_S_AGE = 'ADMIN_STORIES.GET_S_AGE';
export const GET_S_DESCRIPTION = 'ADMIN_STORIES.GET_S_DESCRIPTION';
export const FETCH_STORIES = 'ADMIN_STORIES.FETCH_STORIES';
export const FETCH_STORIES_SUCCESS = 'ADMIN_STORIES.FETCH_SUCCESS';
export const FETCH_STORIES_FAILURE = 'ADMIN_STORIES.FETCH_FAILURE';
export const DELETE_STORY = 'ADMIN_STORIES.DELETE_STORIES';
export const DELETE_STORY_SUCCESS = 'ADMIN_STORIES.DELETE_SUCCESS';
export const DELETE_STORY_FAILURE = 'ADMIN_STORIES.DELETE_FAILURE';
export const CREATE_STORY = 'ADMIN_STORIES.CREATE_STORY';
export const CREATE_STORY_SUCCESS = 'ADMIN_STORIES.CREATE_STORY_SUCCESS';
export const CREATE_STORY_FAILURE = 'ADMIN_STORIES.CREATE_STORY_FAILURE';
export const CHANGE_STORY_STATE = 'ADMIN_STORIES.CHANGE_STORY_STATE';

export const changeStoryState = storyParams => ({
  type: CHANGE_STORY_STATE,
  payload: {
    storyParams,
  },
});

export const getName = name => ({
  type: GET_S_NAME,
  payload: {
    name,
  },
});

export const getAge = age => ({
  type: GET_S_AGE,
  payload: {
    age,
  },
});

export const getDescription = description => ({
  type: GET_S_DESCRIPTION,
  payload: {
    description,
  },
});

export const fetchStories = () => ({
  type: FETCH_STORIES,
});

export const fetchStoriesSuccess = stories => ({
  type: FETCH_STORIES_SUCCESS,
  payload: { stories },
});

export const fetchStoriesFailure = error => ({
  type: FETCH_STORIES_FAILURE,
  payload: { error },
});

export const startFetchStories = () => (dispatch, getState, { api }) => {
  dispatch(fetchStories());
  api
    .get(`story/list`)
    .then(({ data }) => {
      let { stories } = data;
      dispatch(fetchStoriesSuccess(stories));
    })
    .catch(fetchStoriesFailure('Failed to fetch stories'));
};

// -- DELETE -- //

export const deleteStory = () => ({
  type: DELETE_STORY,
});

export const deleteStorySuccess = response => ({
  type: DELETE_STORY_SUCCESS,
  payload: { response },
});

export const deleteStoryFailure = error => ({
  type: DELETE_STORY_FAILURE,
  payload: { error },
});

export const startDeleteStory = storyId => (dispatch, getState, { api }) => {
  dispatch(deleteStory());
  api
    .post(`story/delete/${storyId}`)
    .then(() => {
      dispatch(deleteStorySuccess(`Deleted storyination with ID ${storyId}`));
    })
    .catch(deleteStoryFailure('Failed to delete story'));
  dispatch(startFetchStories());
};

// -- CREATE -- //

export const createStory = () => ({
  type: CREATE_STORY,
});

export const createStorySuccess = response => ({
  type: CREATE_STORY_SUCCESS,
  payload: { response },
});

export const createStoryFailure = error => ({
  type: CREATE_STORY_FAILURE,
  payload: { error },
});

export const startCreateStory = () => (dispatch, getState, { api }) => {
  let storyState = getState().adminStories;

  let body = {
    Name: storyState.name,
    Age: storyState.age,
    Description: storyState.description,
  };
  dispatch(createStory());
  api
    .post(`story/new`, body)
    .then(() => {
      dispatch(createStorySuccess('Story has been created'));
      dispatch(startFetchStories());
    })
    .catch(createStoryFailure('Failed to create story'));
};
