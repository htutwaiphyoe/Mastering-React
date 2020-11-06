import React from "react";
import classes from "./CounterOutput.module.css";
const CounterOutput = (props) => {
    return (
        <div className={classes.CounterOutput}>
            <h1>Counter: {props.counter}</h1>
        </div>
    );
};

export default CounterOutput;
