import React, { Component } from 'react';

class TodoItem extends Component{
  state = {
    undoCounter: 0,
  }
  setStyle() {
    let completed = this.props.todo.completed
    return completed ?
      {
        color: 'darkGrey',
        backgroundColor: 'lightGrey',
        textDecoration: 'line-through'
      }:
      {
        color: 'black',
        backgroundColor: 'lightSalmon',
        textDecoration: 'none'
      }
  }
  get class() {
    return 'container text-left rounded py-2'
  }
  toggle = () => {
    if (this.props.todo.completed) {
      if (this.state.undoCounter < 3) {
        this.setState({
          undoCounter: this.state.undoCounter + 1,
        })
      } else {
        this.setState({
          undoCounter: 0,
        })
        this.props.toggle(this.props.todo);
      }
    } else {
      this.props.toggle(this.props.todo);
    }
  }
  render() {
    return (
      <p className={this.class} style={this.setStyle()}>
        <input 
          className="mr-2" 
          checked={this.props.todo.completed}
          type="checkbox" 
          onChange={this.toggle}
        ></input>
        {this.props.todo.title}
      </p>
    )
  }
}

export default TodoItem;