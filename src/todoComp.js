import React from "react";
import UpdateTodo from "./updateTodo";

const TodoComp = ({ data, setData }) => {
  return (
    <div>
      <div className="main">
        {data?.map((d) => (
          <UpdateTodo setData={setData} key={d?._id} data={d} />
        ))}
      </div>
    </div>
  );
};

export default TodoComp;
