import React, { useContext } from "react";

import Ingredients from "./components/Ingredients/Ingredients";
import Auth from "./components/Auth";
import { AuthContext } from "./ContextAPI/AuthContext";
const App = (props) => {
    const authContext = useContext(AuthContext);
    let components = <Auth />;
    if (authContext.auth) {
        components = <Ingredients />;
    }
    return components;
};

export default App;
