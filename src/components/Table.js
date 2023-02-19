import React from "react";
import { users } from "../data";
function Table({ didVote }) {
  return (
    <section className="voting-page">
      <div>
        <table>
          <thead>
            <tr>
              <th colspan="3">The table header</th>
            </tr>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>DID VOTE</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              /* CR - u must give a key prop to the element */
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className={didVote[user.id] ? "voted" : ""}>
                  {`${didVote[user.id] || false}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table;
