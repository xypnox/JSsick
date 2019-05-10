import React, { Component } from 'react';
import axios from 'axios';
import Rainbow from '../hoc/Rainbow';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      this.setState({
        posts: res.data.slice(0, 10),
      });
    });
    // pass
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })
    ) : (
      <p>Loading the posts......</p>
    );
    return (
      <div className="Home">
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, blanditiis, sit ad
          ipsa laudantium esse porro aperiam eum illo eveniet ullam ex sed harum accusantium
          delectus quo, nihil aliquam vero.
        </p>
        {postList}
      </div>
    );
  }
}

// Note that we have wrapped our compoent in a custom Higher order component
// See src/hoc/Rainbow for implementation detail
export default Rainbow(Home);
