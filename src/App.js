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
    };
    render() {
        return (
            <div className="App">
                <button>Switch</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
