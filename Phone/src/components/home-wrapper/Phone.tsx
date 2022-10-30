import React, { useState } from "react";
import "./Phone.css";
import { FaFacebookMessenger, FaPhone, FaCalculator, FaChrome, FaUserFriends,FaSpotify, FaAppStoreIos, FaTiktok } from "react-icons/fa";

interface HomeProps {
  show: boolean;
  onHome: () => void;
  message: string;
}
  
const Home = (props: HomeProps) => {

  return (
      <div id="Home-Container" style={{ display: props.show ? '' : 'none' }}>
              <button className="phone-home-button" title="Home" onClick={props.onHome}></button>
              <button className="arrow left" title="Back" onClick={props.onHome}></button>
                <div className="home-app-row">
                  <div className="home-app-block"></div>
                  <div className="home-app-block-2"></div>
                  <div className="home-app-block-3"></div>
                </div>
      </div>
  )
}

const App: React.FC = () => {
  const [showHome, setShowHome] = React.useState(true);
  return (
    <div className="App">
      <div className="phone-shell">
        <div className="phone-background">
          <div className="phone-apps">
            <div className="phone-home-row"></div>
            <button title="Message" className="phone-message-app">
              <FaFacebookMessenger
                style={{
                  color: "white",
                  fontSize: "2rem",
                  position: "absolute",
                  top: "0.5rem",
                  left: "0.5rem",
                }}
                />
            </button>
            <button title="Call" className="phone-call-app">
              <FaPhone
                style={{
                  color: "white",
                  fontSize: "2rem",
                  position: "absolute",
                  top: "0.5rem",
                  left: "0.5rem",
                }}
              />
            </button>
            <button title="Contacts" className="phone-contacts-app">
              <FaUserFriends
                style={{
                  color: "white",
                  fontSize: "2rem",
                  position: "absolute",
                  top: "0.5rem",
                  left: "0.5rem",
                }}
              />
            </button>
            </div>
            <button title="Chrome" className="phone-chrome-app">
              <FaChrome
                style={{
                  color: "white",
                  fontSize: "2rem",
                  position: "absolute",
                  top: "0.5rem",
                  left: "0.5rem",
                }}
              />
            </button>
            <button title="Calculator" className="phone-calc-app">
              <FaCalculator
                style={{
                  color: "white",
                  fontSize: "2rem",
                  position: "absolute",
                  top: "0.5rem",
                  left: "0.5rem",
                }}
              />
            </button>
            <button title="App Store" className="phone-appstore-app">
              <FaAppStoreIos
                style={{
                  color: "white",
                  fontSize: "2rem",
                  position: "absolute",
                  top: "0.5rem",
                  left: "0.5rem",
                }}
              />
            </button>
            <button title="Tiktok" className="phone-tiktok-app">
              <FaTiktok
                style={{
                  color: "white",
                  fontSize: "2rem",
                  position: "absolute",
                  top: "0.5rem",
                  left: "0.5rem",
                }}
              />
            </button>
            <button title="Spotify" className="phone-spotiy-app">
              <FaSpotify
                style={{
                  color: "green",
                  fontSize: "2rem",
                  position: "absolute",
                  top: "0.5rem",
                  left: "0.5rem",
                }}
              />
            </button>
          </div>
        </div>
        <Home
          show={showHome}
          onHome={() => setShowHome(true)}
          message="Hello World"
        />
      </div>
  );
};

export default App;