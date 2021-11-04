import React from 'react';

// const URLParamsSearch = new URLSearchParams({ q: { this.props.q }}, units: { this.props.units }}, appid: {this.props.token} }).toString()


export const WithFetch = (Component, url) => {
    return (class SomeClass extends React.Component {
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
                .then((data) => {
                    this.setState({ data })
                },
                (error) => {
                    new Error('Не работает!')
                })
                .catch((el) => {
                    this.setState({ isError: true })
                })
                .finally(() => {
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
    })
}
