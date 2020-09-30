import React from "react";
import "./App.css";

class App extends React.Component {
    state = {
        isToggle: false,
    };

    toggle = () => {
        this.setState((state) => ({ isToggle: !state.isToggle }));
    };

    render() {
        return (
            <div className="App">
                {this.state.isToggle ? "Login" : "Register"}
                <button onClick={this.toggle}>{this.state.isToggle ? "Yes" : "No"}</button>
            </div>
        );
    }
}

export default App;
