import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Book, BookDataProps, BookEventProps } from '../../components/pages/Book';
import { getBookList } from '../../actions/book';

const maToState = (state: any) => {
    let list = [];
    if (JSON.stringify(state.booklist) !== '{}') {
        list = state.booklist.map((k: any, i: any) => {
            return k['data']
        })
    }
    return {
        list: list
    }
}

const mapToProps = (dispatch: ThunkDispatch<any, any, any>) => {
    return {
        componentDidMount: () => {
            dispatch(getBookList())
        }
    }
}
export default connect<BookDataProps, BookEventProps, any>(maToState, mapToProps)(Book)