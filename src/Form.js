import React, { Component } from 'react';

class Form extends Component {

  someFn = () => {
    const teste = this.refs.userInput.value;
    this.props.getUserFromInput(teste);
  }

  render() {
    return (
      <form>
        <input ref="userInput" type="text" onChange={this.props.getUserFromInput} />
        <button>Search</button>
      </form>
    )
  }
}

export default Form;