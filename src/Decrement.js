import React, { Component } from "react";

class Decrement extends Component {
    render() {
        return (
        <div>
            {this.props.number}
            <button>decrement</button>
        </div>
        );
      }
}

export default Decrement