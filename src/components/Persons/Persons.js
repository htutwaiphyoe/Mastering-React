import React from "react";
import Person from "./Person/Person";
class Persons extends React.Component {
    render() {
        console.log("Persons run");
        return this.props.persons.map((person, index) => (
            <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={this.props.deletePersonHandler.bind(this, index)}
                change={(e) => this.props.inputHandler(e, person.id)}
                val={person.name}
            />
        ));
    }
}

export default Persons;
