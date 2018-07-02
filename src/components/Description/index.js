import React, { Component } from "react";
import "./Description.css";
import { Link } from "react-router-dom";

const classes = `description_href description_home`;

class Description extends React.Component {
    render() {
        return (
            <div className="description">
                <p className="pl_caption">DESCRIPTION PAGE</p>
                <p className="description_text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esseam,
	                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                <a className="description_href" href="mailto:yedomaha3@gmail.com?subject=Подготовленная тема писма?body=Здравствуйте, это подготовленный текст письма!">Contact us</a>
                <Link
                    to="/"
                >
                    <p className={classes}>Home</p>
                </Link>
            </div>
        );
    }
}

export default Description;