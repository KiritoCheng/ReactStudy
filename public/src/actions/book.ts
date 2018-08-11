import { httpBookList } from "../libs/api";
import { ThunkDispatch } from "redux-thunk";

export const GET_BOOK_LIST = 'GET_BOOK_LIST'
export const booklist = (data: any) => {
    return {
        type: GET_BOOK_LIST,
        data
    }
}
export const getBookList = () => {
    return (dispatch: ThunkDispatch<any, any, any>) => {
        httpBookList()
            .then((data) => {
                dispatch(booklist(data))
            })
    }
}