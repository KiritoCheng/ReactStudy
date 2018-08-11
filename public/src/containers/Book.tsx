import * as React from 'react';
import { ThunkDispatch } from '../../../node_modules/redux-thunk';
import { bookResponse } from '../actions/book';
import { connect } from 'react-redux';
import '../css/Book.css';
let bookData: any = null;

const propsToState = (state: any) => {
    return {
        success: state.book
    }
}


const propsToDispatch = (dispatch: ThunkDispatch<any, any, any>) => {
    return {
        onResponse: (success: boolean) => {
            dispatch(bookResponse(success));
        }
    }
}

interface BookResponseProps {
    success: boolean;
}

interface BookEventProps {
    onResponse: (success: boolean) => void;
}

interface BookProps extends BookResponseProps, BookEventProps { }

class Books extends React.Component<BookProps> {

    componentDidMount() {
        fetch("/booklist", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/text',
                'Access-Control-Allow-Origin': '*'
            },
        })
            .then(response => response.text())
            .then(data => {
                bookData = JSON.parse(data);
                this.props.onResponse(true);
            })
            .catch(e => { console.log("Oops, error", e); this.props.onResponse(false) });
    }

    render() {
        if (this.props.success) {
            console.log("hasBookData");
            return (
                <>
                    <div className="pageTitle">豆瓣图书采集</div>
                    <div className="underPageTitle"></div>
                    <div className="bookList">
                        {
                            bookData.map((k: any, i: any) => {
                                for (var item in k) {
                                    let book = k[item];

                                    return (
                                        <div className="book">
                                            <h4>{book.Name}</h4>
                                            <div className="bookContent">
                                                <div className='bookPicture'>
                                                    <img className="picture" src={book.Img} alt="图片无法加载" />
                                                </div>
                                                <div className="bookInfo">
                                                    <span className="pl">作者: </span>{book.Author}<br />
                                                    <span className="pl">出版社: </span>{book.Publish}<br />
                                                    <span className="pl">出版年: </span>{book.Year}<br />
                                                    <span className="pl">页数: </span>{book.Page}<br />
                                                    <span className="pl">定价: </span>{book.Price}<br />
                                                    <span className="pl">装帧: </span>{book.Thickness}<br />
                                                    <span className="pl">编号: </span>{book.ISBN}<br />
                                                    <span className="pl">评分: </span>{book.Grade}<br />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                // k.map((l: any) => {
                                //     <div className="book">
                                //         <h1>{l.Name}</h1>
                                //     </div>
                                // })
                            })
                        }
                    </div>
                </>
            )
        }

        return null;
    }
}

export default connect<BookResponseProps, BookEventProps, any>(propsToState, propsToDispatch)(Books);