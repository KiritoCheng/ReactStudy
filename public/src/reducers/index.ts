import { combineReducers } from 'redux';

import { list } from './list';
import { login, loginError } from './login';


export default combineReducers({
    list, login, loginError
});