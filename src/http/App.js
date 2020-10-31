import React from "react";
import Blog from "./Containers/Blog/Blog";
import Header from "./Components/Header/Header";
class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Blog />
            </div>
        );
    }
}

export default App;
