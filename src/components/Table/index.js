import React from 'react';

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.generateCells = this.generateCells.bind(this);
    this.generateRows = this.generateRows.bind(this);
  }

  generateCells(cells = []) {
    for (let i = 0; i < this.props.size; i++) {
      const value = Math.floor(Math.random() * Math.floor(100));
      cells[i] = <td key={i}>{ value }</td>;
    }

    return cells;
  }

  generateRows(rows = []) {
    for (let i = 0; i < this.props.size; i++) {
      rows[i] = <tr key={i}>{ this.generateCells() }</tr>;
    }

    return rows;
  }

  render() {
    return (
      <table>
        <tbody>
          { this.generateRows() }
        </tbody>
      </table>
    );
  }
}
