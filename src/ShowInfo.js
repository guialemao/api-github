import React, { Component } from 'react';
import styled from 'styled-components';

const InfoList = styled.ul`
  border-top: 1px solid #ccc;
  padding-top: 20px;
  text-align: left;

  li {
    font-size: 14px;
    margin-bottom: 10px;

    a {
      align-items: center;
      color: #24292e;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      font-weight: bold;
      max-width: 360px;
    }
  }
`;

class ShowInfo extends Component {

  render() {
    return(
      <InfoList
        style={{
          textAlign: 'left',
        }}
      >
        {this.props.template}
      </InfoList>
    )
  }
}

export default ShowInfo;
