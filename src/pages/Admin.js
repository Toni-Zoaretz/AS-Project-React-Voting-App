import React from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
function Admin(route, setRoute) {
  return (
    <div>
      <Table route={route} setRoute={setRoute} />
    </div>
  );
}

export default Admin;
