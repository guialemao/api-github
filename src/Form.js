import React, { Component } from 'react';

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
        }}
      >
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default Form;
