import React from "react";



export class Input extends React.Component {
    render() {
        return (
            <div>
                <input type="text" value={ this.props.value } onChange={ this.props.onChange } />
            </div>
        )
    }
}