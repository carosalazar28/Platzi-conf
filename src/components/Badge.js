import React from "react";
import confLogo from "../images/badge-header.svg";
import Gravatar from "./Gravatar";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo" />
        </div>
        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt="Avatar"
          />
          <h3>
            {this.props.firstName} <br /> {this.props.lastName}
          </h3>
        </div>
        <div className="Badge__section-info">
          <p>{this.props.jobTitle}</p>
          <p>@{this.props.twitter}</p>
        </div>
        <div className="Badge__footer">
          <div>#React</div>
        </div>
      </div>
    );
  }
}

export default Badge;
