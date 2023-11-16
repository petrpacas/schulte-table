/* eslint-disable react/prop-types */
import React from "react";
import Locales from "../Locales";

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.generateTableRows = this.generateTableRows.bind(this);
    this.generateTableClassName = this.generateTableClassName.bind(this);
    this.generateSingle = this.generateSingle.bind(this);
    this.printMany = this.printMany.bind(this);

    this.state = {
      sourceSingle: undefined,
      sourceMany: undefined,
    };
  }

  generateTableRows() {
    const { size, type } = this.props;
    const sizeSquared = Math.pow(size, 2);

    const shuffle = (arr) => {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }

      return arr;
    };

    const generate = (range) => {
      const data = [];
      const shuffledRange = shuffle(range);

      for (let i = 0; i < size; i++) {
        data[i] = [];

        for (let j = 0; j < size; j++) {
          data[i][j] = (
            <td className="table-cell" key={`${i}_${j}`}>
              <div className="table-cell-position">{shuffledRange.shift()}</div>
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
    const lettersRange =
      "A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23"
        .split("-")
        .slice(0, sizeSquared);

    if (type === "numbers") {
      return generate(numbersRange);
    }

    if (type === "letters") {
      return generate(lettersRange);
    }
  }

  generateTableClassName(many = false) {
    const { colors, rotated, size } = this.props;
    let className = "table table-" + size + " table-" + colors;
    if (rotated !== "false") {
      className += " table-rotated";
    }
    if (many) {
      className += " table-printonly";
    }
    return className;
  }

  generateSingle() {
    const sourceSingle = (
      <div className="table-container">
        <table
          className={this.generateTableClassName()}
          onClick={this.generateSingle}
        >
          <tbody>{this.generateTableRows()}</tbody>
        </table>
      </div>
    );

    this.setState({ sourceSingle });
  }

  printMany() {
    const { lang } = this.props;
    const sourceMany = [];
    const promptResult = prompt(Locales[lang].table.printHowMany);

    if (promptResult === null) {
      return;
    }

    const count = Number(promptResult, 10);

    if (!isNaN(count) && count % 1 === 0 && count > 0 && count < 101) {
      for (let i = 0; i < count; i++) {
        const el = (
          <React.Fragment key={`many_${i}`}>
            <table className={this.generateTableClassName(true)}>
              <tbody>{this.generateTableRows()}</tbody>
            </table>
            {i + 1 < count ? <div className="page-break"></div> : undefined}
          </React.Fragment>
        );
        sourceMany.push(el);
      }

      this.setState({ sourceMany }, () => {
        window.print();
      });
    } else {
      alert(Locales[lang].table.printCountIncorrect);
    }
  }

  componentDidMount() {
    this.generateSingle();
  }

  render() {
    const { lang } = this.props;
    const { sourceSingle, sourceMany } = this.state;

    window.onafterprint = () =>
      this.setState({
        sourceMany: undefined,
      });

    return (
      <>
        <div className="mx-auto mb-8 grid max-w-7xl gap-4 px-8 text-center print:hidden md:grid-cols-2">
          <button
            className="rounded-lg border border-slate-600 bg-white p-4 text-lg shadow-lg hover:bg-slate-50 active:bg-slate-100 active:shadow-xl"
            onClick={this.printMany}
          >
            {Locales[lang].table.printMany}
          </button>

          <button
            className="rounded-lg border-2 border-slate-600 bg-white p-4 text-lg shadow-lg hover:bg-slate-50 active:bg-slate-100 active:shadow-xl"
            onClick={this.generateSingle}
          >
            {Locales[lang].table.generateSingle}
          </button>
        </div>

        <div className="bg-white px-8 shadow-lg print:hidden">
          {sourceSingle}
        </div>

        {sourceMany}
      </>
    );
  }
}
