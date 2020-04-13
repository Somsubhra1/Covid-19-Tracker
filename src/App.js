import React, { Component } from "react";

import styles from "./App.module.css";
import { Cards, CountryPicker, Chart } from "./components";

export default class App extends Component {
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
