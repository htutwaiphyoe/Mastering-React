import React from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import ClassComponent from "../HOC/ClassComponent/ClassComponent";
class App extends React.Component {
    state = {
        persons: [
            { id: "1212", name: "Jane", age: 20 },
            { id: "asdf", name: "George", age: 21 },
            { id: "121212", name: "Emily", age: 22 },
        ],
        show: false,
    };
    togglePersonHandler = () => {
        this.setState({
            show: !this.state.show,
        });
    };
    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];

        persons.splice(index, 1);
        this.setState({ persons });
    };
    inputHandler = (e, id) => {
        const personIndex = this.state.persons.findIndex((p) => p.id === id);
        const person = { ...this.state.persons[personIndex] };
        person.name = e.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({ persons });
    };
    render() {
        let element = null;
        if (this.state.show) {
            element = (
                <Persons
                    persons={this.state.persons}
                    deletePersonHandler={this.deletePersonHandler}
                    inputHandler={this.inputHandler}
                />
            );
        }
        return (
            <ClassComponent cssClasses={classes.App}>
                <button onClick={this.togglePersonHandler} className={classes.button}>
                    {this.state.show ? "Hide" : "Show"}
                </button>
                {element}
            </ClassComponent>
        );
    }
}

export default App;
