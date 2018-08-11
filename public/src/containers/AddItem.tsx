import * as React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/list'
import { ThunkDispatch } from 'redux-thunk';

export interface InputEventProps {
    onSubmit: (text: String) => void
}

const mapToProps = (dispatch: ThunkDispatch<any, any, any>) => {
    return {
        onSubmit: (text: String) => {
            dispatch(addItem(text));
        }
    }
}

class AddItem extends React.Component<InputEventProps, any>{
    private input: HTMLInputElement;

    handleSubmit(e: any) {
        e.preventDefault();
        if (!this.input.value.trim()) {
            return;
        }
        this.props.onSubmit(this.input.value);
        this.input.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={e => { this.handleSubmit(e) }}>
                    <input ref={node => this.input = node} />
                    <button type="submit">
                        Add Item
                </button>
                </form>
            </div>
        );
    }

}

export default connect(null, mapToProps)(AddItem);
