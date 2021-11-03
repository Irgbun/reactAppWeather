import React from "react";
import css from "./Table.css";

export class Table extends React.Component {
    state = {
        city: "Minsk",
        temp: "30",
        tempFeels: "33",
        pressure: "573",
        humidity: "70",
      }


  render() {
    return (
      <table>
        <tr>
          <td>City</td>
          <td>Temperature</td>
          <td>Temperature feels</td>
          <td>Pressure</td>
          <td>Humidity</td>
        </tr>
        <tr>
          <td>{this.state.city}</td>
          <td>{this.state.temp}</td>
          <td>{this.state.tempFeels}</td>
          <td>{this.state.pressure}</td>
          <td>{this.state.humidity}</td>
        </tr>
      </table>
    );
  }
}
