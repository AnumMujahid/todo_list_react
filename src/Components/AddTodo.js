import React, { Component } from 'react';
import propTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: '',
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };
  render() {
    return (
      <form action="#" style={{ display: 'flex' }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          id=""
          placeholder="Add Todo ..."
          style={{ flex: '10', padding: '5px' }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}
AddTodo.propTypes = {
  addTodo: propTypes.func.isRequired,
};
export default AddTodo;