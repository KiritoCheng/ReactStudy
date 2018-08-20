import * as React from "react";


interface MediaProps {
    mediaLeft: string
    mediaBody: string | JSX.Element
}
export class Media extends React.Component<MediaProps, any>{
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: ' flex-start' }}>
                <div style={{ marginRight: "12px" }}>
                    <img src={this.props.mediaLeft} width={135} style={{}} />
                </div>
                <div>{this.props.mediaBody}</div>
            </div>
        )
    }
}