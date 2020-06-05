import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";

class GIPHY extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.props.word,
      giphies: [],
      search: this.props.search,
      limit: this.props.limit
    };
  }

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const urlTrending = `http://api.giphy.com/v1/gifs/trending?&api_key=${API_KEY}`;

    if (this.state.search === false) {
      axios
        .get(urlTrending, { api_key: API_KEY })
        .then(response => {
          // const giphy = this.props.giphy;
          const giphies = response.data.data;
          console.log(giphies);
          this.setState({ word: this.props.word, giphies });
        })
        .catch(err => console.log(err));
    }
  }

  componentDidUpdate(prevProps) {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const urlSearch = `http://api.giphy.com/v1/gifs/search?q=${this.state.word}&api_key=${API_KEY}`;
    const urlTrending = `http://api.giphy.com/v1/gifs/trending?&api_key=${API_KEY}`;

    // if (prevProps.search === this.props.search) {
    //   axios
    //     .get(urlTrending, { api_key: API_KEY })
    //     .then(response => {
    //       // const giphy = this.props.giphy;
    //       const giphies = response.data.data;
    //       console.log(giphies);
    //       this.setState({ word: this.props.word, giphies });
    //     })
    //     .catch(err => console.log(err));
    // }

    if (
      prevProps.word !== this.props.word ||
      prevProps.limit !== this.props.limit
    ) {
      let limit = this.props.limit;
      let word = this.props.word;
      axios
        .get(
          `http://api.giphy.com/v1/gifs/search?q=${word}&limit=${limit}&api_key=${API_KEY}`,
          { api_key: API_KEY }
        )
        .then(response => {
          // const giphy = this.props.giphy;
          const giphies = response.data.data;
          console.log(giphies);
          this.setState({ word: this.props.word, giphies });
        })
        .catch(err => console.log(err));
    }
  }

  handleChange = e => {
    this.setState({ word: e.target.value });
  };

  render() {
    return (
      <div>
        {/* <img src={this.state.giphies[0].images[0].downsized_large.url}/> */}

        {this.state.giphies.map(giph => (
          <li>
            <p>{giph.id}</p>
            <img src={giph.images.fixed_height_small.url}></img>
          </li>
        ))}
      </div>
    );
  }
}

export default GIPHY;
