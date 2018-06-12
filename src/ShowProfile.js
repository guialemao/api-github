import React, { Component } from 'react';
import styled from 'styled-components';

const Avatar = styled.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

class ShowProfile extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.passUser.name}</h1>
        <h2>{this.props.passUser.login}</h2>
        <Avatar>
          <img
            src={this.props.passUser.avatar} alt=""
            style={{
              height: '80px',
              width: '80px',
              overflow: 'hidden',
            }}
          />
        </Avatar>
        <a href={this.props.passUser.followers_url} target="_blank">{this.props.passUser.followers_url}</a>
      </div>
    )
  }
}

export default ShowProfile;