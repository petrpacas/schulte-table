import React from 'react';
import './App.css';

import Config from './components/Config';
import Table from './components/Table';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      size: null,
    };
  }

  handleChange(e) {
    this.setState({
      size: e.target.value,
    });
  }

  render({size} = this.state) {
    return (
      <div id="App">
        <h1>Schulteho tabulka</h1>
        <Config handleChange={this.handleChange} />
        <Table size={size} />
      </div>
    );
  }
}
