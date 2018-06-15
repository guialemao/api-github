import React, { Component } from 'react';
import styled from 'styled-components';

import ShowInfo from './ShowInfo';

const Avatar = styled.div`
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
  color: red;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style-type: none;
  margin-left: 50px;
  &:first-child {
    margin-left: 0;
  }

`;

class ShowProfile extends Component {
  render() {
    const { name, login, avatar, followers_url, followers, following_url, following, repos_url, public_repos } = this.props.passUser;
    
    return (
      <div
        style={{
          margin: '0 auto', 
          width: "500px",
        }}
      >
        <Avatar>
          <img src={avatar} alt="" />
        </Avatar>
        <a 
          href={`https://github.com/${login}`}
          target='_blank'
          style={{
            color: 'red',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: '20px',
            textDecoration: 'none',
          }}
        >
          <strong>{name ? name : ''}</strong> {login ? `(${login})` : ''}
        </a>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <ProfileInfo>
            <li url={repos_url}>
              {public_repos}
              <strong>repositories</strong>
            </li>
            <li url={followers_url}>
              {followers}
              <strong>followers</strong>
            </li>
            <li href={following_url}>
              {following}
              <strong>following</strong>
            </li>
          </ProfileInfo>
        </div>
        <div>
          <ShowInfo user={login} />
        </div>
      </div>
    )
  }
}

export default ShowProfile;
