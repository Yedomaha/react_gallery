import React, { Component } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const classes = `button buttom`;

class Menu extends React.Component {
    render() {
        return (
            <div className="menu_container">
                <Link
                    to={{
                        pathname: `/description/`,
                    }}
                >
                    <p className="button">О программе</p>
                </Link>
                <Link
                    to="/"
                >
                    <p className={classes}>Список картинок</p>
                </Link>
                <a className={classes} href="#">Contact us</a>
            </div>
        );
    }
}

// ReactDOM.render(
//   <Menu />,
//   document.getElementById('root')
// );

export default Menu;