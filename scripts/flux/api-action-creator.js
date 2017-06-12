import { APIActionCreator } from "fluxthis";
import actions from "./actions";

APIActionCreator.setDefaultBaseURL("http://localhost:4320");

const apiActionCreator = new APIActionCreator({
  displayName: "apiActionCreator",

  fetchTodos: {
    method: "GET",
    route: "/api/todo",
    pending: actions.TODOS_FETCH_PENDING,
    success: actions.TODOS_FETCH_SUCCESS
  },

  addTodo: {
    method: "POST",
    route: "/api/todo",
    pending: actions.TODOS_ADD_PENDING,
    success: actions.TODOS_ADD_SUCCESS,
    createRequest(text) {
      return {
        body: {
          text
        }
      };
    }
  },

  updateTodo: {
    method: "PUT",
    route: "/api/todo/:id",
    pending: actions.TODOS_UPDATE_PENDING,
    success: actions.TODOS_UPDATE_SUCCESS,
    createRequest(todo) {
      return {
        body: todo.toJS(),
        params: {
          id: todo.get("id")
        }
      };
    }
  },

  removeTodo: {
    method: "DELETE",
    route: "/api/todo/:id",
    pending: actions.TODOS_DELETE_PENDING,
    success: actions.TODOS_DELETE_SUCCESS,
    createRequest(id) {
      return {
        params: {
          id
        }
      };
    }
  }
});

export default apiActionCreator;
