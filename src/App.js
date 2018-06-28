import React, { Component } from 'react';
import './App.css';

import Form from './Form';
import ShowProfile from './ShowProfile';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      userNotFound: false,
    }

    this.handleData = this.handleData.bind(this);
  }

  handleData(data) {
    this.setState({
      user: data,
    })

    fetch(`https://api.github.com/users/${data}`, {
      headers: {
        'Authorization': `Basic ${btoa('guialemao:')}`
      }
    })
    .then(
      res => {
        if(res.ok) {
          return res.json();
        } else {
          throw Error('User not found!!!!!');
        }
      }
    )
    .then(
      (result) => {
        this.setState({
          ...this.state,
          id: result.id,
          avatar: result.avatar_url,
          login: result.login,
          name: result.name,
          repos_url: result.repos_url,
          public_repos: result.public_repos,
          followers: result.followers,
          followers_url: result.followers_url,
          following: result.following,
          following_url: result.following_url,
          userNotFound: false,
        })
      }
    )
    .catch(
      error => {
        this.setState({
          error,
          userNotFound: true,
        })
      }
    );
  }

  render() {
    return (
      <div
        className="App"
        style={{
          margin: '0 auto',
          width: "960px",
        }}
      >
        <h1
          style={{
            backgroundColor: '#24292e',
            color: '#fff',
            marginTop: '0',
            padding: '20px 0',
          }}
        >
          Integration with GitHub API
          </h1>
        <Form getUserFromInput={this.handleData} />
        { this.state.user !== '' ? <ShowProfile passUser={this.state} /> : ''}
      </div>
    );
  }
}

export default App;
