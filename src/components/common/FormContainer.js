import React, { Component } from 'react';

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
    };
  }
  render() {
    return (
      <form id="common-form">
      </form>
    );
  }
}
export default FormContainer;