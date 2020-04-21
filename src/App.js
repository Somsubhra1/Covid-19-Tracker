import React, { Component } from "react";

import styles from "./App.module.css";
import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";

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
        // console.log(data);
        // Set state
        this.setState({ data, country });
    };

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img
                    src={coronaImage}
                    className={styles.image}
                    alt="COVID-19"
                />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}
