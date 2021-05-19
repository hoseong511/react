import { combineReducers } from "redux";
import filter from "./filter";
import todos from "./todo";


const reducer = combineReducers({
  todos,
  filter,
});
export default reducer;