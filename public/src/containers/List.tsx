import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { List, ListDataProps, ListEventProps } from '../components/List';
import { getList, delItem } from '../actions/list';

const mapToState = (state: any) => {
    return {
        list: state.list,
    }
}

const mapToProps = (dispatch: ThunkDispatch<any, any, any>) => {
    return {
        componentDidMount: () => {
            dispatch(getList())
        },
        onDelItem: (i: number) => {
            dispatch(delItem(i))
        }
    }
}

export default connect<ListDataProps, ListEventProps, any>(mapToState, mapToProps)(List)