import React from "react";
import PropTypes from "prop-types";

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Add Todo</h1>
        <form onSubmit={this.props.addTodo}>
          <input
            onChange={this.props.onTextChange}
            value={this.props.newTodoText}
          />
          <button type="submit">
            Create Todo
          </button>
        </form>
      </div>
    );
  }
}
TodoForm.propTypes = {
  newTodoText: PropTypes.string.isRequired
};
TodoForm.defaultProps = {};

export default TodoForm;
