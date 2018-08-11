import * as React from "react";

export interface BookDataProps {
    list: any
}
export interface BookEventProps {
    componentDidMount: () => void
}
interface BookProps extends BookDataProps, BookEventProps { }
export class Book extends React.Component<BookProps, any>{
    componentDidMount() {
        this.props.componentDidMount()
    }
    render() {
        console.log(this.props.list)
        return (
            <div>
                <iframe src="https://img3.doubanio.com/view/subject/l/public/s1000002.jpg"/>
            </div>
        )
    }
}