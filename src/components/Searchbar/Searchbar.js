import React, { Component } from "react";
import "./Searchbar.css";
import Message from "../Message/Message";

class Searchbar extends Component {
  state = { clicked: false, searchValue: "what you need", message: "" };

  getInput = event => {
    const message = event.target.value;
    this.setState({ searchValue: message, message: message });
  };

  toggleMessage = () => {
    this.state.clicked
      ? this.setState({
          clicked: false,
          searchValue: "what you need",
          message: ""
        })
      : this.setState({ clicked: true });
  };

  render() {
    return (
      <div className="container">
        <div className="box">
          <h1 className="title">Search for a car:</h1>
          <input
            className="search"
            type="text"
            placeholder="Which car would you like to drive?"
            onChange={this.getInput}
            value={this.state.message}
          />
          <button className="btn" onClick={this.toggleMessage}>
            Go!
          </button>
          {this.state.clicked ? <Message name={this.state.searchValue} /> : ""}
        </div>
      </div>
    );
  }
}

export default Searchbar;
