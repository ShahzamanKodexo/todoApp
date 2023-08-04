import { useEffect, useState } from "react";
import "./App.css";
import TodoComp from "./todoComp";
import { addTask, getTodoItems, deleteMany } from "./api-services/todo";

function Todo() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!title) {
      getTodoItems()
        .then((res) => {
          console.log("data", res);
          setData(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [title]);

  return (
    <>
      <div className="main">
        <center>
          <h1 className="main-heading">TODO APP</h1>
          <input
            className="button"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
            placeholder="add task"
          />
          <button
            className="button"
            onClick={() => addTask({ title, setData, setTitle })}
            type="text"
          >
            add
          </button>
          <button
            className="button"
            onClick={() => deleteMany({ setData })}
            type="text"
          >
            delete all
          </button>
          <br />

          <TodoComp setData={setData} data={data} />
        </center>
      </div>
    </>
  );
}

export default Todo;
