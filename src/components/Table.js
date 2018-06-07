import React from 'react';

export default class Table extends React.Component {
  generate() {
    const { size, type } = this.props;

    const sizePow = Math.pow(this.props.size, 2);

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
              <div className="table-cell-wrapper">
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

    if (type === 'numbers') {
      const numbersRange = Array.from({ length: sizePow }, (v, i) => i + 1);

      return fillTable(numbersRange);
    } else if (type === 'letters') {
      const lettersRange = 'A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z-1A-1B-1C-1D-1E-1F-1G-1H-1I-1J-1K-1L-1M-1N-1O-1P-1Q-1R-1S-1T-1U-1V-1W'
        .split('-')
        .slice(0, sizePow);

      return fillTable(lettersRange);
    }
  }

  render() {
    const { rotated, size } = this.props;

    return (
      <table
        className={
          'table table-' + size + (rotated === 'true' ? ' table-rotated' : '')
        }
      >
        <tbody>{this.generate()}</tbody>
      </table>
    );
  }
}
