import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.post_id;
    this.setState({ id });
  }

  render() {
    return (
      <div className="post">
        <h4>{this.state.id}</h4>
      </div>
    );
  }
}

export default Post;
