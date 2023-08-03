import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import TodoComp, { getTodoItems } from "./todoComp";

function Todo() {
  const [title, setTitle] = useState();
  const [data, setData] = useState([]);

  function addTask() {
    console.log("Title ------>", title);
    const myData = JSON.parse(localStorage.getItem("userData"));
    console.log(myData, myData?._id);
    axios
      .post("http://localhost:3001/api/task/create", {
        title,
        userId: myData._id,
      })
      .then((response) => {
        // console.log("RES ------>", response);
        getTodoItems()
          .then((res) => {
            console.log("data", res);
            setData(res);
          })
          .catch((err) => {
            console.log(err);
          });

        setTitle("");
      })
      .catch((err) => {
        return err;
      });
  }

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
          <h1>TODO APP</h1>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="add task"
          />
          <button onClick={addTask} type="text">
            add
          </button>
          <button type="text">delete all</button>
          <br />

          <TodoComp data={data} />
        </center>
      </div>
    </>
  );
}

export default Todo;
