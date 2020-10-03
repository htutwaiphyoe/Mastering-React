import React from "react";
import "./App.css";

const Person = (props) => {
    return <p>Hello, {props.children}!</p>;
};
class App extends React.Component {
    render() {
        return (
            <div>
                <Person>Htut Wai Phyoe</Person>
            </div>
        );
    }
}
export default App;
