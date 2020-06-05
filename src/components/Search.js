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

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.word !== null) {
      this.setState({ search: true });
    }
  };

  // showGIPHY()  {
  //     if (this.state.search === true) {
  //         return (
  //             <GIPHY word = {this.state.word}/>
  //         )
  //     }
  // }

  render() {
    return (
      <>
        <form className="App">
          <input
            type="text"
            placeholder="Search.."
            name="word"
            onChange={this.handleChange}
          ></input>
          <input
            type="number"
            placeholder="Limit"
            name="limit"
            onChange={this.handleChange}
          />
          {/* <input
            type="checkbox"
            name="g"
            onChange={this.handleChange}
            checked
          /> */}
          {/* <label for="g">G</label> */}
          {/* <input type="checkbox" name="pg" onChange={this.handleChange} />
          <label for="pg">PG</label>
          <input type="checkbox" name="pg-13" onChange={this.handleChange} />
          <label for="pg-13">PG-13</label>
          <input type="checkbox" name="r" onChange={this.handleChange} />
          <label for="r">R</label> */}
          <button type="submit" onClick={this.onSubmit}>
            Search
          </button>
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
