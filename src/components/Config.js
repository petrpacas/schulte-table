/* eslint-disable react/prop-types */
import React from "react";
import Locales from "../Locales";

export default class Config extends React.Component {
  render() {
    const { handleChange, lang, colors, rotated, size, type } = this.props;

    const labelClassName =
      "rounded-md border border-slate-400 px-4 py-2 shadow-sm hover:bg-slate-50 active:bg-slate-100 active:shadow-sm peer-checked:border-black peer-checked:bg-slate-50 peer-focus-visible:outline peer-focus-visible:outline-1";

    const configType = (
      <div className="rounded-lg bg-white p-4 shadow-lg">
        <div className="pb-4 font-bold">{Locales[lang].config.typeLegend}</div>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex">
            <input
              className="peer appearance-none"
              id="type-numbers"
              defaultChecked
              name="type"
              onChange={handleChange}
              selected={type === "numbers"}
              type="radio"
              value="type-numbers"
            />
            <label className={labelClassName} htmlFor="type-numbers">
              {Locales[lang].config.typeNumbers}
            </label>
          </div>

          <div className="flex">
            <input
              className="peer appearance-none"
              id="type-letters"
              name="type"
              onChange={handleChange}
              selected={type === "letters"}
              type="radio"
              value="type-letters"
            />
            <label className={labelClassName} htmlFor="type-letters">
              {Locales[lang].config.typeLetters}
            </label>
          </div>
        </div>
      </div>
    );

    const configSize = (
      <div className="rounded-lg bg-white p-4 shadow-lg">
        <div className="pb-4 font-bold">{Locales[lang].config.sizeLegend}</div>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex">
            <input
              className="peer appearance-none"
              id="size-4"
              defaultChecked
              name="size"
              onChange={handleChange}
              selected={size === "4"}
              type="radio"
              value="size-4"
            />
            <label className={labelClassName} htmlFor="size-4">
              4x4
            </label>
          </div>

          <div className="flex">
            <input
              className="peer appearance-none"
              id="size-5"
              name="size"
              onChange={handleChange}
              selected={size === "5"}
              type="radio"
              value="size-5"
            />
            <label className={labelClassName} htmlFor="size-5">
              5x5
            </label>
          </div>

          <div className="flex">
            <input
              className="peer appearance-none"
              id="size-6"
              name="size"
              onChange={handleChange}
              selected={size === "6"}
              type="radio"
              value="size-6"
            />
            <label className={labelClassName} htmlFor="size-6">
              6x6
            </label>
          </div>

          <div className="flex">
            <input
              className="peer appearance-none"
              id="size-7"
              name="size"
              onChange={handleChange}
              selected={size === "7"}
              type="radio"
              value="size-7"
            />
            <label className={labelClassName} htmlFor="size-7">
              7x7
            </label>
          </div>
        </div>
      </div>
    );

    const configRotated = (
      <div className="rounded-lg bg-white p-4 shadow-lg">
        <div className="pb-4 font-bold">
          {Locales[lang].config.rotatedLegend}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex">
            <input
              className="peer appearance-none"
              id="rotated-false"
              defaultChecked
              name="rotated"
              onChange={handleChange}
              selected={rotated === "false"}
              type="radio"
              value="rotated-false"
            />
            <label className={labelClassName} htmlFor="rotated-false">
              {Locales[lang].config.rotatedOff}
            </label>
          </div>

          <div className="flex">
            <input
              className="peer appearance-none"
              id="rotated-true"
              name="rotated"
              onChange={handleChange}
              selected={rotated === "true"}
              type="radio"
              value="rotated-true"
            />
            <label className={labelClassName} htmlFor="rotated-true">
              {Locales[lang].config.rotatedOn}
            </label>
          </div>
        </div>
      </div>
    );

    const configColors = (
      <div className="rounded-lg bg-white p-4 shadow-lg md:col-span-3">
        <div className="pb-4 font-bold">
          {Locales[lang].config.colorsLegend}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex">
            <input
              className="peer appearance-none"
              id="colors-graywhite"
              defaultChecked
              name="colors"
              onChange={handleChange}
              selected={colors === "graywhite"}
              type="radio"
              value="colors-graywhite"
            />
            <label className={labelClassName} htmlFor="colors-graywhite">
              {Locales[lang].config.colorsGraywhite}
            </label>
          </div>

          <div className="flex">
            <input
              className="peer appearance-none"
              id="colors-blackwhite"
              name="colors"
              onChange={handleChange}
              selected={colors === "blackwhite"}
              type="radio"
              value="colors-blackwhite"
            />
            <label className={labelClassName} htmlFor="colors-blackwhite">
              {Locales[lang].config.colorsBlackwhite}
            </label>
          </div>

          <div className="flex">
            <input
              className="peer appearance-none"
              id="colors-blueyellow"
              name="colors"
              onChange={handleChange}
              selected={colors === "blueyellow"}
              type="radio"
              value="colors-blueyellow"
            />
            <label className={labelClassName} htmlFor="colors-blueyellow">
              {Locales[lang].config.colorsBlueyellow}
            </label>
          </div>

          <div className="flex">
            <input
              className="peer appearance-none"
              id="colors-blackred"
              name="colors"
              onChange={handleChange}
              selected={colors === "blackred"}
              type="radio"
              value="colors-blackred"
            />
            <label className={labelClassName} htmlFor="colors-blackred">
              {Locales[lang].config.colorsBlackred}
            </label>
          </div>

          <div className="flex">
            <input
              className="peer appearance-none"
              id="colors-lowcontrastblue"
              name="colors"
              onChange={handleChange}
              selected={colors === "lowcontrastblue"}
              type="radio"
              value="colors-lowcontrastblue"
            />
            <label className={labelClassName} htmlFor="colors-lowcontrastblue">
              {Locales[lang].config.colorsLowcontrastblue}
            </label>
          </div>

          <div className="flex">
            <input
              className="peer appearance-none"
              id="colors-nocolors"
              name="colors"
              onChange={handleChange}
              selected={colors === "nocolors"}
              type="radio"
              value="colors-nocolors"
            />
            <label className={labelClassName} htmlFor="colors-nocolors">
              {Locales[lang].config.colorsNocolors}
            </label>
          </div>
        </div>
      </div>
    );

    return (
      <div className="mx-auto mb-8 grid max-w-7xl gap-4 px-8 text-center print:hidden md:grid-cols-3">
        {configType}
        {configSize}
        {configRotated}
        {configColors}
      </div>
    );
  }
}
