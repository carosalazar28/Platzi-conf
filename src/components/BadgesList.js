import React from "react";
import logoTw from "../images/gorjeo.svg";
import "../components/styles/BadgesList.css";
class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <div className="Badges___list">
              <li key={badge.id}>
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
              </li>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
