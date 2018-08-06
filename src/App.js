import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import ShowProfile from './components/ShowProfile';
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

    fetch(`https://api.github.com/users/${data}`)
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
          type: result.type,
          name: result.name,
          login: result.login,
          avatar: result.avatar_url,
          bio: result.bio,
          blog: result.blog,
          email: result.email,
          company: result.company,
          location: result.location,
          repos_url: result.repos_url,
          starred_url: result.starred_url,
          public_gists: result.public_gists,
          public_repos: result.public_repos,
          followers: result.followers,
          following: result.following,
          error: false,
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
        <header>
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
        </header>
        <Form getUserFromInput={this.handleData} />
        { this.state.user !== '' ? <ShowProfile passUser={this.state} /> : ''}
      </Wrapper>
    );
  }
}

export default App;
