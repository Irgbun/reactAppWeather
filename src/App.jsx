import React from 'react';
import { WeatherHOC } from './WeatherComponent'

export class App extends React.Component {
  render() {
    return (
      <div>
        <div>
        </div>
        <div>
          <WeatherHOC  /> 
        </div>
      </div>
    )
  }
}