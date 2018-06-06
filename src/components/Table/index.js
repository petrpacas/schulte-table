import React from 'react';

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.generate = this.generate.bind(this);
  }

  generate() {
    const { size } = this.props;

    function shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    const sizePow = Math.pow(this.props.size, 2);
    const range = Array.from({ length: sizePow }, (v, i) => i + 1);
    const shuffledRange = shuffle(range);

    const data = [];
    for (let i = 0; i < size; i++) {
      data[i] = [];
      for (let j = 0; j < size; j++) {
        data[i][j] = (
          <td className="table-cell" key={`${i}_${j}`}>
            <div className="table-cell-content">{shuffledRange.shift()}</div>
          </td>
        );
      }
      data[i] = (
        <tr className="table-row" key={`${i}`}>
          {data[i]}
        </tr>
      );
    }
    return data;
  }

  render() {
    return (
      <table className={'table table-' + this.props.size}>
        <tbody>{this.generate()}</tbody>
      </table>
    );
  }
}
