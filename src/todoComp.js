import axios from "axios";
import React, { useState } from "react";
import UpdateTodo from "./updateTodo";

export function getTodoItems() {
  const myData = JSON.parse(localStorage.getItem("userData"));
  console.log("", myData);
  return axios
    .get(`http://localhost:3001/api/task/${myData._id}`)
    .then((response) => {
      console.log("bbbb---------", response.data);

      return response.data;
    })
    .catch((err) => {
      return err;
    });
}

const TodoComp = ({ data }) => {
  return (
    <div>
      <div className="main">
        {data?.map((d) => (
          <UpdateTodo key={d?._id} data={d} />
        ))}
      </div>
    </div>
  );
};

export default TodoComp;
