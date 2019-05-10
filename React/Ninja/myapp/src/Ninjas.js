import React, { Component } from 'react';

class Ninja extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    const { ninjas } = this.props;
    const ninjaList = ninjas.map(ninja => {
      return (
        <div className="Ninja" key={ninja.id}>
          <h1>Name: {ninja.name}</h1>
          <p>Age: {ninja.age} </p>
          <p>Belt: {ninja.belt}</p>
        </div>
      );
    });

    return <div className="ninjas">{ninjaList}</div>;
  }
}

export default Ninja;
