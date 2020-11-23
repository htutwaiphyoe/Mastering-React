import React, { useState } from "react";

export const AuthContext = React.createContext({
    auth: false,
    login: () => {},
});

const AuthContextProvider = (props) => {
    const [authState, setAuth] = useState(false);
    const loginHandler = () => {
        setAuth(true);
    };
    return (
        <AuthContext.Provider value={{ auth: authState, login: loginHandler }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
