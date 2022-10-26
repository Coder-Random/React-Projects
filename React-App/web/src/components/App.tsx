import React from "react";
import "./App.css";
import { fetchNui } from "../utils/fetchNui";
import Confirm from "./Confirm";
import Notify from "./Notify";

const App: React.FC = () => {
  const [visible] = React.useState(true);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [showNotify, setShowNotify] = React.useState(false);

  return (
    <div className="NUI" style={{ display: visible ? '' : 'none' }}>
      <div className="NUI-Container">
        <div className="NUI-background">
          <div className="NUI-Header">
            <h1 className="text">NP UI</h1>
          </div>
        </div>
        <button className="Accept-Button" onClick={() => setShowConfirm(true)}>
          Purchase
        </button>
        <button className="Cancel-Button" onClick={() => setShowConfirm(false)}>
          Cancel
        </button>
      </div>
      <Confirm
        show={showConfirm}
        onConfirm={() => {
          setShowNotify(true);
          setShowConfirm(true);
          console.log("Confirm");
          //fetchNui("cool-script:acceptedConfirm");
        }}
        onCancel={() => {
          setShowConfirm(false)
          setShowNotify(false) }}
        message="Please confirm your purchase!"
        />
      <Notify
        show={showNotify}
        onNotify={() => {
          setShowNotify(true);
          console.log("Notify");
          //fetchNui("cool-script:acceptedConfirm");
        }}
        onCancel={() => setShowNotify(false)}
        message="Thank you for your purchase!"
      />
    </div>
  );
};

export default App;
