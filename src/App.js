import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Config from "./components/Config";
import Table from "./components/Table";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.switchLang = this.switchLang.bind(this);

    this.tableRef = React.createRef();

    this.state = {
      lang: "en",
      colors: "graywhite",
      rotated: "false",
      size: "4",
      type: "numbers",
    };
  }

  handleChange(e) {
    const arg = e.target.value.split("-");

    this.setState({ [arg[0]]: arg[1] }, () => {
      if (this.tableRef) {
        this.tableRef.current.generateSingle();
      }
    });
  }

  switchLang() {
    this.setState((prevState) => {
      if (prevState.lang === "en") {
        return { lang: "cs" };
      }

      if (prevState.lang === "cs") {
        return { lang: "en" };
      }
    });
  }

  render() {
    const { lang, colors, rotated, size, type } = this.state;

    return (
      <>
        <Nav switchLang={this.switchLang} lang={lang} />

        <Config
          handleChange={this.handleChange}
          lang={lang}
          colors={colors}
          rotated={rotated}
          size={size}
          type={type}
        />

        <Table
          ref={this.tableRef}
          lang={lang}
          colors={colors}
          rotated={rotated}
          size={size}
          type={type}
        />
      </>
    );
  }
}
