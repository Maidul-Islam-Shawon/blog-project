import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProjectReducer from "./ProjectReducer";
import { firestoreReducer } from "redux-firestore";
//import { firebaseReducer } from "react-redux-firebase";

const RootReducer = combineReducers({
  auth: AuthReducer,
  project: ProjectReducer,
  fireStore: firestoreReducer,
});

export default RootReducer;
