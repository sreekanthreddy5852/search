import {Component} from 'react'
import DestinationSearch from '../DestinationSearch'
import './index.css'

class DestinationItem extends Component {
  state = {searchInput: '', listDetails: destinationsList}

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  updateSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, listDetails} = this.state
    const searchResults = listDetails.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <h1 className="head">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            placeholder="search"
            value={searchInput}
            onClick={this.updateSearchInput}
            className="search-input"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            classname="search-icon"
            alt="search icon"
          />
        </div>
        <ul className="list-container">
          {searchResults.map(each => (
            <DestinationSearch
              key={each.id}
              searchDetails={each}
            ></DestinationSearch>
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationItem
