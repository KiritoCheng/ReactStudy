import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { List, ListDataProps, ListEventProps } from '../components/List';
import { getList, delItem } from '../actions/list';
import { login } from '../actions/login';

const mapToState = (state: any) => {
    console.log("state:"+state.login);

    return {
        list: state.list,
        success: state.login
    }
}

const mapToProps = (dispatch: ThunkDispatch<any, any, any>) => {
    return {
        componentDidMount: () => {
            dispatch(getList())
        }
        ,
        onDelItem: (i: number) => {
            dispatch(delItem(i))
        }
    }
}

export default connect<ListDataProps, ListEventProps, any>(mapToState, mapToProps)(List)