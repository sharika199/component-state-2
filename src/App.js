import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const instailUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    userDetailsList: instailUserDetailsList,
  }

  onDeleteUser = uniqueNo => {
    const {userDetailsList} = this.state
    const filteredUserDetails = userDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({
      userDetailsList: filteredUserDetails,
    })
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, userDetailsList} = this.state
    console.log(searchInput)
    const seachResult = userDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <ul className="list-container">
          {seachResult.map(eachUser => (
            <UserProfile
              onDeleteUser={this.onDeleteUser}
              userDetails={eachUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
