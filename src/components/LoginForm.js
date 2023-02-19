import React, { useState } from "react";
// CR - u imported and didn't use - delete!
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
    // CR - u have a type - Secsses - did u mean success?
    const userSecssesLogin = loginValidation(user);
    if (userSecssesLogin) {
      setCurrentUser(userSecssesLogin);
      // CR - bad use of naming - I can't understand what is '1' - it should be a meaningful name
      setRoute(1);
    } else {
      setError(true);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="form">
        {/* CR - notice that u have a lot of typos!!! install extension 'Code Spell Checker by Street Side Software' */}
        <h2>WELLCOME</h2>
        {/* CR - u should have made a component for all of the inputs */}
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
          /* CR - typo - 'Entered' */
          <span className="show">You Enterd Wrong Email/password!</span>
        ) : null}
      </form>
    </div>
  );
}

export default LoginForm;
