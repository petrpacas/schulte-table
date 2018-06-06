import React from 'react';
import './App.css';

import Config from './components/Config';
import Table from './components/Table';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      size: 5,
      type: 'numbers'
    };
  }

  handleChange(e) {
    const arg = e.target.value.split('-');

    this.setState({ [arg[0]]: arg[1] });
  }

  print() {
    window.print();
  }

  render() {
    const { size, type } = this.state;

    return (
      <div id="app">
        <h1>Schulteho tabulka</h1>
        <small>
          <a
            href="https://www.petrruzicka.com/blog/tabulky/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Co to je?
          </a>
        </small>
        <p>
          Navolte si požadované vlastnosti tabulky a poté si ji{' '}
          <a className="print" href="" onClick={this.print}>
            vytiskněte
          </a>.
        </p>
        <Config handleChange={this.handleChange} />
        <Table size={size} type={type} />
      </div>
    );
  }
}
