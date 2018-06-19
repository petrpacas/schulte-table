import React from 'react';
import './App.css';
import Locales from './Locales';

import Config from './components/Config';
import Table from './components/Table';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.switchLang = this.switchLang.bind(this);

    this.state = {
      colors: 'graywhite',
      lang: 'cs',
      rotated: 'false',
      size: '5',
      type: 'numbers'
    };
  }

  handleChange(e) {
    const arg = e.target.value.split('-');

    this.setState({ [arg[0]]: arg[1] });
  }

  switchLang(e) {
    e.preventDefault();

    this.setState(prevState => {
      if (prevState.lang === 'cs') {
        return { lang: 'en' };
      }
      if (prevState.lang === 'en') {
        return { lang: 'cs' };
      }
    });
  }

  render() {
    const { colors, lang, rotated, size, type } = this.state;

    return (
      <div id="app">
        <div className="intro">
          <small>
            <a href="#lang" onClick={this.switchLang}>
              {Locales[lang].app.lang}
            </a>
          </small>
          <h1>{Locales[lang].app.name}</h1>
          <small>
            <a
              href="https://www.petrruzicka.com/blog/tabulky/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {Locales[lang].app.link}
            </a>
          </small>
          <p>{Locales[lang].app.hint}</p>
        </div>
        <Config handleChange={this.handleChange} lang={lang} />
        <Table
          colors={colors}
          lang={lang}
          rotated={rotated}
          size={size}
          type={type}
        />
      </div>
    );
  }
}
