import { combineReducers } from 'redux';
import LoginUser from '../reducer/LoginDetails';
import FooterDetails from '../reducer/FooterReducer';

export default combineReducers({
  login: LoginUser,
  footer: FooterDetails,
});
