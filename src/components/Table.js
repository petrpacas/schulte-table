/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Locales from "../Locales";

const Table = ({ lang, colors, rotated, size, type }) => {
  const [table, setTable] = useState(undefined);
  const [tableArray, setTableArray] = useState(undefined);

  const generateTableRows = () => {
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

    const rangeNumbers = Array.from({ length: sizeSquared }, (v, i) => i + 1);
    const rangeLetters =
      "A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23"
        .split("-")
        .slice(0, sizeSquared);

    if (type === "numbers") {
      return generate(rangeNumbers);
    }

    if (type === "letters") {
      return generate(rangeLetters);
    }
  };

  const generateTableClassName = (print = false) => {
    let className = "table table-" + size + " table-" + colors;
    if (rotated === "true") {
      className += " table-rotated";
    }
    if (print) {
      className += " table-printonly";
    }
    return className;
  };

  const generateTable = () => {
    const table = (
      <div className="table-container">
        <table className={generateTableClassName()} onClick={generateTable}>
          <tbody>{generateTableRows()}</tbody>
        </table>
      </div>
    );

    setTable(table);
  };

  const printTableArray = () => {
    const tableArray = [];
    const promptResult = prompt(Locales[lang].table.printCount);

    if (promptResult === null) {
      return;
    }

    const count = Number(promptResult, 10);

    if (!isNaN(count) && count % 1 === 0 && count > 0 && count < 101) {
      for (let i = 0; i < count; i++) {
        const el = (
          <React.Fragment key={`print_${i}`}>
            <table className={generateTableClassName(true)}>
              <tbody>{generateTableRows()}</tbody>
            </table>
            {i + 1 < count ? <div className="page-break"></div> : undefined}
          </React.Fragment>
        );
        tableArray.push(el);
      }

      setTableArray(tableArray);
    } else {
      alert(Locales[lang].table.printCountHint);
    }
  };

  useEffect(() => {
    generateTable();
  }, [colors, rotated, size, type]);

  useEffect(() => {
    if (tableArray === undefined) {
      return;
    }
    window.print();
    window.onafterprint = () => setTableArray(undefined);
  }, [tableArray]);

  return (
    <>
      <div className="mx-auto mb-8 grid max-w-7xl gap-4 px-8 text-center md:grid-cols-2 print:hidden">
        <button
          className="rounded-lg border border-slate-600 bg-white p-4 text-lg shadow-lg hover:bg-slate-50 active:bg-slate-100 active:shadow-xl"
          onClick={printTableArray}
        >
          {Locales[lang].table.print}
        </button>

        <button
          className="rounded-lg border-2 border-slate-600 bg-white p-4 text-lg shadow-lg hover:bg-slate-50 active:bg-slate-100 active:shadow-xl"
          onClick={generateTable}
        >
          {Locales[lang].table.generate}
        </button>
      </div>

      <div className="bg-white px-8 shadow-lg print:hidden">{table}</div>

      {tableArray}
    </>
  );
};

export default Table;
