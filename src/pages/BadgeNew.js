import React from "react";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import "../components/styles/BadgeNew.css";

class BadgeNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        jobtitle: "",
        twitter: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Hero" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstname}
                lastName={this.state.form.lastname}
                jobTitle={this.state.form.jobtitle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
                avatar="https://avatars3.githubusercontent.com/u/65572735?s=460&u=5faf4363dbcd5f269271410fff4e5c1045ffc5f1&v=4"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
