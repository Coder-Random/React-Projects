import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    //Calculator app built in React
    <div id="calculator" className="calculator">
      <div className="result">
        <p></p>
      </div>

      <span className="clear grey">C</span>
      <span className="grey">+/-</span>
      <span className="grey">%</span>
      <span className="row">÷</span>

      <span>7</span>
      <span>8</span>
      <span>9</span>
      <span className="row">x</span>

      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span className="row">-</span>

      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span className="row">+</span>

      <span className="double">0</span>
      <span>.</span>
      <span className="row">=</span>
    </div>
  );
};

export default App;
