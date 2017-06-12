import Immutable from "immutable";
import { ImmutableReducerStore } from "fluxthis";
import actions from "./actions";

const todoStore = new ImmutableReducerStore({
  displayName: "todoStore",

  init() {
    this.defaultState = Immutable.fromJS({
      todos: [],
      userInput: "",
      requestInFlight: false
    });

    this.bindActions(
      actions.USER_INPUT_SET,
      this.userInputSet,
      actions.TODOS_FETCH_PENDING,
      this.todosFetchPending,
      actions.TODOS_FETCH_SUCCESS,
      this.todosFetchSuccess,
      actions.TODOS_ADD_PENDING,
      this.todosAddPending,
      actions.TODOS_ADD_SUCCESS,
      this.todosAddSuccess,
      actions.TODOS_UPDATE_PENDING,
      this.todosUpdatePending,
      actions.TODOS_UPDATE_SUCCESS,
      this.todosUpdateSuccess,
      actions.TODOS_DELETE_PENDING,
      this.todosDeletePending,
      actions.TODOS_DELETE_SUCCESS,
      this.todosDeleteSuccess
    );
  },

  public: {
    getState() {
      return this.state;
    }
  },

  private: {
    setRequestInFlight(state) {
      return state.set("requestInFlight", true);
    },

    userInputSet(state, userInput) {
      return state.set("userInput", userInput);
    },

    todosFetchPending(state) {
      return this.setRequestInFlight(state);
    },

    todosFetchSuccess(state, { response }) {
      return state.merge({
        todos: Immutable.fromJS(response.body),
        requestInFlight: false
      });
    },

    todosAddPending(state) {
      return this.setRequestInFlight(state);
    },

    todosAddSuccess(state, { response }) {
      const immutableTodo = Immutable.fromJS(response.body);
      const updatedTodos = state.get("todos").push(immutableTodo);

      return state.merge({
        userInput: "",
        todos: updatedTodos,
        requestInFlight: false
      });
    },

    todosUpdatePending(state) {
      return this.setRequestInFlight(state);
    },

    todosUpdateSuccess(state, { response }) {
      const immutableTodo = Immutable.fromJS(response.body);
      const todoIndex = state
        .get("todos")
        .findIndex(todo => todo.get("id") === response.body.id);
      const updatedTodos = state.get("todos").set(todoIndex, immutableTodo);

      return state.merge({
        todos: updatedTodos,
        requestInFlight: false
      });
    },

    todosDeletePending(state) {
      return this.setRequestInFlight(state);
    },

    todosDeleteSuccess(state, { response }) {
      const filteredTodos = state.get("todos").filter(todo => {
        return todo.get("id") !== response.body.id;
      });

      return state.merge({
        todos: filteredTodos,
        requestInFlight: false
      });
    }
  }
});

export default todoStore;
