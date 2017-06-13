import React from "react";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import "./stylesheets/index.scss";

class TodoList extends React.Component {
  toggleCompleted(todo) {
    const toggledTodo = todo.set("completed", !todo.get("completed"));
    this.props.updateTodo(toggledTodo);
  }

  renderMessage() {
    return <p>There are currently no Todos.</p>;
  }

  renderList() {
    const listItems = this.props.todos.map((todo, index) => {
      const completedClass = todo.get("completed")
        ? "todo-list__text--completed"
        : "";

      return (
        <li className="todo-list__list-item" key={index}>
          <span className={`todo-list__text ${completedClass}`}>
            {todo.get("text")}
          </span>
          <div className="todo-list__controls">
            <button
              className="todo-list__button"
              onClick={() => this.props.removeTodo(todo.get("id"))}
            >
              Remove
            </button>
            <button
              className="todo-list__button"
              onClick={() => this.toggleCompleted(todo)}
            >
              Toggle completed
            </button>
          </div>
        </li>
      );
    });

    return (
      <ol className="todo-list__list">
        {listItems}
      </ol>
    );
  }

  render() {
    const content = this.props.todos.size === 0
      ? this.renderMessage()
      : this.renderList();

    return (
      <div className="todo-list__container">
        <h1 className="todo-list__heading">Todos</h1>
        {content}
      </div>
    );
  }
}

TodoList.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  todos: ImmutablePropTypes.list.isRequired,
  updateTodo: PropTypes.func.isRequired
};

export default TodoList;
