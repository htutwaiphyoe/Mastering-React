import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

class Header extends React.Component {
    render() {
        return (
            <header className={classes.Header}>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                exact
                                activeStyle={{ color: "white", backgroundColor: "#111" }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={{
                                    pathname: "/new",
                                }}
                                exact
                                activeClassName="nav--active"
                            >
                                New Post
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
