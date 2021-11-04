import React from "react";



export class Input extends React.Component {
    state = {
        value: "",
    }

    onChange = (event) => {
        this.setState({ value: event.target.value })
      }

      
    render() {
        return (
            <div>
                <input type="text" value={ this.state.value } onChange={ this.onChange } />
            </div>
        )
    }
}