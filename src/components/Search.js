import React, { Component } from "react";
import GIPHY from "./Giphy";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { word: "", search: false, limit: 5 };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
      search: false
    });
  };

  render() {
    return (
      <>
        <form className="App">
          <input
            type="text"
            placeholder="Search.."
            name="word"
            onChange={this.handleChange}
            className="search-bar"
          ></input>
          <br></br>
          <input
            type="number"
            placeholder="Limit"
            name="limit"
            onChange={this.handleChange}
            className="limit"
          />
        </form>
        <GIPHY
          word={this.state.word}
          search={this.state.search}
          limit={this.state.limit}
        />
      </>
    );
  }
}

export default Search;
