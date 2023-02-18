import React, { useState } from "react";
import { users } from "../data";
import { loginValidation } from "../utils/dataEXtracrt";

// { loginEmail, loginPassword }
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
    // if (email === password) console.log("hell44o");
    const user = { loginEmail: email, loginPassword: password };
    const userSecssesLogin = loginValidation(user);
    // console.log(isUserExist);
    if (userSecssesLogin) {
      setCurrentUser(userSecssesLogin);
      setRoute(1);

      // VALIDATE IF NOT EMPTY && EMAIL IS EMAIL
    } else {
      setError(true);
    }

    // FIND USER IN DATA BY EMAIL
    // IF USER IS IN DATA CHAECK IF PASSWOED IS CORREC & GET THE TYPE OF THE USER
    // IF PW IS CORRECT MOVE THE USER TO NEXT PAGE ACCORDIND TO USER'S TYPE (U SHOULD DO IT WITH STATE FROM APP [THAT DECIDE WITCH PAGE SHOULD BE RENDERED] AND WITH USEEFECT HOOK LIKE IN ORI CODE)
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
