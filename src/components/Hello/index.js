import React, { Component } from "react";
import "./Hello.css";
import $ from "jquery";

class Hello extends React.Component {
    render() {
        return (
            <div className="hello">
                <img className="hello_img" src="hello.png" />
            </div>
        );
    }
}

setTimeout(function () {
    $('.hello').css('display', 'none');
}, 2000);

export default Hello;