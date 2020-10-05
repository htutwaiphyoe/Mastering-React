import React from "react";

const Person = (props) => {
    return (
        <div>
            <p onClick={props.click}>{props.name}</p>
            <p>{props.age}</p>
            <input type="text" onChange={props.change} value={props.val} />
        </div>
    );
};

export default Person;
