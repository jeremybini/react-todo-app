import { ConstantCollection } from "fluxthis";

const actions = new ConstantCollection(
  "USER_INPUT_SET",
  "TODOS_FETCH_PENDING",
  "TODOS_FETCH_SUCCESS",
  "TODOS_ADD_PENDING",
  "TODOS_ADD_SUCCESS",
  "TODOS_UPDATE_PENDING",
  "TODOS_UPDATE_SUCCESS",
  "TODOS_DELETE_PENDING",
  "TODOS_DELETE_SUCCESS"
);

export default actions;
