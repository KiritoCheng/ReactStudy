import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { List, ListDataProps, ListEventProps } from '../components/List';
import { getList } from '../actions/list';

const mapToState = (state: any) => {
    console.log(state.list)
    return {
        list: state.list
    }
}

const mapToProps = (dispatch: ThunkDispatch<any, any, any>) => {
    return {
        componentDidMount: () => {
            dispatch(getList())
        }
    }
}

export default connect<ListDataProps, ListEventProps, any>(mapToState, mapToProps)(List)