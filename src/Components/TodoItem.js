import React, { Component } from 'react';
import propTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()} id="todoDiv">
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} id="del">
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
  markComplete: propTypes.func.isRequired,
  delTodo: propTypes.func.isRequired,
};

export default TodoItem;
