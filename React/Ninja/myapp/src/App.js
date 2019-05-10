import React, { Component } from 'react';
import Ninja from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ninjas: [
        { name: 'Ryu', age: 23, belt: 'black', id: 1 },
        { name: 'Johny', age: 20, belt: 'blue', id: 2 },
        { name: 'Maliks', age: 26, belt: 'red', id: 3 },
      ],
    };
  }

  // Function adds a ninja
  addNinja = ninja => {
    ninja.id = Math.random();
    const ninjas = [...this.state.ninjas, ninja];
    console.log(ninja);
    this.setState({ ninjas });
  };

  // Function deletes a ninja
  deleteNinja = id => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({ ninjas });
    // console.log(id);
  };

  render() {
    const { ninjas } = this.state;
    return (
      <div className="App">
        <h1>Hello there</h1>
        <p>My first react app </p>
        <Ninja ninjas={ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
