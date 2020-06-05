import React, { Component } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

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
    const urlTrending = `http://api.giphy.com/v1/gifs/trending?&api_key=${API_KEY}`;

    if (this.state.search === false) {
      axios
        .get(urlTrending, { api_key: API_KEY })
        .then((response) => {
          const giphies = response.data.data;
          this.setState({ word: this.props.word, giphies });
        })
        .catch((err) => console.log(err));
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.word !== this.props.word ||
      prevProps.limit !== this.props.limit
    ) {
      let limit = this.props.limit;
      let word = this.props.word;

      const urlSearch = `http://api.giphy.com/v1/gifs/search?q=${word}&limit=${limit}&api_key=${API_KEY}`;
      axios
        .get(urlSearch, { api_key: API_KEY })
        .then((response) => {
          const giphies = response.data.data;
          console.log(giphies);
          this.setState({ word: this.props.word, giphies });
        })
        .catch((err) => console.log(err));
    }
  }

  handleChange = (e) => {
    this.setState({ word: e.target.value });
  };

  render() {
    return (
      <div class="row">
        {this.state.giphies.map((giph) => (
          <div className="gif">
            <img src={giph.images.fixed_height_small.url}></img>
          </div>
        ))}
      </div>
    );
  }
}

export default GIPHY;
