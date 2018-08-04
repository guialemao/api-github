import React, { Component } from 'react';
import './App.css';

import Form from './Form';
import ShowProfile from './ShowProfile';
import { Wrapper } from './style';

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
        console.log(result)
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
      <Wrapper>
        <h1
          style={{
            backgroundColor: '#24292e',
            color: '#fff',
            marginTop: '0',
            padding: '20px 0',
            textAlign: 'center',
          }}
        >
          Integration with GitHub API
          </h1>
        <Form getUserFromInput={this.handleData} />
        { this.state.user !== '' ? <ShowProfile passUser={this.state} /> : ''}
      </Wrapper>
    );
  }
}

export default App;
