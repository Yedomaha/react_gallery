import React, { Component } from "react";
import "./Hello.css";

class Hello extends React.Component {
  render() {
    return (
      <div className="hello">
        <img className="hello_img" src="hello.png" />
      </div>
    );
  }
}

export default Hello;
