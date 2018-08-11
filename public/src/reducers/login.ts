import { LOGIN_ACTION, LOGIN_ERROR } from '../actions/login';


export let login = (state: boolean = false, action: any) => {
    switch (action.type) {
        case LOGIN_ACTION:
            return action.isLogin;
        default:
            return state
    }
}

export let loginError = (state: string = '', action: any) => {
    switch (action.type) {
        case LOGIN_ERROR:
            return action.error
        default:
            return state
    }
}