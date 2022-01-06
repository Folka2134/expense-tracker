export const AppReducer = (state, action) => {
    switch(action.type) {
        case "GET_TRANSACTION": 
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        // Delete transactions by filtering out of state
        // If transaction.id != action.payload, keep
        case "DELETE_TRANSACTION": 
            return {
                ...state,
                transactions: state.transactions.filter((transaction) => transaction._id !== action.payload)
            }
        //Add transaction by spreading current state and adding payload
        case "ADD_TRANSACTION": 
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case "TRANSACTION_ERROR":
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}