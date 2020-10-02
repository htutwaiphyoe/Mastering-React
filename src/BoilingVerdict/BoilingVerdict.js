import React from "react";

const BoilingVerdict = (props) => {
    if (props.celsius >= 100) {
        return <p>Boiling Points</p>;
    } else if (props.celsius <= 0) {
        return <p>Iced Points</p>;
    } else if (!props.celsius) {
        return <p>No Points</p>;
    }
    return <p>Normal Points</p>;
};

export default BoilingVerdict;
