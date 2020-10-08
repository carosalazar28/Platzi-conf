import React from "react";
import { Link } from "react-router-dom";
import AstronautsError from "../images/astronautsError.svg";
import "./styles/NotFound.css";

function PageError(props) {
  return (
    <React.Fragment>
      <div className="Error500___container">
        <div className="Error500___container-left">
          <div className="Error500___container-content">
            <h1>500</h1>
            <h3>Internal Server Error</h3>
            <p>Return to Home</p>
          </div>
          <div className="Error500__buttons">
            <Link to="/" className="btn btn-primary">
              Home
            </Link>
          </div>
        </div>
        <div className="Error500___container-right">
          <img
            src={AstronautsError}
            alt="Imagen de astronautas logo de platzi conf"
            className="Error500___image"
          ></img>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PageError;
