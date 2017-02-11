import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { cardList } from './TypesAndDefaults'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      card: '',
    }
  }
  
  render() {
    return (
      <div className="App ochlapus">
        <div className="card--data">
          <ul className="card-list">
            {cardList.map((card, index) =>
              <li key={index} className="card-list--item">
                <span className="card-list--item--name">{card.name}</span>
                <span className="card-list--item--picture">{card.picture}</span>
                <span className="card-list--item--effect">{card.effect}</span>
                <span className="card-list--item--description">{card.description}</span>
                <span className="card-list--item--filter">{card.filter}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
