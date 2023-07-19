import React, { createContext, useReducer } from 'react'
import { View } from 'react-native'
import { authReducer } from './AuthReducer';

export interface AuthState {
    isLoggedIn: boolean,
    username?: string,
    favoriteIcon?: string
}

//estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

//todo lo que el contexto proporcionará a los hijos
export interface AuthContextProps {
    authState: AuthState,
    signIn: () => void,
    changeFavIcon: (icon: string) => void

}

// crear contexto
export const AuthContext = createContext({} as AuthContextProps);

// exponer el proveedor de estado

export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({type: 'signIn'})
    }

    const changeFavIcon = (icon: string) => {
        dispatch({type: 'changeFavIcon', payload: icon})
    }

    return (
        <AuthContext.Provider 
            value={{
                authState,
                signIn, 
                changeFavIcon
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}