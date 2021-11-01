import React from 'react';
import { Input } from './Input'
import { Button } from './Button';
import { WeatherHOC } from './WeatherComponent'

export class App extends React.Component {
  state = {
    value: "",
  }


  onChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div>
        <div>
          <Input value={ this.props.value } onChange={ this.props.onChange } /> <Button>Some button</Button>
        </div>
        <div>
          <WeatherHOC />
        </div>
      </div>
    )
  }
}
