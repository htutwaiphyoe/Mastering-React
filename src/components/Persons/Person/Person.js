import React from "react";
import classes from "./Person.module.css";
import ClassComponent from "../../../HOC/ClassComponent/ClassComponent";
const Person = (props) => {
    return (
        <ClassComponent cssClasses={classes.Person}>
            <p onClick={props.click}>{props.name}</p>
            <p>{props.age}</p>
            <input type="text" onChange={props.change} value={props.val} />
        </ClassComponent>
    );
};

export default Person;
