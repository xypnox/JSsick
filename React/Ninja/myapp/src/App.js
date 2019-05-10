import React, { Component } from 'react';
import Ninja from './Ninjas';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Hello there</h1>
        <p>My first react app </p>
        <Ninja name="Ryu" age="45" belt="black" />
      </div>
    );
  }
}

export default App;
