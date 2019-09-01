import React, { Component } from "react";
import PropTypes from "prop-types";

class Item extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    delComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  };
  delComment = () => {
    const { username, index } = this.props.comment;
    if (window.confirm(`确定要删除${username}`)) {
      this.props.delComment(index);
    }
  };
  render() {
    const { username, content } = this.props.comment;
    return (
      <div>
        <div>{username}说：</div>
        <div>{content}</div>
        <button onClick={this.delComment}>删除</button>
      </div>
    );
  }
}

export default Item;
