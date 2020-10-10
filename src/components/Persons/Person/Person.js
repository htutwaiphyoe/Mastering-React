import React, { useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";
import classes from "./Person.module.css";
import wrapper from "../../../HOC/wrapper/wrapper";
import AuthContext from "../../../ContextAPI/AuthContextAPI";
const Person = (props) => {
    const el = useRef(null);
    useEffect(() => {
        el.current.focus();
    }, []);
    // static contextType = AuthContext;
    const authContext = useContext(AuthContext);

    return (
        <React.Fragment>
            {/* <AuthContext.Consumer>
                {(context) => <p>{context.auth ? "Authenticated" : "login"}</p>}
            </AuthContext.Consumer> */}
            {/* <p>{this.context.auth ? "Authenticated" : "login"}</p> */}
            <p>{authContext.auth ? "Authenticated" : "login"}</p>
            <p onClick={props.click}>{props.name}</p>
            <p>{props.age}</p>
            <input type="text" onChange={props.change} value={props.name} ref={el} />
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
