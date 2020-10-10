import React from "react";
import classes from "./Person.module.css";
import Auxiliary from "../../../HOC/Auxillary/Auxillary";
const Person = (props) => {
    return (
        <Auxiliary>
            <p onClick={props.click}>{props.name}</p>
            <p>{props.age}</p>
            <input type="text" onChange={props.change} value={props.val} />
        </Auxiliary>
    );
};

export default Person;
