import { combineReducers } from 'redux';

import { list } from './list';
import { login, loginError } from './login';
import { booklist } from './book';


export default combineReducers({
    list,
    login, loginError,
    booklist
});