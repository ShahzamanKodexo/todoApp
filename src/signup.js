import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function userData() {
    axios
      .post("http://localhost:3001/api/user/addUser", {
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

  return (
    <div className="container">
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="name"
      />
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        placeholder="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button onClick={userData} type="submit">
        Submit
      </button>
    </div>
  );
};

export default SignUp;
