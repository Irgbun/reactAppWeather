import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { WithFetch } from './WithFetch'

class WeatherComponent extends React.Component {
    state = {
        q: "",
        unit: "",
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
        return(
            <div>
                {isError && <p>Что-то пошло не так</p>}
                {isLoading && !isError && <p>Загрузка</p>}
                {!isLoading && !isError && <Component data={data} />}
            </div>
        )
    }
}

const weatherAPIURL = "https://api.openweathermap.org/data/2.5/weather"

const WeatherHOC = WithFetch(WeatherComponent, weatherAPIURL)




ReactDOM.render(
  <WeatherHOC />,
  document.getElementById('root')
);