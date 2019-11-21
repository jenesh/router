import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(res => {
        this.setState({
          posts: res.data
        });
      });
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card hoverable" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet</div>
    );
    return (
      <div className="container">
        <h3 className="center">Home</h3>
        <div>{postList}</div>
      </div>
    );
  }
}

export default Home;
