import React from "react";
import "./App.css";

class App extends React.Component {
    state = {
        toggle: false,
    };

    toggle = () => {
        this.setState({ toggle: !this.state.toggle });
    };
    render() {
        return (
            <div className="App">
                <p>{this.state.toggle ? "Yes" : "No"}</p>
                <button onClick={this.toggle}>Click</button>
            </div>
        );
    }
}
export default App;
