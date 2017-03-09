import React from 'react'
import PickerComponent from '../components/PickerComponent'
// import actions from '../stores/actions'

export class PickerCollectionContainer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        Pickers: [1,2,3,4,5],
        races: [
            'Elf',
            'Dwarf',
            'Human',
            'Gnome',
        ],
        chosenRace: '',
        characterName: '',    
      }
    }
    
    handleRaceChange(race) {
      
        console.log(race)
        // this.setState({
        // chosenRace: race
        // });
    }

    render() {
      return (
        <div className='container'>
          {this.state.Pickers.map((value, index) =>
            <PickerComponent picker={value} handleRaceChange={this.handleRaceChange} key={index} races={this.state.races}/>            
          )}
        </div>
     )
   }
}
