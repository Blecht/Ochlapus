import React, { Component } from 'react';
import beer from './../Beer.png';
import { cardList } from './../TypesAndDefaults'

class PickerComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
    race: '',
    characterName: '',      
    };

  this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App-ochlapus">
        <div className="card-data">
          <div className="characterName--section">
            <input className="characterName--section-input" type="text" name="characterName" placeholder="Name here" value={this.state.characterName} onChange={this.handleInputChange}/>
          </div>
          <div className="card--filter">            
            <form >
              <label>
                Add filter:
                <select value={this.state.value} onChange={this.props.handleRaceChange('test')} name="race">
                  <option defaultValue="None">None</option>
                  {this.props.races.map((race, index)=>
                  <option value={race}>{race}</option>
                  )}
                </select>
              </label>
            </form>
          </div>
          <ul className="cardList">
            {cardList.map((card, index) =>
              <li key={index} className="cardList--item">
                <span className="cardList--item--name">{card.name}</span>
                <img src={beer} className="cardList--item--picture" alt="logo"/>
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

PickerComponent.propTypes = {
    picker: React.PropTypes.number.isRequired,
    races: React.PropTypes.array.isRequired,
    chosenRace: React.PropTypes.string,
    chosenName: React.PropTypes.string,
    handleRaceChange: React.PropTypes.func.isRequired
};

export default PickerComponent
