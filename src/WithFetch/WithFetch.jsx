import React from 'react';


// const URLParamsSearch = new URLSearchParams({ q: 'minsk', units: 'metric', appid: 'process.env.REACT_APP_OPEN_WEATHER_TOKEN' }).toString()


export const WithFetch = (Component, url) => {
    class SomeClass extends React.Component {
        state = {
            data: [],
            isError: false,
            isLoading: false
        }

        getData = () => {
            this.setState({ isLoading: true })
            fetch(url)
                .then((resp) => {
                    if (resp.ok) {
                        return resp.json()
                    }
                    throw new Error('Не работает!')
                })
                .then(([data]) => {
                    this.setState({ data })
                })
                .catch(() => {
                    this.setState({ isError: true })
                })
                .finaly(() => {
                    this.setState({ isLoading: false })
                })
        }

        componentDidMount() {
            this.getData()
        }

        render() {
            return (
                <Component
                isLoading={ this.state.isLoading }
                isError={ this.state.isError }
                data={ this.state.data }
                {...this.props}
                />
            )
        }
    }
}
