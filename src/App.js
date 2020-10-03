import React from "react";
import "./App.css";

const Person = (props) => {
    return <p>Hello, {props.name}!</p>;
};
class App extends React.Component {
    render() {
        return (
            <div>
                <Person name="Htut Wai Phyoe" />
                <Person name="Timmy" />
                <Person name="Timx" />
            </div>
        );
    }
}
export default App;
