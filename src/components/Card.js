import React, { useState } from "react";
import BtnDoneChange from "./BtnDoneChange";
function Card({
  img,
  name,
  totalVote,
  setA,
  votingA,
  setB,
  votingB,
  setC,
  votingC,
  voteBtn,
  setVoteBtn,
  didVote,
  updateDidVote,
}) {
  const [btns, setButns] = useState(false); //DONE CHANGE BTN
  // const [voteBtn, setVoteBtn] = useState(true); //VOTE BTN
  const [voteMessage, setVoteMessage] = useState(false);

  const clickVotingHandler = (e) => {
    if (e.target.id === "Cats") {
      setA(votingA + 1);
    } else if (e.target.id === "Hedgehogs") {
      setB(votingB + 1);
    } else if (e.target.id === "Birds") {
      setC(votingC + 1);
    }
    setButns(true);
    setVoteBtn(false);

    // setOptionVotin(e.target.id);
    // voteMessage(false);
  };

  return (
    <div className="card">
      <img src={img} />
      <div className="container">
        <h3>{name}</h3>
        <h5>{totalVote}</h5>
      </div>
      <div>
        {voteBtn && !didVote ? (
          <button
            className="btn"
            id={name}
            onClick={(e) => clickVotingHandler(e)}
          >
            VOTE
          </button>
        ) : null}
        {btns ? (
          <BtnDoneChange
            name={name}
            setA={setA}
            votingA={votingA}
            votingB={votingB}
            votingC={votingC}
            setB={setB}
            setC={setC}
            btns={btns}
            setVoteMessage={setVoteMessage}
            setButns={setButns}
            // voteBtn={voteBtn}
            setVoteBtn={setVoteBtn}
            onClick={voteBtn}
            voteBtn={true}
            updateDidVote={updateDidVote}
          />
        ) : null}
        {voteMessage ? <span>"thank you</span> : ""}
      </div>
    </div>
  );
}

export default Card;
