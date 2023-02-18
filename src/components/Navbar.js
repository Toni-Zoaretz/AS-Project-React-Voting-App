import React from "react";

function Navbar({ setRoute, currentUserName }) {
  return (
    <div className="navbar">
      <span>Hi {currentUserName}</span>
      <button className="btn btn-logout" onClick={() => setRoute(0)}>
        Logout
      </button>
    </div>
  );
}

export default Navbar;
