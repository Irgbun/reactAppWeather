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

    getData = () => {
        const { fetchData } = this.props
        const token = process.env.REACT_APP_OPEN_WEATHER_TOKEN
        const searchParams = new URLSearchParams({
            q: this.state.q,
            units: this.state.units,
            appId: token
          }).toString();
        fetchData({ ...this.state, appId: token, searchParams })
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
        const { isError, isLoading, data } = this.props;
        return (
            <div>
                {isError && <p>Что-то пошло не так</p>}
                {isLoading && !isError && <p>Загрузка</p>}
                {!isLoading && !isError && <Table data={data} />}
            </div>
        )
    }
}

const weatherAPIURL = "https://api.openweathermap.org/data/2.5/weather"

export const WeatherHOC = WithFetch(WeatherComponent, weatherAPIURL)