import { GET_BOOK_LIST } from '../actions/book';

export let booklist = (state: any = {}, action: any) => {
    switch (action.type) {
        case GET_BOOK_LIST:
            return action.data
        default:
            return state
    }
}