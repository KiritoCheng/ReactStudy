import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Book, BookDataProps, BookEventProps } from '../../components/pages/Book';
import { getBookList } from '../../actions/book';

const maToState = (state: any) => {
    return {
        list: state.booklist
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