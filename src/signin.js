import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function userData() {
    axios
      .post("http://localhost:3001/api/user/login", {
        email,
        password,
      })
      .then((response) => {
        // console.log("RESPONSE =========>", response.data.user.email);
        const userData = localStorage.setItem(
          "userData",
          JSON.stringify(response.data.user)
        );
        // console.log("USER DATA =========>", userData);
        navigate("/");
      })
      .catch((err) => {
        return err;
      });
  }

  return (
    <div className="container">
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="password"
      />
      <button onClick={userData} type="submit">
        Submit
      </button>
    </div>
  );
};

export default SignIn;
