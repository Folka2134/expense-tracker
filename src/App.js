import {Header} from "./components/header.component"
import {Balance} from "./components/balance.component"

import './App.css';

const App = () =>  {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance />
      </div>
    </div>
  );
}

export default App;
