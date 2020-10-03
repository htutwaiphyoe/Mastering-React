import React from "react";
import "./App.css";

class App extends React.Component {
    state = {
        person: {
            name: "Htut Wai Phyoe",
            age: 20,
        },
    };
    render() {
        return (
            <div className="App">
                <p>{this.state.person.name}</p>
                <p>{this.state.person.age}</p>
            </div>
        );
    }
}
export default App;
