import React, { Component } from "react";
import PropTypes from "prop-types";

class Add extends Component {
  state = {
    username: "",
    content: ""
  };
  static propTypes = {
    addComment: PropTypes.func.isRequired
  };
  handleSubmit = () => {
    //收集数据,封装成comment对象
    const comment = this.state;
    //更新状态
    this.props.addComment(comment);
    this.setState({
      username: "",
      content: ""
    });
  };
  handleNameChange = event => {
    const username = event.target.value;
    this.setState({
      username
    });
  };
  handleContentChange = event => {
    const content = event.target.value;
    this.setState({
      content
    });
  };
  render() {
    const { username, content } = this.state;
    return (
      <div>
        <form>
          <div>用户名</div>
          <div>
            <input
              type="text"
              placeholder="用户名"
              value={username}
              onChange={this.handleNameChange}
            />
          </div>
          <div>评论内容</div>
          <div>
            <textarea
              placeholder="评论内容"
              value={content}
              onChange={this.handleContentChange}
            ></textarea>
          </div>
          <input type="button" value="提交" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default Add;
