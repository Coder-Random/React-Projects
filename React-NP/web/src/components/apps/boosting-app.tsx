import "../App.css";

interface BoostProps {
  show: boolean;
  onHome: () => void;
  onBoost: () => void;
  message: string;
}

const Boost = (props: BoostProps) => {
  const price = 1000.0;

  return (
    <div
      className="Boost-Container"
      style={{ display: props.show ? "" : "none" }}
    >
      <div className="Boost-Background"></div>
      <div className="Boost-Container">
        <div className="Boost-Header">
          <div className="Boost-Header-Text">Boost App</div>
        </div>
      </div>
      <div className="Boost-bar"></div>
    </div>
  );
};

export default Boost;
