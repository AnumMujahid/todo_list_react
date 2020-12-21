import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './Components/Todos';
import Header from './Components/Header';
import AddTodo from './Components/AddTodo';
import About from './Components/About';
// import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';

export class App extends Component {
  state = {
    todos: [],
  };
  componentDidMount() {
    Axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    ).then((res) => this.setState({ todos: res.data }));
  }
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  addTodo = (title) => {
    // const newTodo = {
    //   id: uuidv4(),
    //   title: title,
    //   completed: false,
    // };
    // this.setState({ todos: [...this.state.todos, newTodo] });
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completetd: false,
    }).then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  };
  delTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      (res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
    );
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                  <AddTodo addTodo={this.addTodo} />
                </React.Fragment>
              )}
            ></Route>
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
