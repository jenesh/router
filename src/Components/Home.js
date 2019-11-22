import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";

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
    console.log("Home: ", this.props);
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card hoverable" key={post.id}>
            <img src={Pokeball} alt="Pokebal" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet</div>
    );
    return (
      <div className="container home">
        <h3 className="center">Home</h3>
        <div>{postList}</div>
      </div>
    );
  }
}

export default Home;
