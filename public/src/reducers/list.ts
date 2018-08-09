import { GET_LIST } from '../actions/list';

export let list = (state: any[] = [], action: any) => {
    switch (action.type) {
        case GET_LIST:
            return action.data
        default:
            return state
    }
}