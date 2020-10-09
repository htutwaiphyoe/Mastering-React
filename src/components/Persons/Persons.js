import React from "react";
import Person from "./Person/Person";
class Persons extends React.Component {
    state = {};
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps run");
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate run");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate run");
        return { prevProps };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate run");
        console.log(snapshot);
    }
    render() {
        console.log("Render run");
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
