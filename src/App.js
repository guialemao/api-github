import React, { Component } from 'react';
import './App.css';

import Form from './Form';
import ShowProfile from './ShowProfile';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
    }

    this.handleData = this.handleData.bind(this);
  }

  handleData(data) {
    this.setState({
      user: data,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Type your Github user :D</h1>
        <Form getUserFromInput={this.handleData} />
        <ShowProfile passUser={this.state.user} />
      </div>
    );
  }
}

export default App;
