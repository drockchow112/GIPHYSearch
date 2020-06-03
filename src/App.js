import React from 'react';
import logo from './logo.svg';
import ContactCard from './ContactCard';
import { Component } from "react";
import './App.css';

class App extends Component {
  render() {
    return (
      <>
       <ContactCard name="John" 
        mobile="5346782345" 
        work="5437862356" 
        email="john@gmail.com"
        />
      </>
    );
  }
}
export default App;


