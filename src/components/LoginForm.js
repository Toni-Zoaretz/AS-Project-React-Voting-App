import React, { useState } from "react";
import { users } from "../data";
import { loginValidation } from "../utils/dataEXtracrt";

function LoginForm({ setRoute, setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { loginEmail: email, loginPassword: password };
    const userSecssesLogin = loginValidation(user);
    if (userSecssesLogin) {
      setCurrentUser(userSecssesLogin);
      setRoute(1);
    } else {
      setError(true);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="form">
        <h2>WELLCOME</h2>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
        ></input>
        <button className="btn" type="submit">
          Login
        </button>
        {error ? (
          <span className="show">You Enterd Wrong Email/password!</span>
        ) : null}
      </form>
    </div>
  );
}

export default LoginForm;
