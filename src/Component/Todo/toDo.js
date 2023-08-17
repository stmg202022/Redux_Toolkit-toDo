import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToDoActions } from "./toDoSlice";

export const ToDo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.toDo);

  const { listItems } = data;

  const [toDo, setToDo] = useState("");

  console.log(toDo);

  //Add toDo
  const add = () => {
    dispatch(ToDoActions.addToDo(toDo));
    setToDo("");
  };

  const deleteItems = (index) => {
    dispatch(ToDoActions.deleteToDo(index));
  };

  //
  return (
    <div>
      <input
        type="text"
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
      />

      <button onClick={add}>Add</button>

      <div>
        {listItems.map((item, index) => {
          return (
            <div key={index}>
              <span>{item}</span>
              <button onClick={() => deleteItems(item)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
