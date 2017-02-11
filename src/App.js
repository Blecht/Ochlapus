import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { cardList } from './TypesAndDefaults'

class App extends Component {
  render() {
    return (
      <div className="App-ochlapus">
        <div className="card--data">
          <ul className="card-list">
            {cardList.map((card, index) =>
              <li key={index} className="card-list--item">
                <span className="card-list--item--name">{card.name}</span>
                <img src={ logo } className="card-list--item--picture" alt="logo" />
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
