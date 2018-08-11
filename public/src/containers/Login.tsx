import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { login } from '../actions/login';
import { Login, LoginDataProps, LoginEventProps } from '../components/Login/Login';


const propToState = (state: any) => {
    return {
        errorTips: state.loginError
    }
}

const propToDisplay = (dispatch: ThunkDispatch<any, any, any>) => {
    return {
        onClick: (username: string, password: string) => {
            dispatch(login(username, password))
        }
    }
}

export default connect<LoginDataProps, LoginEventProps, any>(propToState, propToDisplay)(Login);