import React, { Component } from "react";

import styles from "./App.module.css";
import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api";

export default class App extends Component {
    state = {
        data: {},
        country: "",
    };

    async componentDidMount() {
        const data = await fetchData();
        // console.log(data);

        this.setState({ data });
    }

    handleCountryChange = async (country) => {
        // Fetch data
        const data = await fetchData(country);
        console.log(data);
        // Set state
        this.setState({ data, country });
    };

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}
