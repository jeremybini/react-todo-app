import React from "react";
import TodoList from "../todo-list";
import TodoForm from "../todo-form";
import todos from "../../../server/data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodoText: "",
      todos
    };
  }

  updateTodoText = event => {
    const text = event.target.value;

    this.setState({
      newTodoText: text
    });
  };

  toggleTodo = id => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id !== id) {
        return todo;
      }

      return {
        ...todo,
        completed: !todo.completed
      };
    });

    this.setState({
      todos: updatedTodos
    });
  };

  addTodo = event => {
    event.preventDefault();
    const updatedTodos = [
      ...this.state.todos,
      {
        id: Math.random(),
        text: this.state.newTodoText,
        completed: false
      }
    ];

    this.setState({
      newTodoText: "",
      todos: updatedTodos
    });
  };

  render() {
    return (
      <div>
        <TodoList toggleTodo={this.toggleTodo} todos={this.state.todos} />
        <TodoForm
          addTodo={this.addTodo}
          onTextChange={this.updateTodoText}
          newTodoText={this.state.newTodoText}
        />
      </div>
    );
  }
}

export default App;
