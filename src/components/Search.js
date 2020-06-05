import React, {Component} from "react"
import GIPHY from "./Giphy";


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {word: "", search: false}
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            word: e.target.value,
            search: false
        })
    }

    onSubmit = (e) =>  {
        e.preventDefault()  
        if (this.state.word !== null) {
            this.setState({search:true});

        }
    }

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
            <form>
              <input
                type="text"
                placeholder="Search.."
                onChange={this.handleChange}
              ></input>
              <button type="submit" onClick={this.onSubmit}>
                Search
              </button>
            </form>
            <GIPHY word={this.state.word} search={this.state.search}/>
          </>
        );
    }
}

export default Search;