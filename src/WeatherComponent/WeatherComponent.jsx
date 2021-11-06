import React from 'react';
import { WithFetch } from '../WithFetch'
import { Table } from '../Table'
import { Input } from '../Input'



class WeatherComponent extends React.Component {
    state = {
        q: "Minsk",
        units: "metric",
        appId: "",
    }

    onChange = (event) => {
        this.setState({ q: event.target.q });
      };

    getData = () => {
        const { fetchData } = this.props
        const token = process.env.REACT_APP_OPEN_WEATHER_TOKEN
        fetchData({ ...this.state, appId: token })
    }

    componentDidMount() {
        this.getData()
    }

    componentDidUpdate(_, prevState) {
        if (this.state.q !== prevState.q) {
          this.getData();
        }
      }

    render() {
        const { isError, isLoading, isLoaded, data } = this.props;
        return (
            <div>
                <Input value={ this.state.q } onChange={ this.onChange } />
                {console.log(this.state)}
                {isError && <p>Что-то пошло не так</p>}
                {isLoading && !isError && <p>Загрузка</p>}
                {!isLoading && !isError && isLoaded && <Table data={data} />}
            </div>
        )
    }
}

const weatherAPIURL = "https://api.openweathermap.org/data/2.5/weather"

export const WeatherHOC = WithFetch(WeatherComponent, weatherAPIURL)