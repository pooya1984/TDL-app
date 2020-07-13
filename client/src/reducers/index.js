import { combineReducers } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import alert from "./alert";
import auth from "./auth";
import todoList from "./todoList";
import doneList from "./doneList";

export default combineReducers({ alert, auth, todoList, doneList });
