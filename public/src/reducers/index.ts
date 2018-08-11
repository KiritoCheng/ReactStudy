import { combineReducers } from 'redux';

import { list } from './list';
import { login, loginError } from './login';
import { book } from './book';


export default combineReducers({
    list, login, loginError,book
});