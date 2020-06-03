import React, { Component } from "react";

class ContactCard extends Component {
    render() {
        return (
          <div>
              <h1>{this.props.name}</h1>
              <ul>
                  <li>{this.props.mobile}</li>
                  <li>{this.props.work}</li>
                  <li>{this.props.email}</li>
              </ul>
          </div>
        );
      }
}

export default ContactCard