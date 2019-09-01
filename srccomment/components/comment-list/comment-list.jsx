import React, { Component } from "react";
import Item from "../comment-item/comment-item";
import PropTypes from "prop-types";

export default class List extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    delComment: PropTypes.func.isRequired
  };
  render() {
    const { comments, delComment } = this.props;
    const display = comments.length === 0 ? "block" : "none";

    return (
      <div>
        <div>评论回复：</div>
        <h2 style={{ display }}>暂无评论，点击左侧添加评论</h2>
        {comments.map((comment, index) => (
          <Item
            index={index}
            key={index}
            comment={comment}
            delComment={delComment}
          />
        ))}
      </div>
    );
  }
}
