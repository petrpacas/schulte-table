import i18n from "../i18n";
import { NavTypes } from "../types";

const Nav: React.FC<NavTypes> = ({ switchLang, lang }) => {
  return (
    <nav className="mb-8 bg-white shadow-lg print:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-8 py-4 text-center max-sm:flex-col">
        <h1 className="text-2xl font-bold">{i18n[lang].app.name}</h1>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/petrpacas/schulte-table/"
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
            {i18n[lang].app.lang}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
