import React from "react";
import TodoList from "../todo-list";
import todos from "../../../server/data";

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;
