import React from "react";
import PropTypes from "prop-types";

function Todo(props) {
  return (
    <li>
      {props.todo.text}
    </li>
  );
}

class TodoList extends React.Component {
  renderTodos() {
    const { todos } = this.props;

    return todos.map(todo => <Todo key={todo.id} todo={todo} />);
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
  todos: PropTypes.array.isRequired
};
TodoList.defaultProps = {
  todos: []
};

export default TodoList;
