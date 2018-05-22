import React from 'react';

export default class Config extends React.Component {
  render ({handleChange, size} = this.props) {
    return (
      <form>
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
          <input type="radio" name="size" value="5"
            selected={size === '5'} onChange={handleChange}
          /> 5x5
        </label>
      </form>
    );
  }
}
