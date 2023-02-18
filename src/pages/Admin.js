import React from "react";
import Table from "../components/Table";
function Admin({ didVote }) {
  console.log(didVote);
  return (
    <div>
      <Table didVote={didVote} />
    </div>
  );
}

export default Admin;
