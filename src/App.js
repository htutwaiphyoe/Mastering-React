import React from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends React.Component {
    state = {
        persons: [
            { name: "Jane", age: 20 },
            { name: "George", age: 21 },
            { name: "Emily", age: 22 },
        ],
        show: false,
    };

    togglePersonHandler = () => {
        this.setState({
            show: !this.state.show,
        });
    };
    render() {
        let element = null;
        if (this.state.show) {
            element = this.state.persons.map((person) => (
                <Person name={person.name} age={person.age} />
            ));
        }
        return (
            <div className="App">
                <button onClick={this.togglePersonHandler}>
                    {this.state.show ? "Hide" : "Show"}
                </button>
                {element}
            </div>
        );
    }
}

export default App;
