import React, { Component } from "react";
import { Button } from "antd-mobile";
export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="warning">start</Button>
        <Button type="primary">start</Button>
        <Button type="ghost">start</Button>
      </div>
    );
  }
}
