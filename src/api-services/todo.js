import axios from "axios";
import { API_URL } from ".";
const authToken = JSON.parse(localStorage.getItem("token"));
const userData = JSON.parse(localStorage.getItem("userData"));

export function getTodoItems() {
  return axios
    .get(`${API_URL}/task/${userData._id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
}

export function addTask({ title, setData, setTitle }) {
  axios
    .post(`${API_URL}/task/create`, {
      title,
      userId: userData._id,
    })
    .then(() => {
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

export function editTodoItems(id, todoText, setEnable) {
  axios
    .put(`${API_URL}/task/${id}`, {
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

export function deleteTodoItems({ id, setData }) {
  axios
    .delete(`${API_URL}/task/${id}`)
    .then(() => {
      getTodoItems()
        .then((res) => {
          setData(res);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      return err;
    });
}

export function deleteMany({ setData }) {
  const config = {
    headers: {
      Authorization: `${authToken}`,
    },
  };
  axios
    .delete(`${API_URL}/task/deleteMany/`, config)
    .then(() => {
      getTodoItems()
        .then((res) => {
          setData(res);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      return err;
    });
}
