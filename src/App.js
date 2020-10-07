import React from "react";
import styled from "styled-components";
import "./App.css";
import Person from "./Person/Person";
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
        console.log(persons);
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
        const StyleBtn = styled.button`
            background: ${(props) => (props.show ? "black" : "white")};
            color: ${(props) => (props.show ? "white" : "black")};
            border: 1px solid #111;
            padding: 16px;
            &:hover {
                background: ${(props) => (props.show ? "white" : "black")};
                color: ${(props) => (props.show ? "black" : "white")};
            }
        `;

        let element = null;
        if (this.state.show) {
            element = this.state.persons.map((person, index) => (
                <Person
                    name={person.name}
                    key={person.id}
                    age={person.age}
                    click={this.deletePersonHandler.bind(this, index)}
                    change={(e) => this.inputHandler(e, person.id)}
                    val={person.name}
                />
            ));
        }
        return (
            <div className="App">
                <StyleBtn onClick={this.togglePersonHandler} show={this.state.show}>
                    {this.state.show ? "Hide" : "Show"}
                </StyleBtn>
                {element}
            </div>
        );
    }
}

export default App;
