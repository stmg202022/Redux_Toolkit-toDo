import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from "./Component/Todo/toDoSlice";

//import Slice as a reducer

export const store = configureStore({
  reducer: {
    toDo: ToDoReducer,
  },
});
