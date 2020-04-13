import React, { Component } from 'react';
import Todo from './components/Todo';
import InfoBar from './components/InfoBar'
// import logo from './logo.svg';
import './App.css';

class App extends Component{
  state = {
    todos: {},
    initiated: false,
  }
  toggle = (todo) => {
    let newTodos = Object.assign({}, this.state.todos);
    let completed = newTodos[todo.userId][todo.id].completed;
    newTodos[todo.userId][todo.id].completed = !completed;
    this.setState({
      todos: newTodos
    })
  }
  render() {
    if (!this.state.initiated) {
      this.init();
    }
    return (
      <div className="App">
        <InfoBar />
        <div className="jumbotron">
          <h1 style={{fontWeight:'bold'}}>To-dos</h1>
        </div>
        <div className="content">
          <Todo className="list" todos={this.state.todos} toggle={this.toggle} />
        </div>
      </div>
    );
  }
  fetch() {
    return fetch('https://jsonplaceholder.typicode.com/todos', {
      'Content-Type': 'application/json',
    })
    .then(res => res.json())
  }
  init() {
    this.setState({
      initiated: true,
    })
    this.fetch()
    .then(json => {
      this.setState({
        todos: json.reduce((result, todo) => {
          if (!result[todo.userId]) {
            result[todo.userId] = {}
          }
          result[todo.userId][todo.id] = todo
          return result;
        }, {}),
      })
    })
  }
}


export default App;