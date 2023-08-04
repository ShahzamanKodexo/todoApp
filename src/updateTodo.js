import React, { useEffect, useState } from "react";
import { editTodoItems, deleteTodoItems } from "./api-services/todo";

const UpdateTodo = ({ data, setData }) => {
  const [enable, setEnable] = useState(false);
  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    setTodoText(data?.title);
  }, [data]);
  return (
    <center>
      <input
        className="button2"
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
        disabled={!enable}
        value={todoText}
        type="text"
        placeholder="add task"
      />
      {enable ? (
        <button
          className="button2"
          onClick={() =>
            editTodoItems(data?._id, todoText, () => setEnable(false))
          }
          type="text"
        >
          done
        </button>
      ) : (
        <button className="button2" onClick={() => setEnable(true)} type="text">
          edit
        </button>
      )}

      <button
        className="button2"
        onClick={() => deleteTodoItems({ id: data?._id, setData })}
        type="text"
      >
        delete
      </button>
      <br />
    </center>
  );
};

export default UpdateTodo;
