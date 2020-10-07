import React from "react";
import { Link } from "react-router-dom";
import AstronautsNotFound from "../images/notfound.svg";
import "../components/styles/NotFound.css";

function NotFound() {
  return (
    <React.Fragment>
      <div className="Error404___container">
        <div className="Error404___container-left">
          <div className="Error404___container-content">
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <p>Return to Home</p>
          </div>
          <div className="Error404__buttons">
            <Link to="/" className="btn btn-primary">
              Home
            </Link>
          </div>
        </div>
        <div className="Error404___container-right">
          <img
            src={AstronautsNotFound}
            alt="Imagen de astronautas logo de platzi conf"
            className="Error404___image"
          ></img>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
