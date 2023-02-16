import React from "react";

function LoginForm() {
  return (
    <div className="form-wrapper">
      <form>
        <h2>WELLCOME</h2>
        {/* <label>UserName:</label> */}
        <input type="text" placeholder="UserName"></input>
        {/* <label>Passwords:</label> */}
        <input type="text" placeholder="Password"></input>
        <button className="btn">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
