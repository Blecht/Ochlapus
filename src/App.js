import React, { Component } from 'react' 
import { PickerCollectionContainer } from './containers/PickerCollectionContainer'  
import './App.css';
import { connect } from 'react-redux'

connect((store) =>{
  return {

  };
})
export default class App extends Component {   
  render() {     
    return (
    <PickerCollectionContainer/>     
    )   
  } 
}