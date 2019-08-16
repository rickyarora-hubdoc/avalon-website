import React, { Component } from "react";
class Stats extends Component {
  constructor() {
    super();
    this.state = {
      // names: "",
    };
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
      .then(data =>  this.setState({names: data}));
  }

  render() {
    const names = this.state.names

    return (
      <div>
        Loaded Stats Div
          {this.state.names ? names.map(function(name, index){
                    return <div key={ index }>{name.username}</div>;
          }) : ""}
      </div>
    );
  }
}

export default Stats;