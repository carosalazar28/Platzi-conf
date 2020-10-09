import React from "react";
import { Link } from "react-router-dom";
import logoTw from "../images/gorjeo.svg";
import "../components/styles/BadgesList.css";
class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <React.Fragment>
        <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <div className="Badges___list">
                <div className="Badges___list-container">
                  <div className="Badges___list-img">
                    <img
                      className="rounded-circle"
                      src={badge.avatarUrl}
                      alt="Imagen de Badge"
                    />
                  </div>
                  <div className="Badges___list-description">
                    <p className="Badges___list-name">
                      {badge.firstName} {badge.lastName}
                    </p>
                    <img
                      className="Badges___list-logoTw"
                      src={logoTw}
                      alt="logo de twitter"
                    ></img>
                    <span className="twitter__blue_font">@{badge.twitter}</span>
                    <p className="Badges__jobtitle">{badge.jobTitle}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      </React.Fragment>
    );
  }
}

export default BadgesList;
