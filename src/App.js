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

       <ContactCard name="Peter" 
       mobile="3306350034" 
       work="5437866473" 
       email="peter@gmail.com"
      />

      <ContactCard name="Alex" 
       mobile="5346787790" 
       work="8097862356" 
       email="alex@gmail.com"
      />
      </>
    );
  }
}
export default App;


