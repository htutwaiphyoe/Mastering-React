import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

class Header extends React.Component {
    render() {
        return (
            <header className={classes.Header}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link
                                to={{
                                    pathname: "/new",
                                }}
                            >
                                New Post
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
