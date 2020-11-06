import React from "react";
import classes from "./CounterControl.module.css";
const CounterControl = (props) => {
    return (
        <div onClick={props.onIncClick} className={classes.CounterControl}>
            {props.label}
        </div>
    );
};

export default CounterControl;
