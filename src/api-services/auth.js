import axios from "axios";
import { API_URL } from ".";

export function userData({ name, email, password, navigate }) {
  axios
    .post(`${API_URL}/user/addUser`, {
      name,
      email,
      password,
    })
    .then((res) => {
      navigate("/signin");
    })
    .catch((err) => {
      return err;
    });
}

export function login({ email, password, navigate }) {
  axios
    .post(`${API_URL}/user/login`, {
      email,
      password,
    })
    .then((response) => {
      localStorage.setItem("userData", JSON.stringify(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      navigate("/");
    })
    .catch((err) => {
      return err;
    });
}
