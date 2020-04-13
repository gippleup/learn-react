import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todo extends Component {
  render() {
    return Object.keys(this.props.todos).map(userId => {
      let user = this.props.todos[userId];
      return Object.keys(user).map(todoId => {
        let todo = user[todoId]
        return <TodoItem key={todo.id} todo={todo} toggle={this.props.toggle} />
      })
    })
  }
}

// PropTypes
Todo.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default Todo