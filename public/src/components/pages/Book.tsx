import * as React from "react";
import { Media } from "../Media";

export interface BookDataProps {
    list: {
        ID: number
        Name: string
        OriginalName: string
        Img: string
        Author: string
        Translator: string
        Publish: string
        Year: string
        Page: string
        Price: string
        Thickness: string
        Type: string
        Grade: number
        ISBN: string
    }[]
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
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {
                    this.props.list.map((k, i) => {
                        return (
                            <div key={i} style={{ margin: 16, width: '500px', wordBreak: 'break-all' }}>
                                <div style={{ fontSize: '24px', fontWeight: 800, marginBottom: 16 }}>{k.Name}</div>
                                <Media mediaLeft={k.Img} mediaBody={
                                    <div style={{ fontSize: 14 }}>
                                        {k.Author && <Item title='作者' text={k.Author} />}
                                        {k.Translator && <Item title='翻译者' text={k.Translator} />}
                                        {k.OriginalName && <Item title='原作名' text={k.OriginalName} />}
                                        {k.Publish && <Item title='出版社' text={k.Publish} />}
                                        {k.Year && <Item title='出版年' text={k.Year} />}
                                        {k.Page && <Item title='页数' text={k.Page} />}
                                        {k.Price && <Item title='定价' text={k.Price} />}
                                        {k.Thickness && <Item title='装帧' text={k.Thickness} />}
                                        {k.Type && <Item title='丛书' text={k.Type} />}
                                        {k.ISBN && <Item title='ISBN' text={k.ISBN} />}
                                    </div>
                                } />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const Item: React.StatelessComponent<{ title: string; text: string }> = (props) => {
    return (
        <div style={{ lineHeight: '21px', width: '100%' }}>
            <span style={{ color: '#666' }}>{props.title}: </span>
            <span>{props.text}</span>
        </div>
    )
}