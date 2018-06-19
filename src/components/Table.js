import React from 'react';
import Locales from '../Locales';

export default class Table extends React.Component {
  generate() {
    const { size, type } = this.props;

    const sizeSquared = Math.pow(this.props.size, 2);

    function shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    function fillTable(range) {
      const data = [];
      const shuffledRange = shuffle(range);

      for (let i = 0; i < size; i++) {
        data[i] = [];
        for (let j = 0; j < size; j++) {
          data[i][j] = (
            <td className="table-cell" key={`${i}_${j}`}>
              <div className="table-cell-positioning">
                <span className={'table-cell-content'}>
                  {shuffledRange.shift()}
                </span>
              </div>
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

    const numbersRange = Array.from({ length: sizeSquared }, (v, i) => i + 1);
    const lettersRange = 'A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23'
      .split('-')
      .slice(0, sizeSquared);

    if (type === 'numbers') {
      return fillTable(numbersRange);
    }

    if (type === 'letters') {
      return fillTable(lettersRange);
    }
  }

  print(e) {
    e.preventDefault();
    window.print();
  }

  render() {
    const { colors, lang, rotated, size } = this.props;

    function getClassName() {
      let className = 'table table-' + size + ' table-' + colors;

      if (rotated !== 'false') {
        className += ' table-rotated';
      }

      return className;
    }

    return (
      <div>
        <button className="table-button" onClick={this.print}>
          {Locales[lang].table.print}
        </button>
        <button className="table-button" onClick={() => this.forceUpdate()}>
          {Locales[lang].table.regen}
        </button>

        <table className={getClassName()}>
          <tbody>{this.generate()}</tbody>
        </table>
      </div>
    );
  }
}
