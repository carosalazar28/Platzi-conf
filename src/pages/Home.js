import React from "react";
import { Link } from "react-router-dom";
import LogoPlatziConf from "../images/platziconf-logo.svg";
import Astronauts from "../images/astronauts.svg";
import "../components/styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Home___container">
          <div className="Home___container-left">
            <div className="Home___container-content">
              <img src={LogoPlatziConf} alt="Logo de platzi conf"></img>
              <h2>PRINT YOUR BADGES</h2>
              <p>The easiest way to manage you conference</p>
            </div>
            <div className="Home__buttons">
              <Link to="/badges" className="btn btn-primary">
                Start now
              </Link>
            </div>
          </div>
          <div className="Home___container-right">
            <img
              src={Astronauts}
              alt="Imagen de astronautas logo de platzi conf"
              className="Home___image"
            ></img>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
