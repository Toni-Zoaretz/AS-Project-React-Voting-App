import React from "react";
import Card from "../components/Card";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

function Voting() {
  return (
    <section className="voting-page">
      <div className="card-contanier">
        <Card img={img1} name={"Name Name1"} totalVote={15} />
        <Card img={img2} name={"Name Name2"} totalVote={10} />
        <Card img={img3} name={"Name Name3"} totalVote={12} />
      </div>
    </section>
  );
}

export default Voting;
