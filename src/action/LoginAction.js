export const addUser = (userCrential) => async (dispatch) => {
  if (userCrential.username == 'fuck' && userCrential.password == '1234') {
    dispatch({
      type: 'CHECK_USER',
      payload: true,
    });
    alert(userCrential.username == 'fuck' && userCrential.password == '1234');
  }
};
