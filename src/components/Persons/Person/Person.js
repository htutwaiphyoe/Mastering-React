import React from "react";
import classes from "./Person.module.css";
import wrapper from "../../../HOC/wrapper/wrapper";
const Person = (props) => {
    return (
        <React.Fragment>
            <p onClick={props.click}>{props.name}</p>
            <p>{props.age}</p>
            <input type="text" onChange={props.change} value={props.val} />
        </React.Fragment>
    );
};

export default wrapper(Person, classes.Person);
