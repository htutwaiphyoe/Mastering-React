import React from "react";
import classes from "./Header.module.css";
class Header extends React.Component {
    render() {
        return (
            <header className={classes.Header}>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/new">New Post</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
