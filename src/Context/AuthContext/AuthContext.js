import React, { createContext } from 'react';


export const WebContext =createContext(null);

const AuthContext = ({ children }) => {

    const maintaineValue ={

    }

    return (
        <WebContext.Provider value={maintaineValue}>
            { children }
        </WebContext.Provider>
    );
};

export default AuthContext;