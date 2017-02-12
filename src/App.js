import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { cardList } from './TypesAndDefaults'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchFilter: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="App-ochlapus">
        <div className="card--data">
         <div className="card--filter">
          <div className="card--filter-input">
            <input className="filter-input" type="text" name="searchFilter" placeholder="Add filter..." value={this.state.searchFilter} onChange={this.handleInputChange}/>
          </div>
         </div> 
          <ul className="cardList">
            {cardList.map((card, index) =>
              <li key={index} className="cardList--item">
                <span className="cardList--item--name">{card.name}</span>
                <img src={ logo } className="cardList--item--picture" alt="logo" />
                <span className="cardList--item--effect">{card.effect}</span>
                <span className="cardList--item--description">{card.description}</span>
                <span className="cardList--item--filter">{card.filter}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
