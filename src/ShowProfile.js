import React, { Component } from 'react';

class ShowProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
    }
    console.log(props)
  }

  render() {
    return (
      <h1>{this.props.passUser}</h1>
    )
  }
}

export default ShowProfile;