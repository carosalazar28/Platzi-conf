import React from "react";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <img src="{badge.avatar}" alt="Imagen de Badge" />
              <p>
                {badge.firstName} {badge.lastName}
              </p>
              <span className="Twitter__logo">@{badge.twitter}</span>
              <p>{badge.jobTitle}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
