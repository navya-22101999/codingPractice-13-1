import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]
class Capitals extends Component {
  state = {
    initialState: countryAndCapitalsList[0].id,
  }

  onChangeSelectValue = event => {
    this.setState({initialState: event.target.value})
  }

  getCountry = () => {
    const {initialState} = this.state
    const countryName = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === initialState,
    )
    return countryName.country
  }

  render() {
    const {initialState} = this.state
    const country = this.getCountry(initialState)
    return (
      <div className="main-container">
        <div className="card-container">
          <h1>Countries And Capitals</h1>
          <div>
            <select
              id="option"
              className="option"
              onChange={this.onChangeSelectValue}
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="option">
              <p>is capital of which country</p>{' '}
            </label>
          </div>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
