import React, { Component } from "react";
import axios from "axios";

class GIPHY extends Component {
    constructor(props) {
      super(props);
      this.state = {giphy: "", giphies: []};
    }
  
    componentDidMount() {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const urlTrending = "http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}";
  
      axios.get(urlTrending, { api_key: API_KEY }).then((response) => {
          const giphy = this.props.giphy
          const giphies = response.data.data
          console.log(giphies)
          this.setState({giphy, giphies})
      }).catch((err) => console.log(err));
    }

    handleChange = (e) => {
      this.setState({giphy: e.target.value });
    };

    render() {
      let display 

      return (
        <div>
          <form>
            <input type="text" placeholder="Search.." onChange={this.handleChange}></input>
            <button type="submit" >Search</button>
          </form>

            {this.state.giphies.map((giph) => (
                <li>
                    <p>{giph.na}</p>
                    <img src={giph.url} ></img>
                </li>
            ))}

        </div>
      );
    }
  }

  export default GIPHY