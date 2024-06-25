import i18n from "./i18n";

export type I18nConfig = {
  legend: {
    type: string;
    size: string;
    rotated: string;
    colors: string;
  };
  type: {
    numbers: string;
    letters: string;
  };
  size: {
    4: string;
    5: string;
    6: string;
    7: string;
  };
  rotated: {
    false: string;
    true: string;
  };
  colors: {
    graywhite: string;
    blackwhite: string;
    blueyellow: string;
    blackred: string;
    lowcontrastblue: string;
    none: string;
  };
};
export type I18nStructure = {
  [lang: string]: {
    config: I18nConfig;
  };
};

interface LangType {
  lang: keyof typeof i18n;
}

interface ButtonTypes {
  colors: string;
  rotated: string;
  size: string;
  type: string;
}

export interface StateTypes extends LangType, ButtonTypes {}
export interface NavTypes extends LangType {
  switchLang: () => void;
}
export interface ConfigTypes extends LangType, ButtonTypes {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
