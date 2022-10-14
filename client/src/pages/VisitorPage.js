import "../styles/styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import getConfig from "../utils/getConfig";


function VisitorPage() {
  const [usersCard, setUsersCard] = useState([]);

  //Get sessionUser and renders the page only if user.role is 'admin', for best security reasons.
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/users/", getConfig())
      .then((res) => setUsersCard(res.data?.users));
  }, []);

  //Makes API Call for Users List
  return (
    <div className="users-list-container">
      <h1 className="title">Users List</h1>
      <div className="cards-container">
        {usersCard.map((users) => (
          <div key={users.id} className="users-cards">
            <h2>{users.name}</h2>
            <h5>E-mail:{users.email}</h5>
            <h5>Phone Number:</h5> {users.phoneNumber}
            <h5>Address:</h5>
            {users.address}
            <h5>Status:</h5>
            {users.status}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VisitorPage;
