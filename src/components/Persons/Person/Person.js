import React from "react";
import PropTypes from "prop-types";
import classes from "./Person.module.css";
import wrapper from "../../../HOC/wrapper/wrapper";

class Person extends React.Component {
    el = React.createRef();
    componentDidMount() {
        this.el.current.focus();
    }
    render() {
        return (
            <React.Fragment>
                <p onClick={this.props.click}>{this.props.name}</p>
                <p>{this.props.age}</p>
                <input
                    type="text"
                    onChange={this.props.change}
                    value={this.props.name}
                    ref={this.el}
                />
            </React.Fragment>
        );
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    change: PropTypes.func,
};
export default wrapper(Person, classes.Person);
