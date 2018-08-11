import * as React from "react";
import AddItem from '../containers/AddItem'
import { join } from "path";
export interface ListDataProps {
    list: any[]
    success: boolean;
}

export interface ListEventProps {
    componentDidMount: () => void
    onDelItem: (i: number) => void
}

export interface ListProps extends ListDataProps, ListEventProps { }

export class List extends React.Component<ListProps>{
    componentDidMount() {
        this.props.componentDidMount();
    }

    render() {
        const { list } = this.props
        return (
            <>
                <AddItem />
                显示列表：
                {
                    list.map((k, i) => {
                        return (
                            <div style={{ lineHeight: '32px', background: '#eee', margin: '20px' }}
                                onClick={() => this.props.onDelItem(i)}
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