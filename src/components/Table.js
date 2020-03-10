import React from 'react';
import html2canvas from 'html2canvas';
import Locales from '../Locales';

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.generateTableRows = this.generateTableRows.bind(this);
    this.generateTableClassName = this.generateTableClassName.bind(this);
    this.generateSingle = this.generateSingle.bind(this);
    this.printSingle = this.printSingle.bind(this);
    this.generateAndPrintMultiple = this.generateAndPrintMultiple.bind(this);

    this.state = {
      sourceSingle: [],
      sourceSingleVisible: false,
      sourceMultiple: [],
      sourceMultipleVisible: false,
    };
  }

  generateTableRows() {
    const { size, type } = this.props;
    const sizeSquared = Math.pow(size, 2);

    const shuffle = arr => {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }

      return arr;
    };

    const generate = range => {
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
    };

    const numbersRange = Array.from({ length: sizeSquared }, (v, i) => i + 1);
    const lettersRange = 'A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23'
      .split('-')
      .slice(0, sizeSquared);

    if (type === 'numbers') {
      return generate(numbersRange);
    }

    if (type === 'letters') {
      return generate(lettersRange);
    }
  }

  generateTableClassName(multiple = false) {
    const { colors, rotated, size } = this.props;
    let className = 'table table-' + size + ' table-' + colors;
    if (rotated !== 'false') {
      className += ' table-rotated';
    }
    if (multiple) {
      className += ' table-printonly';
    }

    return className;
  }

  generateSingle() {
    const sourceSingle = [
      <table className={this.generateTableClassName()} id="single" key="single">
        <tbody>{this.generateTableRows()}</tbody>
      </table>
    ];

    this.setState({ sourceSingle, sourceSingleVisible: true }, () => {
      html2canvas(document.getElementById('single'), {
        canvas: document.getElementById('tableCanvas'),
        logging: false,
      }).then(() => {
        this.setState({ sourceSingleVisible: false });
      });
    });
  }

  printSingle(e) {
    e.preventDefault();
    this.setState({ sourceSingleVisible: true }, () => window.print());
  }

  generateAndPrintMultiple(e) {
    e.preventDefault();
    const { lang } = this.props;
    const sourceMultiple = [];
    const count = Number(prompt(Locales[lang].table.printHowMany), 10);

    if (!isNaN(count) && count % 1 === 0 && count > 0 && count < 101) {
      for (let i = 0; i < count; i++) {
        sourceMultiple.push(
          <table className={this.generateTableClassName(true)} key={`multiple_${i}`}>
            <tbody>{this.generateTableRows()}</tbody>
          </table>
        );
      }

      this.setState({ sourceMultiple, sourceMultipleVisible: true }, () => window.print());
    } else {
      alert(Locales[lang].table.printCountIncorrect);
    }
  }

  componentDidMount() {
    this.generateSingle();
  }

  render() {
    const { lang } = this.props;
    const {
      sourceSingle,
      sourceSingleVisible,
      sourceMultiple,
      sourceMultipleVisible
    } = this.state;

    window.onafterprint = () => this.setState({
      sourceSingleVisible: false,
      sourceMultipleVisible: false
    });

    return (
      <>
        <button className="table-button" onClick={this.printSingle}>
          {Locales[lang].table.printSingle}
        </button>
        <button className="table-button" onClick={this.generateAndPrintMultiple}>
          {Locales[lang].table.printMultiple}
        </button>
        <button className="table-button" onClick={this.generateSingle}>
          {Locales[lang].table.regenerateSingle}
        </button>

        <div className="table-container">
          {sourceSingleVisible && sourceSingle}
          {sourceMultipleVisible && sourceMultiple}
          <canvas className="table-canvas" id="tableCanvas" />
        </div>
      </>
    );
  }
}
