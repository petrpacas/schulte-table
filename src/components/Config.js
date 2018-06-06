import React from 'react';

export default class Config extends React.Component {
  render() {
    const { handleChange, size, type } = this.props;

    return (
      <form className="config">
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
        <fieldset className="config-group">
          <legend>Rozměry:</legend>
          <label className="config-label">
            <input
              name="size"
              onChange={handleChange}
              selected={size === '3'}
              type="radio"
              value="size-3"
            />{' '}
            3x3
          </label>
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
      </form>
    );
  }
}
