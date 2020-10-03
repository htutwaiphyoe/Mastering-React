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
        const styleBtn = {
            backgroundColor: "#111",
            color: "#f1f1f1",
            padding: "10px",
            border: "none",
            borderRadius: "10px",
        };
        return (
            <div className="App">
                <p>{this.state.toggle ? "Yes" : "No"}</p>
                <button onClick={this.toggle} style={styleBtn}>
                    Click
                </button>
            </div>
        );
    }
}
export default App;
