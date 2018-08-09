import { ThunkDispatch } from 'redux-thunk';

export const GET_LIST = 'GET_LIST';
export const listData = (data: any) => {
    return {
        type: GET_LIST,
        data
    }
}
export const getList = () => {
    return (dispatch: ThunkDispatch<any, any, any>) => {
        let data = [1, 2, 3, 4, 5]
        dispatch(listData(data))
    }
}