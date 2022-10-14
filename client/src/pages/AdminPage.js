import "../styles/styles.css";
import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import axios from "axios";
import getConfig from "../utils/getConfig";

function AdminPage() {
  const [sessionUser, setSessionUser] = useState([]);
  const API_URL = `${process.env.REACT_APP_API_URL}api/v1/users`;

  //Get sessionUser and renders the page only if user.role is 'admin', for best security reasons.
  useEffect(() => {
    /*axios
      .get(
        "http://localhost:4000/api/v1/users/6344f333c08697513370167f",
        getConfig()
      )*/
    axios
      .get(`${API_URL}/6344f333c08697513370167f`, getConfig())
      .then((res) => setSessionUser(res.data.sessionUser));
  }, []);

  //Checks if the user in session es equal to 'admin', and allows access.
  if (sessionUser.role === "admin") {
    return (
      <div>
        <div className="admin-page-title">
          <h1 className="landing-page-title-1">CRUD MERN</h1>
          <h2 className="landing-page-title">Bienvenido Administrador</h2>
          <h5 className="landing-page-title-1">
            Aquí podras crear, ver, editar y borrar usuarios de la base de
            datos.
          </h5>
        </div>
        <Form />

        <footer>
          <div className="footer">
            © 2022 Copyright: David Guerrero. - All Rights Reserved
          </div>
        </footer>
      </div>
    );
  } else {
    if (sessionUser.role === "visitor") alert("You are not authorized.");
  }
}

export default AdminPage;
