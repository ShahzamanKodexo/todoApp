import axios from "axios";
import React, { useEffect, useState } from "react";

function editTodoItems(id, todoText, setEnable) {
  axios
    .put(`http://localhost:3001/api/task/${id}`, {
      title: todoText,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      return err;
    })
    .finally(() => {
      setEnable();
    });
}

const UpdateTodo = ({ data }) => {
  const [enable, setEnable] = useState(false);
  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    setTodoText(data?.title);
  }, [data]);

  return (
    <center>
      <input
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
          onClick={() =>
            editTodoItems(data?._id, todoText, () => setEnable(false))
          }
          type="text"
        >
          done
        </button>
      ) : (
        <button onClick={() => setEnable(true)} type="text">
          edit
        </button>
      )}

      <button type="text">delete</button>
      <br />
    </center>
  );
};

export default UpdateTodo;
