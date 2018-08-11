import { BOOK_RESPONSE } from "../actions/book";


export let book = (state: boolean = false, action: any) => {
    switch (action.type) {
        case BOOK_RESPONSE:
            return action.success;
        default:
            return state
    }
}