import React from "react";
import "../App.css";
import Confirm from "../confirm-container/Confirm";
import Robbery from "../apps/bank-robbery";
import { FaUserSecret } from "react-icons/fa";
import Boost from "../apps/boosting-app";


interface HomeProps {
  show: boolean;
  onBoost: () => void;
  onHome: () => void;
  message: string;
}
  
const Home = (props: HomeProps) => {

  return (
      <div className="Home-Container" style={{ display: props.show ? '' : 'none' }}>
              <button className="home" title="Home" onClick={props.onHome}></button>
      </div>
  )
}

const App: React.FC = () => {
  const [visible] = React.useState(true);
  const [showRobbery, setShowRobbery] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [showHome, setShowHome] = React.useState(true);
  const [showBoost, setShowBoost] = React.useState(false);

  return (
    <div className="Laptop" style={{ display: visible ? "" : "none" }}>
      <div className="Laptop-Container">
        <div className="Laptop-background">
          <div className="Laptop-Header"></div>
          <div className="bar"></div>
          <div className="Laptop-Apps"></div>
          <button className="Robbery-App" onClick={() => setShowRobbery(true)}>
          <FaUserSecret
            style={{
              color : "white",
              fontSize: "2rem",
              position: "absolute",
              top: "0.5rem",
              left: "0.5rem",
            }}
          />
          </button>
          <button className="Boosting-App" onClick={() => setShowBoost(true)}>
          <FaUserSecret
            style={{
              color : "white",
              fontSize: "2rem",
              position: "absolute",
              top: "0.5rem",
              left: "0.5rem",
            }}
          />
          </button>
        </div>
      </div>
      <Robbery
        show={showRobbery}
        onBoost={() => 
          setShowBoost(true)
        }
        onHome={() => {
          setShowRobbery(false)
          setShowConfirm(false);
        }}
        onRobbery={() => {
          setShowRobbery(true);
          setShowConfirm(true);
          //fetchNui("cool-script:acceptedConfirm");
        }}
        message={""}
      />
      <Confirm
        show={showConfirm}
        onBoost={() => {}}
        onHome={() => {
          setShowRobbery(false);
          setShowConfirm(false);
        }}
        onConfirm={() => {
          setShowConfirm(false);
          setShowRobbery(true);
        }}
        onCancel={() => {
          setShowConfirm(false);
          setShowRobbery(true);
        }
        }
        message={"Confirm Purchase?"}
      />
      <Home
        show={showHome}
        onBoost={() => {}}
        onHome={() => {
          setShowHome(true);
          setShowRobbery(false);
        }}
        message={""}
      />
      <Boost
        show={showBoost}
        onHome={() => {
          setShowBoost(false);
          setShowRobbery(false);
          setShowConfirm(false);
        }}
        onBoost={() => {
          setShowConfirm(true);
          setShowBoost(true);
          //fetchNui("cool-script:acceptedConfirm");
        }}
        message={""}
      />
    </div>
  );
}

export default App;
