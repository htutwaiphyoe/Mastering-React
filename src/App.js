import React from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends React.Component {
    state = {
        persons: [{ name: "Jane", age: 20 }],
    };

    switchNameHandler = (name) => {
        this.setState({
            persons: [{ name: `Jane ${name}`, age: 20 }],
        });
    };

    inputChangeHandler = (event) => {
        this.setState({
            persons: [{ name: event.target.value, age: 20 }],
        });
    };
    render() {
        return (
            <div className="App">
                <button onClick={this.switchNameHandler}>Switch</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    change={this.inputChangeHandler}
                    val={this.state.persons[0].name}
                />
            </div>
        );
    }
}

export default App;
