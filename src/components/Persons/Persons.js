import React, { useEffect } from "react";
import Person from "./Person/Person";
const Persons = (props) => {
    useEffect(() => {
        console.log("Persons runs");
        return () => {
            console.log("Persons clean up");
        };
    }, [props.persons]);
    return props.persons.map((person, index) => (
        <Person
            key={person.id}
            name={person.name}
            age={person.age}
            click={props.deletePersonHandler.bind(this, index)}
            change={(e) => props.inputHandler(e, person.id)}
            val={person.name}
        />
    ));
};

export default Persons;
