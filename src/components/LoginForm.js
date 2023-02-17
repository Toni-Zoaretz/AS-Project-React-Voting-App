import React from "react";

function LoginForm() {
  return (
    <div className="wrapper">
      <div className="box">
        <h2>WELLCOME</h2>
        {/* <label>UserName:</label> */}
        <input type="text" placeholder="UserName"></input>
        {/* <label>Passwords:</label> */}
        <input type="text" placeholder="Password"></input>
        <button className="btn">Login</button>
      </div>
    </div>
  );
}

export default LoginForm;
