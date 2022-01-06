export const AppReducer = (state, action) => {
    switch(action.type) {
        // Delete transactions by filtering out of state
        // If transaction.id != action.payload, keep
        case "DELETE_TRANSACTION": 
            return {
                ...state,
                transactions: state.transactions.filter((transaction) => transaction.id !== action.payload)
            }
        //Add transaction by spreading current state and adding payload
        case "ADD_TRANSACTION": 
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}