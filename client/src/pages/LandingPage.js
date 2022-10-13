import "../styles/styles.css";
import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import axios from "axios";
import getConfig from "../utils/getConfig";

function LandingPage() {
  return (
    <div>
      <div className="landing-page">
        <h2>
          Bienvenid@!, Puedes ingresar al portal usando tus credenciales de
          Administrador, o visitante, en el boton de Login.{" "}
        </h2>
      </div>

      <footer>
        <div className="footer">
          © 2022 Copyright: David Guerrero. - All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
