import React from 'react';
import logo from './logo.svg';
import { Component } from "react";
import GIPHY from './Giphy'
import './App.css';


class App extends Component {
  
  render() {
    return (
      <>
      <div class="mainDiv">
        <GIPHY/> 
      </div>
      </>
    );
  }
}
export default App;


