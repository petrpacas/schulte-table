"use client";

import { useState } from "react";
import Nav from "./components/Nav";
import Config from "./components/Config";
import Table from "./components/Table";
import { StateTypes } from "./types";

export default function SchulteTable() {
  const [state, setState] = useState<StateTypes>({
    lang: "en",
    colors: "graywhite",
    rotated: "false",
    size: "4",
    type: "numbers",
  });

  const switchLang = () => {
    setState((prevState) => ({
      ...prevState,
      lang: prevState.lang === "en" ? "cs" : "en",
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const arg = e.target.value.split("-");
    setState({ ...state, [arg[0]]: arg[1] });
  };

  const { lang, colors, rotated, size, type } = state;

  return (
    <>
      <Nav switchLang={switchLang} lang={lang} />

      <Config
        handleChange={handleChange}
        lang={lang}
        colors={colors}
        rotated={rotated}
        size={size}
        type={type}
      />

      <Table
        lang={lang}
        colors={colors}
        rotated={rotated}
        size={size}
        type={type}
      />
    </>
  );
}
