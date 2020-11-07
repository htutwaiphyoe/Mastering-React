import React from "react";
import { connect } from "react-redux";
import CounterOutput from "../../components/CounterOutput/CounterOuptut";
import CounterControl from "../../components/CounterControl/CounterControl";
import * as actionCreators from "../../store/actions";
import classes from "./Counter.module.css";
const Counter = (props) => {
    return (
        <div>
            <CounterOutput counter={props.counter} />
            <div className={classes.Controls}>
                <CounterControl label="Increment" onIncClick={props.incrementCounter} />
                <CounterControl label="Decrement" onIncClick={props.decrementCounter} />
                <CounterControl label="Add 10" onIncClick={() => props.addCounter(10)} />
                <CounterControl
                    label="Substract 10"
                    onIncClick={() => props.substractCounter(10)}
                />
            </div>
            <button onClick={props.storeCounter}>Store</button>
            <ul>
                {props.results.map((result) => (
                    <li key={result.id} onClick={() => props.deleteResult(result.id)}>
                        {result.value}
                    </li>
                ))}
            </ul>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        results: state.results,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         incrementCounter: () => dispatch({ type: "INC" }),
//     };
// };
const mapDispatchToProps = {
    incrementCounter: actionCreators.incrementCounter,
    decrementCounter: actionCreators.decrementCounter,
    addCounter: actionCreators.addCounter,
    substractCounter: actionCreators.substractCounter,
    storeCounter: actionCreators.storeResult,
    deleteResult: actionCreators.deleteResult,
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
