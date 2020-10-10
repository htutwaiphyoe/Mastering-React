import React from "react";

const wrapper = (WrappedComponent, cssClasses) => {
    return (props) => (
        <div className={cssClasses}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default wrapper;
