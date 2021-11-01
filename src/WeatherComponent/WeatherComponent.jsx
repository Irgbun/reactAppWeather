import React from 'react';
import { WithFetch } from '../WithFetch'
import { Table } from '../Table'



class WeatherComponent extends React.Component {
    state = {
        q: "",
        unit: "",
        value: "",
    }

    getData = () => {
        const { fetchData } = this.props
        const token = process.env.REACT_APP_OPEN_WEATHER_TOKEN
        fetchData({ ...this.state, appId: token })
    }

    componentDidMount() {
        this.getData()
    }

    componentDidUpdate() {
        this.getData()
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
