import React from "react";
import PropTypes from "prop-types";
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

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    change: PropTypes.func,
    val: PropTypes.string,
};
export default wrapper(Person, classes.Person);
