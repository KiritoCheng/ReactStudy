import { ThunkDispatch } from 'redux-thunk';


export const GET_LIST = 'GET_LIST';
export const ADD_ITEM = 'ADD_ITEM';
export const DEL_ITEM = 'DEL_ITEM';

export const listData = (data: any) => {
    return {
        type: GET_LIST,
        data
    }
}

export const delItem = (id: number) => {
    return{
        type: DEL_ITEM,
        id
    }
}


export const addItem = (text: String) => {
    return {
        type: ADD_ITEM,
        text
    }
}


// export const addInputItem = (text:String)=>{
//     return (dispatch: ThunkDispatch<any, any, any>) => {
//         dispatch(addItem(text))
//     }
// }

export const getList = () => {
    return (dispatch: ThunkDispatch<any, any, any>) => {
        let data = [1, 2, 3, 4, 5]
        dispatch(listData(data))
    }
}