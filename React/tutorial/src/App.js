import React, { Component } from 'react';
import './App.css';

function Greeter({ name, age, children }) {
  if (age < 80) {
    return (
      <p>
        Hello {name} of age {age}
        {children}
      </p>
    );
  }
  return <p>Heelo old man</p>;
}

class Timer extends Component {
  state = {
    name: 'Aditya',
    count: 0
  };

  changeState = () => {
    let count = this.state.count;
    this.setState({
      name: 'NoName',
      count: count + 1
    });
  };

  render() {
    return (
      <div onClick={this.changeState} className='Timer'>
        Hello, {this.state.name} You have clicked {this.state.count} many times
      </div>
    );
  }
}

function App() {
  let resp = {
    data: {
      age: 56
    }
  };
  return (
    <div className='App'>
      <Greeter name='Rajesh' age={resp.data.age}>
        <p>Hi this is an app</p>
      </Greeter>

      <Timer />

      <hr />
      <br />
      <a href='#' className='button'>
        Press me
      </a>
    </div>
  );
}

export default App;
