import React from "react";
import { Component } from "react";
import Search from "./components/Search";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <h1>GIPHY Search</h1>
          <Search />
        </div>
      </>
    );
  }
}
export default App;
