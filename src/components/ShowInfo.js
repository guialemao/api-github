import React from 'react';
import styled from 'styled-components';

const InfoList = styled.ul`
  border-top: 1px solid #ccc;
  text-align: left;

  li {
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    margin-bottom: 10px;
    padding: 20px; 

    a {
      color: #24292e;
      display: block;
      text-decoration: none;

      p {
        line-height: 120%;
        margin-bottom: 5px;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ShowInfo = (props) => {
  return(
    <InfoList
      style={{
        textAlign: 'left',
      }}
    >
      {props.template}
    </InfoList>
  )
}

export default ShowInfo;
