import React, { useState, useEffect, useCallback } from "react";
import i18n from "../i18n";
import { StateTypes } from "../types";

const Table: React.FC<StateTypes> = ({ lang, colors, rotated, size, type }) => {
  const [table, setTable] = useState<React.JSX.Element | undefined>(undefined);
  const [tableArray, setTableArray] = useState<React.JSX.Element[] | undefined>(
    undefined
  );

  const generateTableRows = useCallback((): React.JSX.Element[] => {
    const sizeNumber = Number(size);
    const sizeSquared = Math.pow(sizeNumber, 2);

    const shuffle = <T,>(arr: T[]): T[] => {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }

      return arr;
    };

    const generate = (range: (string | number)[]): React.JSX.Element[] => {
      const data: React.JSX.Element[] = [];
      const shuffledRange = shuffle(range);

      for (let i = 0; i < sizeNumber; i++) {
        const row: React.JSX.Element[] = [];

        for (let j = 0; j < sizeNumber; j++) {
          const cellValue = shuffledRange.shift();
          if (cellValue === undefined) {
            throw new Error("Something went wrong!");
          }
          row.push(
            <td className="table-cell" key={`${i}_${j}`}>
              <div className="table-cell-position">{cellValue}</div>
            </td>
          );
        }

        data.push(
          <tr className="table-row" key={`${i}`}>
            {row}
          </tr>
        );
      }

      return data;
    };

    const rangeNumbers = Array.from({ length: sizeSquared }, (_, i) =>
      (i + 1).toString()
    );
    const rangeLetters =
      "A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23"
        .split("-")
        .slice(0, sizeSquared);

    if (type === "numbers") {
      return generate(rangeNumbers);
    } else if (type === "letters") {
      return generate(rangeLetters);
    } else {
      throw new Error("Something went wrong!");
    }
  }, [size, type]);

  const generateTableClassName = useCallback(
    (print = false) => {
      let className = "table table-" + size + " table-" + colors;
      if (rotated === "true") {
        className += " table-rotated";
      }
      if (print) {
        className += " table-printonly";
      }
      return className;
    },
    [colors, rotated, size]
  );

  const generateTable = useCallback(() => {
    const table = (
      <div className="table-container">
        <table className={generateTableClassName()} onClick={generateTable}>
          <tbody>{generateTableRows()}</tbody>
        </table>
      </div>
    );

    setTable(table);
  }, [generateTableClassName, generateTableRows]);

  const printTableArray = () => {
    const tableArray: React.JSX.Element[] = [];
    const promptResult = prompt(i18n[lang].table.printCount);

    if (promptResult === null) {
      return;
    }

    const count = Number(promptResult);

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
      alert(i18n[lang].table.printCountHint);
    }
  };

  useEffect(() => {
    generateTable();
  }, [generateTable]);

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
          {i18n[lang].table.print}
        </button>

        <button
          className="rounded-lg border-2 border-slate-600 bg-white p-4 text-lg shadow-lg hover:bg-slate-50 active:bg-slate-100 active:shadow-xl"
          onClick={generateTable}
        >
          {i18n[lang].table.generate}
        </button>
      </div>

      <div className="bg-white px-8 shadow-lg print:hidden">{table}</div>

      {tableArray}
    </>
  );
};

export default Table;
