import React from 'react';
import ReactDOM from 'react-dom';
import html2canvas from 'html2canvas';
import Locales from '../Locales';

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.displayTable = this.displayTable.bind(this);
    this.displayTable = this.displayTable.bind(this);

    this.tempTable = [];
  }

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
              <div className="table-cell-position">
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

  displayTable() {
    const { colors, rotated, size } = this.props;

    function getClassName() {
      let className = 'table table-' + size + ' table-' + colors;
      if (rotated !== 'false') {
        className += ' table-rotated';
      }
      return className;
    }

    const tableContent = (
      <table className={getClassName()} id="table">
        <tbody>{this.generate()}</tbody>
      </table>
    );
    const tableContainer = document.getElementById('tableContainer');

    ReactDOM.render(tableContent, tableContainer, () => {
      html2canvas(document.getElementById('table'), {
        canvas: document.getElementById('tableCanvas'),
        logging: false
      }).then(() => {
        this.tempTable = document.getElementById('table');
        ReactDOM.unmountComponentAtNode(tableContainer);
      });
    });
  }

  printSetup() {
    const beforePrint = () => {
      if (document.getElementById('tableContainer') && this.tempTable) {
        document.getElementById('tableContainer').appendChild(this.tempTable);
      }
    };

    const afterPrint = () => {
      if (document.getElementById('table')) {
        document.getElementById('table').remove();
      }
    };

    window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;
  }

  print(e) {
    e.preventDefault();
    window.print();
  }

  componentDidMount() {
    this.displayTable();
  }

  componentDidUpdate() {
    this.displayTable();
  }

  render() {
    const { lang } = this.props;

    this.printSetup();

    return (
      <div>
        <button className="table-button" onClick={this.print}>
          {Locales[lang].table.print}
        </button>
        <button className="table-button" onClick={() => this.forceUpdate()}>
          {Locales[lang].table.regen}
        </button>

        <div className="table-wrapper">
          <div id="tableContainer" />
          <canvas className="table-canvas" id="tableCanvas" />
        </div>
      </div>
    );
  }
}
