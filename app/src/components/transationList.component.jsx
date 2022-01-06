import React, { useContext } from 'react'
import {Transaction} from "./transaction.component"

import { GlobalContext } from "../context/GlobalState"

export const TransationList = () => {
    const { transactions } = useContext(GlobalContext)

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction) => (<Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>
        </>
    )
}
