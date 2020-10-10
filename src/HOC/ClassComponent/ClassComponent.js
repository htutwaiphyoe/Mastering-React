import React from "react";

const ClassComponent = (props) => <div className={props.cssClasses}>{props.children}</div>;

export default ClassComponent;
