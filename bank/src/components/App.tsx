import React from 'react';
import './App.css'
import {debugData} from "../utils/debugData";
import {fetchNui} from "../utils/fetchNui";

const App: React.FC = () => {

  return (
    <div className="nui-wrapper">
      <div className="nui-background">
        </div>
      <div className="nui-content">
        <div className="Account-Info">
            <h1 className="Account-Type">Personal Account</h1>
            <h1 className="Account-Type-2">Personal Account</h1>
            <h1 className="Account-Name">Cool is Awesome</h1>
            <h1 className="Money-Info">$69,420</h1>
            <h1 className="Money-Info-1">Availble balance</h1>
            <button className="Deposit-Button">Deposit</button>
            <button className="Withdraw-Button">Withdraw</button>
            <button className="Transfer-Button">Transfer</button>
            </div>
        </div>
    </div>
  );
}

export default App;
