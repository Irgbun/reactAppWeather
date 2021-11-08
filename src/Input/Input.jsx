import React from "react";



// export function Input(props) {
//     return <input type="text" value={ props.value } onChange={ props.onChange } />
// }


export class Input extends React.Component {
    render() {
        return <input type="text" value={ this.props.value } onChange={ this.props.onChange } />
    }
}