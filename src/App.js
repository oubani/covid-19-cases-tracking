import React, { Component } from 'react';
import Cards from './components/cards/Cards';
import Country from './components/country/Country';
import styles from './App.module.css';
import { getData } from './api';

class App extends Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const newData = await getData();
    this.setState({ data: newData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await getData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Covid-19 cases tracking </h1>
        <Cards data={data} country={country} />
        <Country handleCountryChange={this.handleCountryChange} />
      </div>
    );
  }
}

export default App;
