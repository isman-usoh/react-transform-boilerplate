import React, { Component } from 'react';

export class App extends Component {
  static customInsideVar = "Hello, inside static varible"
  render() {
    return (
      <div>
		<h2>Echo displayName: {App.displayName}</h2> // not work.
		<h2>Echo defaultProps: {App.defaultProps.username}</h2> // not work.
		<h2>Echo customOutsideVar: {App.customOutsideVar}</h2> // not work.
		<h2>Echo customInsideVar: {App.customInsideVar}</h2> // work.
      </div>
    );
  }
}
App.displayName = "AppComponent";
App.defaultProps = { username : "@isman-usoh" };
App.customOutsideVar = "Hello, outside static varible";