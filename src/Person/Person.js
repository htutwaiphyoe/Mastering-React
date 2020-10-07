import React from "react";
import styled from "styled-components";

const Person = (props) => {
    const StyleDiv = styled.div`
        background: #fff;
        border: 1px solid #111;
        padding: 20px;
        width: 60%;
        margin: 20px auto;
        @media only screen and (min-width: 600px) {
            width: 480px;
        }
    `;
    return (
        <StyleDiv>
            <p onClick={props.click}>{props.name}</p>
            <p>{props.age}</p>
            <input type="text" onChange={props.change} value={props.val} />
        </StyleDiv>
    );
};

export default Person;
