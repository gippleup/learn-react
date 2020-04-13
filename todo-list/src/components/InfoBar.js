import React, { Component } from 'react';

class InfoBar extends Component{
  state = {
    initialized: false,
    toggled: false,
  }
  node = null;
  render() {
    return (
      <div className="sticky hide" id="navbar">
        <div>HEY!</div>
      </div>
    )
  }
}

export default InfoBar