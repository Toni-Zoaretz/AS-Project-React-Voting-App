import React from "react";

function BtnDoneChange({
  name,
  setA,
  setB,
  setC,
  btns,
  setButns,
  setVoteBtn,
  voteBtn,
  votingA,
  votingB,
  votingC,
  setVoteMessage,
  updateDidVote,
}) {
  // CR - duplicate code - u should have used the 'handleChangeClick' method from the parent
  // CR - wrong naming - if it's attached to an onClick so u should call it clickHandler
  const handleChangeClick = (e) => {
    if (e.target.id === "Cats") {
      setA(votingA - 1);
    } else if (e.target.id === "Hedgehogs") {
      setB(votingB - 1);
    } else if (e.target.id === "Birds") {
      setC(votingC - 1);
    }
    setButns(false);
    setVoteBtn(true);
  };

  const handleDoneClick = () => {
    setButns(false);
    setVoteBtn(false);
    setVoteMessage(true);
    updateDidVote();
  };

  return (
    <div className="btns">
      <button className="btn btn-done" onClick={handleDoneClick}>
        DONE
      </button>

      <button
        className="btn btn-change"
        id={name}
        onClick={(e) => handleChangeClick(e)}
      >
        CHANGE
      </button>
    </div>
  );
}

export default BtnDoneChange;
