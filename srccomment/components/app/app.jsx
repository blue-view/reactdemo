import React, { Component } from "react";
import Add from "../comment-add/comment-add";
import List from "../comment-list/comment-list";

export default class app extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       commetns: [
  //         { username: "tom", content: "hello" },
  //         { username: "jim", content: "hello1" }
  //       ]
  //     };
  //   }
  state = {
    comments: [
      { username: "tom", content: "hello" },
      { username: "jim", content: "hello1" }
    ]
  };
  addComment = comment => {
    const { comments } = this.state;
    comments.unshift(comment);
    this.setState({ comments });
  };
  delComment = index => {
    const { comments } = this.state;
    comments.splice(index, 1);
    this.setState({ comments });
  };
  render() {
    const { comments } = this.state;
    return (
      <div className="App">
        <div>请发表对react的评论</div>
        <div>
          <div>
            <Add addComment={this.addComment} />
          </div>
          <div>
            <List comments={comments} delComment={this.delComment} />
          </div>
        </div>
      </div>
    );
  }
}
