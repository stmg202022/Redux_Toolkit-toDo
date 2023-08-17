import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToDoActions } from "./toDoSlice";

export const ToDo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.toDo);

  const { listItems } = data;

  const [toDo, setToDo] = useState("");

  console.log(toDo);

  const handleClick = () => {
    dispatch(ToDoActions.addToDo(toDo));
    setToDo("");
  };
  //
  return (
    <div>
      <input
        type="text"
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
      />

      <button onClick={handleClick}>Add</button>

      <div>
        {listItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </div>
    </div>
  );
};
