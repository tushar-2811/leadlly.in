import React, { createContext, useReducer } from 'react';

export const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload
            }
        case 'LOGOUT':
            return {
                user: null
            }
        default:
            return state
    }

}
export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        state: null
    })
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>
    )
}