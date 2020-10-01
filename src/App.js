import React, { Component } from 'react';
import Cards from './components/cards/Cards';
import Country from './components/country/Country';
import styles from './App.module.css';
import { getData } from './api';

class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const newData = await getData();
    this.setState({ data: newData });
  }
  render() {
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        {/* <Country /> */}
      </div>
    );
  }
}

export default App;
