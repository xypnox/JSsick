import React, { Component } from 'react';

// Component for Adding a New Ninja using a form
class AddNinja extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      age: null,
      belt: null,
    };
  }

  // Handles change in input elements
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  // Handles submit event of the form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNinja(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={this.handleChange} />

          <label htmlFor="age">Age: </label>
          <input type="number" id="age" onChange={this.handleChange} />

          <label htmlFor="belt">Belt: </label>
          <input type="text" id="belt" onChange={this.handleChange} />

          <button type="button">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNinja;
