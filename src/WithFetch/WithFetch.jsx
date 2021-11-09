import React from 'react';


export const WithFetch = (Component, url) => {
    return (class SomeClass extends React.Component {
        state = {
            data: [],
            isError: false,
            isLoading: false,
        }

        getData = (params = {}) => {
            this.setState({ isLoading: true })
            const par = params.searchParams;
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
                    this.setState({ isLoading: false })
                })
        }

        render() {
            return (
                <Component
                    isLoading={this.state.isLoading}
                    isError={this.state.isError}
                    data={this.state.data}
                    fetchData={this.getData}
                    {...this.props}
                />
            )
        }
    })
}
