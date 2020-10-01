import React from "react";
import "./App.css";

class App extends React.Component {
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
                <button style={styleBtn}>Click</button>
            </div>
        );
    }
}
export default App;
