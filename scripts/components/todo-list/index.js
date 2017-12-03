import React from "react";
import PropTypes from "prop-types";

function Todo({ todo, toggleTodo }) {
  return (
    <li
      onClick={() => toggleTodo(todo.id)}
      className={todo.completed ? "completed-todo" : null}
    >
      {todo.text}
    </li>
  );
}

class TodoList extends React.Component {
  renderTodos() {
    const { todos, toggleTodo } = this.props;

    return todos.map(todo =>
      <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
    );
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <ol>{this.renderTodos()}</ol>
      </div>
    );
  }
}
TodoList.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
};
TodoList.defaultProps = {
  todos: []
};

export default TodoList;
