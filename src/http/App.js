import React from "react";
import { BrowserRouter } from "react-router-dom";
import Blog from "./Containers/Blog/Blog";
import Header from "./Components/Header/Header";
class App extends React.Component {
    render() {
        return (
            // <BrowserRouter basename="/app" />
            <BrowserRouter>
                <div>
                    <Header />
                    <Blog />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
