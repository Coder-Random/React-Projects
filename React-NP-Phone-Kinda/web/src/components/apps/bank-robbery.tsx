import "../App.css";

interface RobberyProps {
  show: boolean;
  onHome: () => void;
  onBoost: () => void;
  onRobbery: () => void;
  message: string;
}

const Robbery = (props: RobberyProps) => {

  const price = 1000.00;

  return (
    <div
      className="Robbery-Container"
      style={{ display: props.show ? "" : "none" }}
    >
      <div className="Robbery-Background"></div>
      <div className="Robbery-Container">
        <div className="Robbery-Header">
          <div className="Robbery-Header-Text">Robbery App</div>
        </div>
      </div>
      <div className="Robbery-Body">
        <div className="Purchase-Container">
          <div className="Robbery-Purchase-1">
            <div className="Robbery-Body-Text">Green Laptop</div>
            <div className="Robbery-Body-Text">A green laptop</div>
            <div className="Robbery-Body-Text">Price: $1000.00</div>
            <button className="Purchase-Button" onClick={props.onRobbery}>
              Purchase
            </button>
            <div className="Robbery-Purchase-2">
              <div className="Robbery-Body-Text">Blue Laptop</div>
              <div className="Robbery-Body-Text">A blue laptop</div>
              <div className="Robbery-Body-Text">Price: $1000.00</div>
              <button className="Purchase-Button" onClick={props.onRobbery}>
                Purchase
              </button>
              <div className="Robbery-Purchase-3">
                <div className="Robbery-Body-Text">Purple Laptop</div>
                <div className="Robbery-Body-Text">A purple laptop</div>
                <div className="Robbery-Body-Text">Price: $1000.00</div>
                <button className="Purchase-Button" onClick={props.onRobbery}>
                  Purchase
                </button>
              </div>
            </div>
          </div>
          <div className="Robbery-bar">
            {/* <button className="Rob-Home" onClick={props.onHome}></button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robbery;
