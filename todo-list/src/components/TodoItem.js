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
        this.hideInfoBar();
      }
    this.showInfoBar(`Touch ${3 - this.state.undoCounter} times to undo`);
    } else {
      this.showInfoBar(`Well done!`);
      this.props.toggle(this.props.todo);
    }
  }

  showInfoBar(message) {
    let infoBar = document.querySelector('div#navbar');
    infoBar.querySelector('div').textContent = message
    if (infoBar.classList.contains('show')) return
    infoBar.classList.remove('hide');
    infoBar.classList.add('show');
    setTimeout(() => {
      if (infoBar.classList.contains('hide')) return
      infoBar.classList.remove('show');
      infoBar.classList.add('hide');
    }, 2000)
  }

  hideInfoBar() {
    let infoBar = document.querySelector('div#navbar');
    infoBar.classList.remove('show');
    infoBar.classList.add('hide');
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