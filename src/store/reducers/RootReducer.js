import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProjectReducer from "./ProjectReducer";

const RootReducer = combineReducers({
  auth: AuthReducer,
  project: ProjectReducer,
});

export default RootReducer;
