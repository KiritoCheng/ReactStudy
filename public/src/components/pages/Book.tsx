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
        return (
            <div>
                {
                    JSON.stringify(this.props.list) !== '{}' && this.props.list.map((k: any, i: any) => {
                        console.log(k['data'].Img)
                        return (
                            <img key={i} src={k['data'].Img} />
                        )
                    })
                }
            </div>
        )
    }
}