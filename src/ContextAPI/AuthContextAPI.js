import React from "react";

const AuthContextApi = React.createContext({ auth: false, login: () => {} });

export default AuthContextApi;
