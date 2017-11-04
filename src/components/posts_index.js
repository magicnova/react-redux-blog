import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentDidMount() {
    console.log(this.props.fetchPosts());
  }

  render() {
    return <div>Index</div>;
  }
}
export default connect(null, {
  fetchPosts: fetchPosts
})(PostsIndex);
