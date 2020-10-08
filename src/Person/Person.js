import React from "react";
import classes from "./Person.module.css";
const Person = (props) => {
    if (Math.random() > 0.4) {
        throw new Error("Error");
    }
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>{props.name}</p>
            <p>{props.age}</p>
            <input type="text" onChange={props.change} value={props.val} />
        </div>
    );
};

export default Person;
