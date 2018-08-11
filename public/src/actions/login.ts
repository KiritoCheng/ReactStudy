import { ThunkDispatch } from 'redux-thunk';

export const LOGIN_ACTION = "LOGIN_ACTION";
export const LOGIN_ERROR = "LOGIN_ERROR";


export const loginIn = (isLogin: boolean) => {
    return {
        type: LOGIN_ACTION,
        isLogin
    }

}
export const loginError = (error: string) => {
    return {
        type: LOGIN_ERROR,
        error
    }
}


export const login = (user: string, pwd: string) => {
    return (dispatch: ThunkDispatch<any, any, any>) => {
        if (user.trim() !== '123') {
            dispatch(loginError('账号错误'))
            return
        }
        if (pwd.trim() !== '123') {
            dispatch(loginError('密码错误'))
            return
        }
        dispatch(loginIn(true))
    }

}