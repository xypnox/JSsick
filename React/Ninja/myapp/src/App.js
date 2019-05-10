import React, { Component } from 'react';
import Ninja from './Ninjas';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ninjas: [
        { name: 'Ryu', age: 23, belt: 'black', id: 1 },
        { name: 'Johny', age: 20, belt: 'blue', id: 2 },
        { name: 'Maliks', age: 26, belt: 'red', id: 3 }
      ]
    };
  }

  render() {
    const { ninjas } = this.state;
    return (
      <div className="App">
        <h1>Hello there</h1>
        <p>My first react app </p>
        <Ninja ninjas={ninjas} />
      </div>
    );
  }
}

export default App;
