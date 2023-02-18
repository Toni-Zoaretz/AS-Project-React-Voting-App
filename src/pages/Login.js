import React from "react";
import LoginForm from "../components/LoginForm";

function Login({ setRoute, setCurrentUser }) {
  return (
    <div>
      <LoginForm setRoute={setRoute} setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default Login;
