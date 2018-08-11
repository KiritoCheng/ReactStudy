import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { login } from '../actions/login';
import { Login, LoginDataProps, LoginEventProps } from '../components/Login';
import { HashRouter as Router, Route, Link, HashRouter } from 'react-router-dom';
let timeOut: any = null;


const propToState = (state: any) => {
    return {
        errorTips:state.loginError
    }
}

const propToDisplay = (dispatch: ThunkDispatch<any, any, any>) => {
    return {
        onClick: (username: string, password: string) => {
            console.log(123)
            dispatch(login(username, password))
        }
    }
}

export default connect<LoginDataProps, LoginEventProps>(propToState, propToDisplay)(Login);