import React, { Component } from 'react';

import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #ccc;
  height: 40px;
  margin-right: 10px;
  padding: 0 15px;
  width: 250px;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #ccc;
  cursor: pointer;
  height: 40px;
`;

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  submitHandler(evt) {
    evt.preventDefault();
    this.props.getUserFromInput(this.state.value);

    this.setState({
      value: '',
    })
  }

  render() {
    return (
      <form
        onSubmit={this.submitHandler}
        style={{
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            marginBottom: '15px',
          }}
        >
          Type your Github login
        </h2>
        <Input type="text" value={this.state.value} onChange={this.handleChange} />
        <Button type="submit" disabled={this.state.value === '' ? true : false} >Search </Button>
      </form>
    )
  }
}

export default Form;
