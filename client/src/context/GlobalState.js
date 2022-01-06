import React, { createContext, useReducer } from "react";
import axios from 'axios';

import {AppReducer} from "./AppReducer"

// Initial State Object
const initialState = {
    transactions:  [],
    error: null,
    loading: true
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

        // Actions
        async function getTransactions() {
            try {
                const res = await axios.get('/api/v1/transactions')

                dispatch({
                    type: "GET_TRANSACTION",
                    payload: res.data.data
                })
            } catch (error) {
                dispatch({
                    type: "GET_ERROR",
                    payload: error.response.data.error
                })
            }
        }

        function deleteTransaction(id) {
            dispatch({
                type: "DELETE_TRANSACTION",
                payload: id
            })
        }
        function addTransaction(transaction) {
            dispatch({
                type: "ADD_TRANSACTION",
                payload: transaction
            })
        }

    return (
    // Provide state and functions to other components (children)
    <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
    )
}
