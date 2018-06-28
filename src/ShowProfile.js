import React, { Component } from 'react';
import styled from 'styled-components';

import ShowInfo from './ShowInfo';

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

const ProfileInfo = styled.ul`
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

    strong {
      margin-left: 5px;
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

    fetch(urlFinal[0], {
      headers: {
        'Authorization': `Basic ${btoa('guialemao:')}`
      }
    })
    .then(res => res.json())
    .then(
      (result) => {
        if (urlFinal[0].split('/')[5] === 'repos') {
          const repos = result.map(x => {
            return (
              <li key={x.id}>
                <a href={x.html_url} target='_blank'>
                  {x.full_name}
                  <span
                    style={{
                      marginLeft: '10px',
                    }}
                  >
                    &#10032; {x.stargazers_count}
                  </span>
                </a>
              </li>
            );
          });
          this.setState({
            template: repos,
          })
        } else {
          const userFriends = result.map(x => {
            return (
              <li key={x.id}>
                <a href={x.html_url} target='_blank'>
                  <Avatar
                    style={{
                      height: '50px',
                      margin: '0',
                      width: '50px',
                    }}
                  >
                    <img src={x.avatar_url} alt=""/>
                  </Avatar>
                  <strong
                    style={{
                      marginLeft: '10px',
                    }}
                  >
                    {x.login}
                  </strong>
                </a>
              </li>
            );
          });
          this.setState({
            template: userFriends,
          })
        }
      }
    );

    this.setState({
      template: '',
    })
  }

  render() {
    console.log(this.state)
    const {
      name,
      login,
      avatar,
      followers_url,
      followers,
      following_url,
      following,
      repos_url,
      public_repos,
      userNotFound
    } = this.props.passUser;

    if(userNotFound) {
      return (
        <div>
          <strong
            style={{
              color: '#fff',
              fontSize: '20px',
              fontStyle: 'italic',
              textShadow: '1px 1px 5px #f00',
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
              flexDirection: 'column',
              justifyContent: 'center',
              marginBottom: '50px',
              textDecoration: 'none',
            }}
          >
            <strong>{name ? name : ''}</strong> {login ? `(${login})` : ''}
          </a>
          <div>
            <ProfileInfo>
              <li onClick={() => this.handleUrl(repos_url)}>
                {public_repos}
                <strong>repositories</strong>
              </li>
              <li onClick={() => this.handleUrl(followers_url)}>
                {followers}
                <strong>followers</strong>
              </li>
              <li onClick={() => this.handleUrl(following_url)}>
                {following}
                <strong>following</strong>
              </li>
            </ProfileInfo>
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
