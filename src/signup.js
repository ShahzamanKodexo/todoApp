import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userData } from "./api-services/auth";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="container">
      <input
        className="button"
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="name"
      />
      <input
        className="button"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        placeholder="email"
      />
      <input
        className="button"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button
        className="button"
        onClick={() => userData({ name, email, password, navigate })}
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};

export default SignUp;
