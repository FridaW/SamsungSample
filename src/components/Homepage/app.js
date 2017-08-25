import React, { Component } from 'react';
import CombineNavigation from './combine_navigation';
import HomeSection from '../../containers/homepagebody/pagesections';
export default class App extends Component {
  render() {
    return (
      <div className="sub-container">
        <CombineNavigation/>
        <HomeSection/>
      </div>
    );
  }
}
