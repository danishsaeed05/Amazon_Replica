import React, { createContext, useContext, useReducer } from 'react'

// Creating empty data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// import in components where we want to access the data (basket/cart)
export const useStateValue = () => useContext(StateContext);