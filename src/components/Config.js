import React from 'react';
import Locales from '../Locales';

export default class Config extends React.Component {
  render() {
    const { colors, lang, handleChange, rotated, size, type } = this.props;

    function configType() {
      return (
        <fieldset className="config-group">
          <legend>{Locales[lang].config.typeLegend}</legend>
          <label className="config-label">
            <input
              defaultChecked
              name="type"
              onChange={handleChange}
              selected={type === 'numbers'}
              type="radio"
              value="type-numbers"
            />{' '}
            {Locales[lang].config.typeNumbers}
          </label>
          <label className="config-label">
            <input
              name="type"
              onChange={handleChange}
              selected={type === 'letters'}
              type="radio"
              value="type-letters"
            />{' '}
            {Locales[lang].config.typeLetters}
          </label>
        </fieldset>
      );
    }

    function configSize() {
      return (
        <fieldset className="config-group">
          <legend>{Locales[lang].config.sizeLegend}</legend>
          <label className="config-label">
            <input
              name="size"
              onChange={handleChange}
              selected={size === '4'}
              type="radio"
              value="size-4"
            />{' '}
            4x4
          </label>
          <label className="config-label">
            <input
              defaultChecked
              name="size"
              onChange={handleChange}
              selected={size === '5'}
              type="radio"
              value="size-5"
            />{' '}
            5x5
          </label>
          <label className="config-label">
            <input
              name="size"
              onChange={handleChange}
              selected={size === '6'}
              type="radio"
              value="size-6"
            />{' '}
            6x6
          </label>
          <label className="config-label">
            <input
              name="size"
              onChange={handleChange}
              selected={size === '7'}
              type="radio"
              value="size-7"
            />{' '}
            7x7
          </label>
        </fieldset>
      );
    }

    function configRotated() {
      return (
        <fieldset className="config-group">
          <legend>{Locales[lang].config.rotatedLegend}</legend>
          <label className="config-label">
            <input
              defaultChecked
              name="rotated"
              onChange={handleChange}
              selected={rotated === 'false'}
              type="radio"
              value="rotated-false"
            />{' '}
            {Locales[lang].config.rotatedOff}
          </label>
          <label className="config-label">
            <input
              name="rotated"
              onChange={handleChange}
              selected={rotated === 'true'}
              type="radio"
              value="rotated-true"
            />{' '}
            {Locales[lang].config.rotatedOn}
          </label>
        </fieldset>
      );
    }

    function configColors() {
      return (
        <fieldset className="config-group">
          <legend>{Locales[lang].config.colorsLegend}</legend>
          <label className="config-label">
            <input
              defaultChecked
              name="colors"
              onChange={handleChange}
              selected={colors === 'graywhite'}
              type="radio"
              value="colors-graywhite"
            />{' '}
            {Locales[lang].config.colorsGraywhite}
          </label>
          <label className="config-label">
            <input
              name="colors"
              onChange={handleChange}
              selected={colors === 'blackwhite'}
              type="radio"
              value="colors-blackwhite"
            />{' '}
            {Locales[lang].config.colorsBlackwhite}
          </label>
          <label className="config-label">
            <input
              name="colors"
              onChange={handleChange}
              selected={colors === 'blueyellow'}
              type="radio"
              value="colors-blueyellow"
            />{' '}
            {Locales[lang].config.colorsBlueyellow}
          </label>
          <label className="config-label">
            <input
              name="colors"
              onChange={handleChange}
              selected={colors === 'blackred'}
              type="radio"
              value="colors-blackred"
            />{' '}
            {Locales[lang].config.colorsBlackred}
          </label>
          <label className="config-label">
            <input
              name="colors"
              onChange={handleChange}
              selected={colors === 'lowcontrastblue'}
              type="radio"
              value="colors-lowcontrastblue"
            />{' '}
            {Locales[lang].config.colorsLowcontrastblue}
          </label>
          <label className="config-label">
            <input
              name="colors"
              onChange={handleChange}
              selected={colors === 'nocolors'}
              type="radio"
              value="colors-nocolors"
            />{' '}
            {Locales[lang].config.colorsNocolors}
          </label>
        </fieldset>
      );
    }

    return (
      <form className="config">
        <div className="config-flex">
          {configType()}
          {configSize()}
          {configRotated()}
        </div>
        {configColors()}
      </form>
    );
  }
}
