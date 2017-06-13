import connect from "../../../utils/connect";
import todoStore from "../../../flux/store";
import apiActionCreator from "../../../flux/api-action-creator";
import actionCreator from "../../../flux/action-creator";
import App from "../";

const stores = [todoStore];

const mapStateToProps = function() {
  const storeState = todoStore.getState();

  return {
    todos: storeState.get("todos"),
    requestInFlight: storeState.get("requestInFlight"),
    userInput: storeState.get("userInput")
  };
};

const mapDispatchToProps = function() {
  return {
    addTodo(text) {
      apiActionCreator.addTodo(text);
    },
    fetchTodos() {
      apiActionCreator.fetchTodos();
    },
    setUserInput(userInput) {
      actionCreator.setUserInput(userInput);
    },
    updateTodo(todo) {
      apiActionCreator.updateTodo(todo);
    },
    removeTodo(id) {
      apiActionCreator.removeTodo(id);
    }
  };
};

export default connect(stores)(mapStateToProps, mapDispatchToProps)(App);
