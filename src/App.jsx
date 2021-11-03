import React from 'react';
import { Input } from './Input'
import { Button } from './Button';
// import { WeatherHOC } from './WeatherComponent'
import { Table } from "./Table";

export class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Input /> <Button>Some button</Button>
        </div>
        <div>
          <Table />
        </div>
      </div>
    )
  }
}
