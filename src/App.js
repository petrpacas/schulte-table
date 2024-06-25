import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Config from "./components/Config";
import Table from "./components/Table";

const App = () => {
  const [settings, setSettings] = useState({
    lang: "en",
    colors: "graywhite",
    rotated: "false",
    size: "4",
    type: "numbers",
  });

  const switchLang = () => {
    setSettings((prevSettings) => {
      if (prevSettings.lang === "en") {
        return { ...prevSettings, lang: "cs" };
      }
      if (prevSettings.lang === "cs") {
        return { ...prevSettings, lang: "en" };
      }
    });
  };

  const handleChange = (e) => {
    const arg = e.target.value.split("-");
    setSettings({ ...settings, [arg[0]]: arg[1] });
  };

  const { lang, colors, rotated, size, type } = settings;

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
};

export default App;
