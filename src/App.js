import React, { Component } from "react";

import styles from "./App.module.css";
import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api";

export default class App extends Component {
    async componentDidMount() {
        const data = await fetchData();
        console.log(data);
    }

    render() {
        return (
            <div className={styles.container}>
                <h1>App</h1>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}
