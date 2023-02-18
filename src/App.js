import React, { useState } from "react";
import "./styles/index.css";
import Login from "./pages/Login";
import Voting from "./pages/Voting";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
function App() {
  const [route, setRoute] = useState(0);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div>
      {route === 0 ? (
        <Login setRoute={setRoute} setCurrentUser={setCurrentUser} />
      ) : null}
      {route !== 0 ? (
        <Navbar currentUserName={currentUser.name} setRoute={setRoute} />
      ) : null}
      {route === 1 ? <Voting setRoute={setRoute} /> : null}
      {route === 2 ? <Admin setRoute={setRoute} /> : null}
    </div>
  );
}

export default App;
