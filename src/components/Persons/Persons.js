import React, { useEffect } from "react";
import Person from "./Person/Person";
const Persons = (props) => {
    return props.persons.map((person, index) => (
        <Person
            key={person.id}
            name={person.name}
            age={person.age}
            click={props.deletePersonHandler.bind(this, index)}
            change={(e) => props.inputHandler(e, person.id)}
        />
    ));
};

export default Persons;
