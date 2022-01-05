import {Header} from "./components/header.component"
import {Balance} from "./components/balance.component"
import {IncomeExpenses} from "./components/incomeExpenses.component"
import {TransationList} from "./components/transationList.component"
import {AddTransaction} from "./components/addTransaction.component"

import { GlobalProvider } from "./context/GlobalState"

import './App.css';

const App = () =>  {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransationList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
