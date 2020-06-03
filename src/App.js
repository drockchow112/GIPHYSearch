import React from 'react';
import logo from './logo.svg';
import Decrement from './Decrement';
import { Component } from "react";
import './App.css';

class App extends Component {
  render() {
    return (
      <>
       <Decrement number={5}/>
      </>
    );
  }
}
export default App;


