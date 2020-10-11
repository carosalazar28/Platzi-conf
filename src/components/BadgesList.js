import React from "react";
import { Link } from "react-router-dom";
import logoTw from "../images/gorjeo.svg";
import Gravatar from './Gravatar'
import "../components/styles/BadgesList.css";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('')

  const [filteredBadges, setFilteredBadges] = React.useState(badges)

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return  `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
    })

    setFilteredBadges(result)
  }, [badges, query])

  return {query, setQuery, filteredBadges}
}

function BadgesList (props) {
  const badges = props.badges 

  const {query, setQuery, filteredBadges} = useSearchBadges(badges)

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-gruop mb-4">
          <label htmlFor="">Filter Badges</label>
          <input type="text" className='form-control'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
             }}
          />
        </div>
        <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }
  return (
    <React.Fragment>
      <div className="form-gruop mb-4">
        <label htmlFor="">Filter Badges</label>
        <input type="text" className='form-control'
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
        }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
        return (
          <li key={badge.id}>
            <div className="Badges___list">
              <div className="Badges___list-container">
                <Link to={`/badges/${badge.id}`} 
                className="btn btn-primary" >
                  Edit
                </Link>
                <div className="Badges___list-img">
                <Gravatar
                  className="rounded-circle"
                  email={badge.email}
                  alt="Avatar"
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

export default BadgesList;
