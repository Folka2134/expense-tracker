import {Header} from "./components/header.component"
import {Balance} from "./components/balance.component"
import {IncomeExpenses} from "./components/incomeExpenses.component"
import {TransationList} from "./components/transationList.component"
import {AddTransaction} from "./components/addTransaction.component"

import './App.css';

const App = () =>  {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransationList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
