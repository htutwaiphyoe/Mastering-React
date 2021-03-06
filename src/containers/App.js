import React from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import ClassComponent from "../HOC/ClassComponent/ClassComponent";
import AuthContext from "../ContextAPI/AuthContextAPI";
class App extends React.Component {
    state = {
        persons: [
            { id: "1212", name: "Jane", age: 20 },
            { id: "asdf", name: "George", age: 21 },
            { id: "121212", name: "Emily", age: 22 },
        ],
        show: false,
        auth: false,
    };

    el = React.createRef();
    componentDidMount() {
        this.el.current.click();
    }
    togglePersonHandler = () => {
        this.setState((state, props) => {
            return {
                show: !state.show,
            };
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
    loginHandler = () => {
        this.setState((state, props) => {
            return {
                auth: !state.auth,
            };
        });
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
            <AuthContext.Provider value={{ auth: this.state.auth, login: this.loginHandler }}>
                <ClassComponent cssClasses={classes.App}>
                    <button
                        onClick={this.togglePersonHandler}
                        className={classes.button}
                        ref={this.el}
                    >
                        {this.state.show ? "Hide" : "Show"}
                    </button>
                    <button onClick={this.loginHandler} className={classes.button}>
                        {this.state.auth ? "Authenticated" : "Login"}
                    </button>
                    {element}
                </ClassComponent>
            </AuthContext.Provider>
        );
    }
}

export default App;
