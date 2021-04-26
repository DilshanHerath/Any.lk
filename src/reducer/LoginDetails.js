const INITIAL_STATE = {
  success: false,
  userCredential: {},
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, userCredential: action.payload };
    case 'CHECK_USER':
      return { ...state, success: action.payload };
    default:
      return state;
  }
};
