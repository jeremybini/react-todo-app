import React from "react";
import TodoList from "../todo-list";
import todos from "../../../server/data";

class App extends React.Component {
  render() {
    return <TodoList todos={todos} />;
  }
}

export default App;
