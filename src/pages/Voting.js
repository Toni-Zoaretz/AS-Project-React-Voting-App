import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

function Voting({ setA, votingA, setB, votingB, setC, votingC }) {
  const [voteBtn, setVoteBtn] = useState(true); //VOTE BTN
  return (
    <section className="voting-page">
      <div className="card-contanier">
        <Card
          img={img1}
          name={"Cats"}
          setA={setA}
          votingA={votingA}
          totalVote={votingA}
          voteBtn={voteBtn}
          setVoteBtn={setVoteBtn}
        />
        <Card
          img={img2}
          name={"Hedgehogs"}
          setB={setB}
          votingB={votingB}
          totalVote={votingB}
          voteBtn={voteBtn}
          setVoteBtn={setVoteBtn}
        />
        <Card
          img={img3}
          name={"Birds"}
          setC={setC}
          votingC={votingC}
          totalVote={votingC}
          voteBtn={voteBtn}
          setVoteBtn={setVoteBtn}
        />
      </div>
    </section>
  );
}

export default Voting;
