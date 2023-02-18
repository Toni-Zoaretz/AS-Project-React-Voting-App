import React from "react";
function Card({ img, name, totalVote }) {
  return (
    <div className="card">
      <img src={img} />
      <div className="container">
        <h3>{name}</h3>
        <h5>{totalVote}</h5>
      </div>
      <div>
        <button className="btn">VOTE</button>
      </div>
    </div>
  );
}

export default Card;
