import React, { Component } from 'react';
import styled from 'styled-components';

import ShowInfo from './ShowInfo';

const ProfileInfo = styled.div`
  margin: 0 auto 50px;
  width: 300px;

  p {
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    line-height: 120%;
    padding: 10px;
  }
`;

const Avatar = styled.div`
  border: 1px solid #ccc;
  border-radius: 50%;
  height: 80px;
  margin: 0 auto 20px auto;
  width: 80px;

  img {
    border-radius: 50%;
    display: block;
    height: 100%;
    width: 100%;
    overflow: hidden;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const UserListage = styled.ul`
  color: #24292e;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  margin-bottom: 40px;
  margin-left: 50px;
  &:first-child {
    margin-left: 0;
  }

  li {
    margin-left: 20px;

    &:first-child {
      margin-left: 0;
    }

    button {
      background-color: #24292e;
      border: 1px solid #24292e;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
      font-size: 14px;
      margin-left: 5px;
      padding: 10px;
    }
  }
`;

class ShowProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      template: '',
    }
  }

  handleUrl(url) {
    const getUrl = url;
    const urlFinal = getUrl.split('{');

    fetch(urlFinal[0])
    .then(res => res.json())
    .then(
      (result) => {
        const repos = result.map(x => {
          return (
            <li key={x.id}>
              <a href={x.html_url} target='_blank'>
                <p>
                  <strong>Description</strong>: {x.description === null ? 'No description' : x.description}
                </p>
                <p><strong>Name</strong>: {x.name}</p>
                <p><strong>Owner</strong>: {x.owner.login}</p>
              </a>
            </li>
          );
        });
        this.setState({
          template: repos,
        })
      }
    );
    this.setState({
      template: '',
    })
  }

  render() {
    const {
      type,
      name,
      login,
      avatar,
      bio,
      blog,
      email,
      company,
      location,
      repos_url,
      starred_url,
      public_gists,
      public_repos,
      followers,
      following,
      userNotFound
    } = this.props.passUser;

    if(userNotFound) {
      return (
        <div>
          <strong
            style={{
              color: '#000',
              display: 'block',
              fontSize: '20px',
              textAlign: 'center',
            }}
          >
            Ops, user not found :(
          </strong>
        </div>  
      )
    } else {
      return (
        <div>
          <Avatar>
            <img src={avatar} alt="" />
          </Avatar>
          <a 
            href={`https://github.com/${login}`}
            target='_blank'
            style={{
              color: '#24292e',
              display: 'flex',
              alignItems: 'center', 
              flexDirection: 'column',
              justifyContent: 'center',
              marginBottom: '20px',
              textDecoration: 'none',
            }}
          >
            <strong>{name ? name : ''}</strong> {login ? `(${login})` : ''}
          </a>
          <ProfileInfo>
            <p><strong>Type:</strong> {type}</p>
            <p><strong>Company:</strong> {company}</p>
            <p><strong>Blog:</strong> {blog}</p>
            <p><strong>location:</strong> {location}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Bio:</strong> {bio}</p>
            <p><strong>Public Repos:</strong> {public_repos}</p>
            <p><strong>Public Gists:</strong> {public_gists}</p>
            <p><strong>Followers:</strong> {followers}</p>
            <p><strong>Following:</strong> {following}</p>
          </ProfileInfo>
          <div>
            <UserListage>
              <li onClick={() => this.handleUrl(repos_url)}>
                <button type="button">repos</button>
              </li>
              <li onClick={() => this.handleUrl(starred_url)}>
                <button type="button">starred</button>
              </li>
            </UserListage>
          </div>
          <div>
            <ShowInfo template={this.state.template} />
          </div>
        </div>
      )
    }
  }
}

export default ShowProfile;
