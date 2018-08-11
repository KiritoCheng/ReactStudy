import { GET_LIST, ADD_ITEM, DEL_ITEM } from '../actions/list';

export let list = (state: any[] = [], action: any) => {
    switch (action.type) {
        case GET_LIST:
            return action.data;
        case ADD_ITEM:
            return [...state, action.text];
        case DEL_ITEM:
            return state.filter((k, i) =>i != action.id)
        default:
            return state
    }
}