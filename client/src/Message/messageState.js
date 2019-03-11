export const MESSAGE = 'MESSAGE';

const messageTopReducer = (state = 'Welcome to', action) => {
  switch (action.type) {
    case MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export const messageAction = message => ({
  type: MESSAGE,
  message,
});

export default messageTopReducer;
