import React from "react";

const TemperatureInput = (props) => {
    const scaleNames = {
        c: "Celsius",
        f: "Fahrenheit",
    };

    const handleChange = (e) => {
        props.onTemperatureChange(e.target.value);
    };
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
};

export default TemperatureInput;
