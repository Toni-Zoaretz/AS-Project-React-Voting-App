import React, { useEffect, useState } from "react";
// CR - you could use index and minimize the import lines
import Login from "./pages/Login";
import Voting from "./pages/Voting";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
// CR - put the line of the css at the bottom and separate it with a line break
import "./styles/index.css";

function App() {
  const [route, setRoute] = useState(0);
  // CR - u should initialize didVote like this:
  /*
    {
      id: '',
      didVote: false
    }
  */
  const [didVote, setDidVote] = useState({});
  // CR - u should initialize this state like this:
  /*
  {
    id: "",
    name: "",
    password: "",
    type: "",
    email: "",
  }
  */
  const [currentUser, setCurrentUser] = useState({});
  // CR - u should called these votingCats, setVotingCats etc...
  const [votingA, setA] = useState(0); //CAT
  const [votingB, setB] = useState(0); //HAND
  const [votingC, setC] = useState(0); //BIRD

  const updateDidVote = () => {
    // CR - wrong use of the spread operator
    // CR - the spread is not needed here
    // CR - should be like this:
    /*
      setDidVote({ 
        id: currentUser.id,
        didVote: true 
      });    
    */
    setDidVote({ ...didVote, [currentUser.id]: true });
  };

  useEffect(() => {
    if (
      didVote[currentUser.id] &&
      currentUser.type === "admin" &&
      // CR - u should name the routs with meaningful names, not numbers
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
