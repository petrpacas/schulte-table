import React from 'react';

export default class Config extends React.Component {
  render() {
    const { colors, handleChange, rotated, size, type } = this.props;

    function configType() {
      return (
        <fieldset className="config-group">
          <legend>Typ:</legend>
          <label className="config-label">
            <input
              defaultChecked
              name="type"
              onChange={handleChange}
              selected={type === 'numbers'}
              type="radio"
              value="type-numbers"
            />{' '}
            Čísla
          </label>
          <label className="config-label">
            <input
              name="type"
              onChange={handleChange}
              selected={type === 'letters'}
              type="radio"
              value="type-letters"
            />{' '}
            Písmena
          </label>
        </fieldset>
      );
    }

    function configSize() {
      return (
        <fieldset className="config-group">
          <legend>Rozměry:</legend>
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
          <legend>Rotace některých znaků:</legend>
          <label className="config-label">
            <input
              defaultChecked
              name="rotated"
              onChange={handleChange}
              selected={rotated === 'false'}
              type="radio"
              value="rotated-false"
            />{' '}
            Vypnutá
          </label>
          <label className="config-label">
            <input
              name="rotated"
              onChange={handleChange}
              selected={rotated === 'true'}
              type="radio"
              value="rotated-true"
            />{' '}
            Zapnutá
          </label>
        </fieldset>
      );
    }

    function configColors() {
      return (
        <fieldset className="config-group">
          <legend>Barvy:</legend>
          <label className="config-label">
            <input
              defaultChecked
              name="colors"
              onChange={handleChange}
              selected={colors === 'graywhite'}
              type="radio"
              value="colors-graywhite"
            />{' '}
            Šedobílá
          </label>
          <label className="config-label">
            <input
              name="colors"
              onChange={handleChange}
              selected={colors === 'blackwhite'}
              type="radio"
              value="colors-blackwhite"
            />{' '}
            Černobílá
          </label>
          <label className="config-label">
            <input
              name="colors"
              onChange={handleChange}
              selected={colors === 'blueyellow'}
              type="radio"
              value="colors-blueyellow"
            />{' '}
            Modrožlutá
          </label>
          <label className="config-label">
            <input
              name="colors"
              onChange={handleChange}
              selected={colors === 'blackred'}
              type="radio"
              value="colors-blackred"
            />{' '}
            Černočervená
          </label>
          <label className="config-label">
            <input
              name="colors"
              onChange={handleChange}
              selected={colors === 'lowcontrastblue'}
              type="radio"
              value="colors-lowcontrastblue"
            />{' '}
            Nekontrastní modrá
          </label>
          <label className="config-label">
            <input
              name="colors"
              onChange={handleChange}
              selected={colors === 'none'}
              type="radio"
              value="colors-none"
            />{' '}
            Žádné
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
