import React, { Component } from 'react';

class ShowInfo extends Component {

  render() {
    return(
      <h1>{this.props.user}</h1>
    )
  }
}

export default ShowInfo;
