import * as React from "react";

export interface ListDataProps {
    list: number[]
}
export interface ListEventProps {
    componentDidMount: () => void
}

interface ListProps extends ListDataProps, ListEventProps { }

export class List extends React.Component<ListProps>{
    componentDidMount() {
        this.props.componentDidMount()
    }
    render() {
        const { list } = this.props
        return (
            <>
                显示列表：
                {
                    list.map((k, i) => {
                        return (
                            <div style={{ lineHeight: '32px', background: '#eee', margin: '20px' }}
                                key={i}>
                                {k}
                            </div>
                        )
                    })
                }
            </>
        )
    }
}