import React from "react";
import "../components/styles/BadgesList.css";
class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <div className="Badges___list">
              <li key={badge.id}>
                <img src="{badge.avatarUrl}" alt="Imagen de Badge" />
                <p>
                  {badge.firstName} {badge.lastName}
                </p>
                <span className="Twitter__logo">@{badge.twitter}</span>
                <p>{badge.jobTitle}</p>
              </li>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
