
import css from "./Table.css";

export function Table(props) {
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
        <td>{props.data.name}</td>
        <td>{props.data.main.temp}</td>
        <td>{props.data.main.feels_like}</td>
        <td>{props.data.main.pressure}</td>
        <td>{props.data.main.humidity}</td>
      </tr>
    </table>
  );
}
