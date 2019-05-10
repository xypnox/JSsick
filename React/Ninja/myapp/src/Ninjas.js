import React, { Component } from 'react';

class Ninja extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    const { name, age, belt } = this.props;
    return (
      <div className="ninja">
        <h1>Name: {name}</h1>
        <p>Age: {age} </p>
        <p>Belt: {belt}</p>
      </div>
    );
  }
}

export default Ninja;
