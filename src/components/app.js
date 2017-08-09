import React, { Component } from 'react';
import Navi from '../containers/navigation'
import DropDown from '../containers/dropdown'

export default class App extends Component {
  render() {
    return (
      <div className="sub-container">
        <Navi />
        <DropDown />
      </div>
    );
  }
}
