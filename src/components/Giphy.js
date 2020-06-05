import React, { Component } from "react";
import axios from "axios"
import Search from "./Search"

class GIPHY extends Component {
    constructor(props) {
      super(props);
      this.state = {word: this.props.word, giphies:[]};
    }
  
    componentDidMount() {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const urlTrending = `http://api.giphy.com/v1/gifs/search?q=${this.state.word}api_key=${API_KEY}`;
  
      axios.get(urlTrending, { api_key: API_KEY }).then((response) => {
          // const giphy = this.props.giphy;
          const giphies = response.data.data
          console.log(giphies)
          this.setState({giphies})
      }).catch((err) => console.log(err));
    }

    handleChange = (e) => {
      this.setState({word: e.target.value });
    };

    render() {
      

      return (
        <div> 
          <Search/>
          {/* <img src={this.state.giphies[0].images[0].downsized_large.url}/> */}

            {this.state.giphies.map((giph) => (
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