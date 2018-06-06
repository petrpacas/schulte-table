import React from 'react';
import './App.css';

import Config from './components/Config';
import Table from './components/Table';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      size: 5
    };
  }

  handleChange(e) {
    this.setState({
      size: e.target.value
    });
  }

  print() {
    window.print();
  }

  render() {
    const { size } = this.state;

    return (
      <div id="app">
        <h1>Schulteho tabulka</h1>
        <small>
          <a
            href="https://www.petrruzicka.com/blog/tabulky/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Co to je?
          </a>
        </small>
        <p>
          Zvolte si velikost tabulky a poté si ji{' '}
          <a href="" class="print" onClick={this.print}>
            vytiskněte
          </a>.
        </p>
        <Config handleChange={this.handleChange} />
        <Table size={size} />
      </div>
    );
  }
}
