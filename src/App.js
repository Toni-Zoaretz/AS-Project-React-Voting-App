import React, { useEffect, useState } from "react";
import "./styles/index.css";
import Login from "./pages/Login";
import Voting from "./pages/Voting";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
function App() {
  const [route, setRoute] = useState(0);
  const [didVote, setDidVote] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [votingA, setA] = useState(0); //CAT
  const [votingB, setB] = useState(0); //HAND
  const [votingC, setC] = useState(0); //BIRD

  const updateDidVote = () => {
    setDidVote({ ...didVote, [currentUser.id]: true });
  };

  useEffect(() => {
    if (
      didVote[currentUser.id] &&
      currentUser.type === "admin" &&
      route === 1
    ) {
      setRoute(2);
    }
  }, [didVote, currentUser, route]);

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
          didVote={didVote[currentUser.id] || false}
          updateDidVote={updateDidVote}
        />
      ) : null}
      {route === 2 ? <Admin setRoute={setRoute} didVote={didVote} /> : null}
    </div>
  );
}

export default App;
