import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./api-services/auth";
const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="container">
      <input
        className="button"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
      />
      <input
        className="button"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="password"
      />
      <button
        className="button"
        onClick={() => login({ email, password, navigate })}
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};

export default SignIn;
