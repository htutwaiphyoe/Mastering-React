import React from "react";
import Radium from "radium";
const Person = (props) => {
    const style = {
        background: "#fff",
        border: "1px solid #111",
        padding: "20px",
        width: "480px",
        margin: "20px auto",
        "@media only screen and (min-width: 500px)": {
            width: "60%",
        },
    };
    return (
        <div style={style}>
            <p onClick={props.click}>{props.name}</p>
            <p>{props.age}</p>
            <input type="text" onChange={props.change} value={props.val} />
        </div>
    );
};

export default Radium(Person);
