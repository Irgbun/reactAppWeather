import React from 'react';
import { WeatherHOC } from './WeatherComponent'
import { Input } from './Input'

export class App extends React.Component {
  state = {
    searchValue: ""
  };

  changeSerchValue = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    return (
      <div>
        <Input value={this.state.searchValue} onChange={this.changeSerchValue} />
        <WeatherHOC searchValue={ this.state.searchValue } />
      </div>
    )
  }
}