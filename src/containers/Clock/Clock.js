import React from "react";
import classes from "./Clock.module.css";
class Clock extends React.Component {
    state = {
        date: new Date(),
    };

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({ date: new Date() });
    }
    render() {
        return <div className={classes.Clock}>{this.state.date.toLocaleTimeString()}</div>;
    }
}

export default Clock;
