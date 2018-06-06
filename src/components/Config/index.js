import React from 'react';

export default class Config extends React.Component {
  render() {
    const { handleChange, size } = this.props;

    return (
      <form className="config">
        <label className="config-label">
          <input
            name="size"
            onChange={handleChange}
            selected={size === '3'}
            type="radio"
            value="3"
          />{' '}
          3x3
        </label>
        <label className="config-label">
          <input
            name="size"
            onChange={handleChange}
            selected={size === '4'}
            type="radio"
            value="4"
          />{' '}
          4x4
        </label>
        <label className="config-label">
          <input
            name="size"
            selected={size === '5'}
            defaultChecked
            type="radio"
            value="5"
            onChange={handleChange}
          />{' '}
          5x5
        </label>
        <label className="config-label">
          <input
            name="size"
            onChange={handleChange}
            selected={size === '6'}
            type="radio"
            value="6"
          />{' '}
          6x6
        </label>
        <label className="config-label">
          <input
            name="size"
            onChange={handleChange}
            selected={size === '7'}
            type="radio"
            value="7"
          />{' '}
          7x7
        </label>
      </form>
    );
  }
}
