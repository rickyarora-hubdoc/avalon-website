import React, { Component } from "react";
class Stats extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      sent: false
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange = name => event => {
  //   this.setState({
  //     [name]: event.target.value
  //   });
  // };

  // handleSubmit(event) {
  //   event.preventDefault();
  //   console.log(this.state);

  //   if (this.state.sent === false) {
  //     fetch("http://localhost:3001/1", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(this.state)
  //     }).then(function() {
  //       return;
  //     });
  //   }
  // }

  componentDidMount() {
    fetch('http://localhost:3001/api/players')
      .then(response => response.json())
      .then(data => console.log('data response', data));
    // fetch("http://localhost:3001/api/players", {
    //     method: "GET",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(this.state)
    //   }).then(function() {
    //     return;
    //   });
    }

  render() {
    return (
      <div>
        Loaded Stats Div
      </div>
    );
  }
}

export default Stats;