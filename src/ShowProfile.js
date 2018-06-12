import React, { Component } from 'react';
import styled from 'styled-components';

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

const Link = styled.a`
color: red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 50px;
  text-decoration: none;
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
          <Link href={repos_url} target="_blank">
            {public_repos}
            <strong>repositories</strong>
          </Link>
          <Link href={followers_url} target="_blank">
            {followers}
            <strong>followers</strong>
          </Link>
          <Link href={following_url} target="_blank">
            {following}
            <strong>following</strong>
          </Link>
        </div>
      </div>
    )
  }
}

export default ShowProfile;
