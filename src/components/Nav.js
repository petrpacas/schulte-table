/* eslint-disable react/prop-types */
import React from "react";
import Locales from "../Locales";

export default class Nav extends React.Component {
  render() {
    const { switchLang, lang } = this.props;

    return (
      <nav className="mb-8 bg-white shadow-lg print:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-8 py-4 text-center max-sm:flex-col">
          <h1 className="text-2xl font-bold">{Locales[lang].app.name}</h1>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/petrpacas/schulteho-tabulka/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-500 active:text-blue-600"
            >
              🔗 GitHub
            </a>

            <button
              className="rounded border border-slate-400 px-2 py-1 text-sm text-slate-600 shadow-sm hover:bg-slate-50 active:bg-slate-100 active:shadow-sm"
              onClick={switchLang}
            >
              {Locales[lang].app.lang}
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
