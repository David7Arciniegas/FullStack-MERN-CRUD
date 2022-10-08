import '../styles/styles.css';
import React, { useEffect, useState } from "react";
import UsersForm from "../components/UsersForm";
import UsersList from "../components/UsersList";
import Form from "../components/Form"
import axios from 'axios';

function Home() {

  //Makes API Call for Users List 
  return (
    <div>
      <Form />
  

      <footer>
        <div className="footer">
          © 2022 Copyright: David Guerrero. - All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default Home;
