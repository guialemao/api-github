import React, { Component } from 'react';
import './App.css';

import Form from './Form'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
    }

    // this.updateUser = this.updateUser.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  // updateUser() {
  //   this.setState
  // }

  getUser(event) {
    event.preventDefault();
    console.log(event);
  }


  render() {
    return (
      <div className="App">
        <h1>Type your Github user :D</h1>
        <Form getUserFromInput={this.getUser} />
      </div>
    );
  }
}

export default App;
