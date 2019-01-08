import React, { Component } from 'react';
import '../../App.css';

export class MenuButton extends Component {
  render() {
    const { handleMouseDown } = this.props;
    return (
      <div>
        <div
          className="buttonContainer"
          style={{ display: 'inline-block' }}
          onClick={this.myFunction}
          onMouseDown={handleMouseDown}
        >
          <i className="material-icons buttonContainerItem">menu</i>
          <span className="buttonContainerItem" />
        </div>
      </div>
    );
  }
}
