import React, { useState } from "react";
import "./styles/index.css";
import Login from "./pages/Login";
import Voting from "./pages/Voting";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
function App() {
  const [route, setRoute] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [votingA, setA] = useState(0); //CAT
  const [votingB, setB] = useState(0); //HAND
  const [votingC, setC] = useState(0); //BIRD

  return (
    <div>
      {route === 0 ? (
        <Login setRoute={setRoute} setCurrentUser={setCurrentUser} />
      ) : null}
      {route !== 0 ? (
        <Navbar currentUserName={currentUser.name} setRoute={setRoute} />
      ) : null}
      {route === 1 ? (
        <Voting
          setRoute={setRoute}
          setA={setA}
          votingA={votingA}
          setB={setB}
          votingB={votingB}
          setC={setC}
          votingC={votingC}
        />
      ) : null}
      {route === 2 ? <Admin setRoute={setRoute} /> : null}
    </div>
  );
}

export default App;
