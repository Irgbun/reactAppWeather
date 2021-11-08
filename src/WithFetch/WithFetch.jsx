import React from 'react';

// const URLParamsSearch = new URLSearchParams({ q: { this.props.q }}, units: { this.props.units }}, appid: {this.props.token} }).toString()


export const WithFetch = (Component, url) => {
    return (class SomeClass extends React.Component {
        state = {
            data: [],
            isError: false,
            isLoading: false,
            isLoaded: false,
        }

        getData = (params = []) => {
            this.setState({ isLoading: true })
            const par = new URLSearchParams({
                q: params.q,
                units: params.units,
                appId: params.appId
              }).toString();
            fetch(`${url}?${par}`)
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
                        new Error('Не работает! Ошибка!')
                    })
                .catch(() => {
                    this.setState({ isError: true })
                })
                .finally(() => {
                    this.setState({ isLoading: false, isLoaded: true })
                })
        }

        render() {
            return (
                <Component
                    isLoading={this.state.isLoading}
                    isError={this.state.isError}
                    isLoaded={this.state.isLoaded}
                    data={this.state.data}
                    fetchData={this.getData}
                    {...this.props}
                />
            )
        }
    })
}
