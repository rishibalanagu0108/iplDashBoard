// Write your code here

import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamCard} = this.props
    const {id, name, teamImageUrl} = teamCard
    return (
      <Link to={`/team-matches/${id}`} className="item-link">
        <li className="team-card-item">
          <img src={teamImageUrl} alt={name} className="team-image" />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
