// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount = () => {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(item => ({
      name: item.name,
      id: item.id,
      teamImageUrl: item.team_image_url,
    }))
    this.setState({teamsList: updatedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="ipl-home-container">
          <div className="logo-and-name-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo-image"
            />
            <h1 className="ipl-heading">IPL DASHBOARD</h1>
          </div>
          <ul className="team-card-container">
            {isLoading ? (
              <div testid="loader" className="loader-logo">
                <Loader type="Oval" color="#ffffff" height={50} width={50} />
              </div>
            ) : (
              teamsList.map(item => <TeamCard teamCard={item} key={item.id} />)
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
