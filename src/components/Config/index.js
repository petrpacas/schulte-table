import React from 'react';

export default class Config extends React.Component {
  render() {
    const {handleChange, size} = this.props;

    return (
      <form id="config">
        <label>
          <input type="radio" name="size" value="3"
            selected={size === '3'} onChange={handleChange}
          /> 3x3
        </label>
        <label>
          <input type="radio" name="size" value="4"
            selected={size === '4'} onChange={handleChange}
          /> 4x4
        </label>
        <label>
          <input type="radio" name="size" value="5" defaultChecked
            selected={size === '5'} onChange={handleChange}
          /> 5x5
        </label>
        <label>
          <input type="radio" name="size" value="6"
            selected={size === '6'} onChange={handleChange}
          /> 6x6
        </label>
        <label>
          <input type="radio" name="size" value="7"
            selected={size === '7'} onChange={handleChange}
          /> 7x7
        </label>
      </form>
    );
  }
}
