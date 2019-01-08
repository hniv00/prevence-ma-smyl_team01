export const CHANGE_FORM_STATE = 'CHANGE_FORM_STATE';
export const SEND_FORM = 'SEND_FORM';
export const SEND_FORM_SUCCESS = 'SEND_FORM_SUCCESS';
export const SEND_FORM_FAILURE = 'SEND_FORM_FAILURE';

export const changeFormState = formState => ({
  type: CHANGE_FORM_STATE,
  payload: {
    formState,
  },
});

export const sendForm = () => ({
  type: SEND_FORM,
});

export const sendFormSuccess = form => ({
  type: SEND_FORM_SUCCESS,
  payload: { form },
});

export const sendFormFailure = error => ({
  type: SEND_FORM_FAILURE,
  payload: { error },
});

export const startSendForm = () => (dispatch, getState, { api }) => {
  let formData = getState().sendContactForm;
  api
    .post('email/send', {
      name: formData.name,
      email: formData.email,
      text: formData.text,
    })
    .then(dispatch(sendFormSuccess()))
    .catch(dispatch(sendFormFailure('Cannot send email')));
};
