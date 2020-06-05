import React from 'react';
import logo from './logo.svg';
import { Component } from "react";
import GIPHY from './components/Giphy'
import Search from "./components/Search"
import './App.css';


class App extends Component {
  
  render() {
    return (
      <>
      <div class="mainDiv">
        <Search/>
        
      </div>
      </>
    );
  }
}
export default App;


