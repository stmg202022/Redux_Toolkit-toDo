import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listItems: [],
};

const ToDoSlice = createSlice({
  name: "ToDo",
  initialState,
  reducers: {
    addToDo(state, action) {
      console.log("actions called.", action.payload);

      state.listItems = [...state.listItems, action.payload];
    },

    deleteToDo(state, action) {
      //   console.log(action.payload);

      state.listItems = state.listItems.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const ToDoActions = ToDoSlice.actions;
export default ToDoSlice.reducer;
