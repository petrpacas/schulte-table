/* eslint-disable react/prop-types */
import React from "react";
import Locales from "../Locales";

const Config = ({ handleChange, lang, colors, rotated, size, type }) => {
  const configButton = (group, option, currentOption, label) => (
    <div className="flex">
      <input
        className="peer appearance-none"
        id={`${group}-${option}`}
        name={`${group}`}
        onChange={handleChange}
        checked={currentOption === option}
        type="radio"
        value={`${group}-${option}`}
      />
      <label
        className={
          "rounded-md border border-slate-400 px-4 py-2 shadow-sm hover:bg-slate-50 active:bg-slate-100 active:shadow-sm peer-checked:border-black peer-checked:bg-slate-50 peer-focus-visible:outline peer-focus-visible:outline-1"
        }
        htmlFor={`${group}-${option}`}
      >
        {label || Locales[lang].config[group][option]}
      </label>
    </div>
  );

  const configType = (
    <div className="rounded-lg bg-white p-4 shadow-lg">
      <div className="pb-4 font-bold">{Locales[lang].config.legend.type}</div>
      <div className="flex flex-wrap justify-center gap-4">
        {configButton("type", "numbers", type)}
        {configButton("type", "letters", type)}
      </div>
    </div>
  );

  const configSize = (
    <div className="rounded-lg bg-white p-4 shadow-lg">
      <div className="pb-4 font-bold">{Locales[lang].config.legend.size}</div>
      <div className="flex flex-wrap justify-center gap-4">
        {configButton("size", "4", size, "4x4")}
        {configButton("size", "5", size, "5x5")}
        {configButton("size", "6", size, "6x6")}
        {configButton("size", "7", size, "7x7")}
      </div>
    </div>
  );

  const configRotated = (
    <div className="rounded-lg bg-white p-4 shadow-lg">
      <div className="pb-4 font-bold">
        {Locales[lang].config.legend.rotated}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {configButton("rotated", "false", rotated)}
        {configButton("rotated", "true", rotated)}
      </div>
    </div>
  );

  const configColors = (
    <div className="rounded-lg bg-white p-4 shadow-lg md:col-span-3">
      <div className="pb-4 font-bold">{Locales[lang].config.legend.colors}</div>
      <div className="flex flex-wrap justify-center gap-4">
        {configButton("colors", "graywhite", colors)}
        {configButton("colors", "blackwhite", colors)}
        {configButton("colors", "blueyellow", colors)}
        {configButton("colors", "blackred", colors)}
        {configButton("colors", "lowcontrastblue", colors)}
        {configButton("colors", "none", colors)}
      </div>
    </div>
  );

  return (
    <div className="mx-auto mb-8 grid max-w-7xl gap-4 px-8 text-center md:grid-cols-3 print:hidden">
      {configType}
      {configSize}
      {configRotated}
      {configColors}
    </div>
  );
};

export default Config;
