import React from "react";
import classes from "./PasswordChecker.module.css";
class Checker extends React.Component {
    state = {
        password: "",
    };

    changePasswordHandler = (e) => {
        this.setState({ password: e.target.value });
    };

    render() {
        let style = `${classes.Checker__input}`;
        let status = "";
        if (!this.state.password) {
            status = "Please enter a password";
        } else if (this.state.password.length < 8) {
            status = "Week Password!";
            style += ` ${classes.red}`;
        } else {
            status = "Strong Password!";
            style += ` ${classes.green}`;
        }
        return (
            <div className={classes.Checker}>
                <p>{status}</p>
                <input
                    type="password"
                    onChange={this.changePasswordHandler}
                    value={this.state.password}
                    className={style}
                />
            </div>
        );
    }
}

export default Checker;
