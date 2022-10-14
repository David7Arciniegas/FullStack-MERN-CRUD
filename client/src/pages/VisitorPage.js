import "../styles/styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import getConfig from "../utils/getConfig";

function VisitorPage() {
  const [usersCard, setUsersCard] = useState([]);
  const API_URL = `${process.env.REACT_APP_API_URL}api/v1/users`;

  //Get sessionUser and renders the page only if user.role is 'admin', for best security reasons.
  useEffect(() => {
    /*axios
      .get("http://localhost:4000/api/v1/users/", getConfig())
      .then((res) => setUsersCard(res.data?.users)); */

    axios
      .get(`${API_URL}`, getConfig())
      .then((res) => setUsersCard(res.data?.users));
  }, []);

  //Visitor can only read info from de API
  return (
    <div className="users-list-container">
      <h1 className="landing-page-title-2">Lista de Usuarios del Portal</h1>
      <h2 className="landing-page-title-1">Bienvenido Visitante</h2>
      <h5 className="landing-page-title-1">
        Aquí podras ver la lista de usuarios de la base de datos.
      </h5>

      {usersCard.map((users) => (
        <div key={users.id} className="users-cards">
          <h2 className="name">{users.name}</h2>
          <h5 className="email">E-mail: {users.email}</h5>
          <h5 className="phone">Phone: {users.phoneNumber}</h5>
          <h5 className="address">Address: {users.address}</h5>
          <h5 className="status">Status: {users.status}</h5>
        </div>
      ))}
    </div>
  );
}

export default VisitorPage;
