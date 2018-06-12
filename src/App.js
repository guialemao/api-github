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

    fetch(`https://api.github.com/users/${data}`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          ...this.state,
          id: result.id,
          avatar: result.avatar_url,
          login: result.login,
          name: result.name,
          repos: result.repos_url,
          public_repos: result.public_repos,
          followers_url: result.followers_url,
        })
        console.log(result)
      }
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Type your Github user :D</h1>
        <Form getUserFromInput={this.handleData} />
        <ShowProfile passUser={this.state} />
      </div>
    );
  }
}

export default App;
