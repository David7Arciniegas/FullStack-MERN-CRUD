import '../styles/styles.css';
import React, { useEffect, useState } from "react";
import Form from "../components/Form"
import axios from 'axios';
import getConfig from "../utils/getConfig";


function AdminPage() {

const [sessionUser, setSessionUser] = useState([]);

//Get sessionUser and renders the page only if user.role is 'admin', for best security reasons.
useEffect(() => {
  axios.get('http://localhost:4000/api/v1/users/6344f333c08697513370167f', getConfig())
  .then((res) => setSessionUser(res.data.sessionUser));
}, []);

if(sessionUser.role === 'admin'){
  return (
    <div>    
         <h2>{sessionUser.role}</h2>
      <Form />
   
      <footer>
        <div className="footer">
          © 2022 Copyright: David Guerrero. - All Rights Reserved
        </div>
      </footer>
    </div>
  );
}else{
  if(sessionUser.role === 'visitor')
  alert('You are not authorized.')
}}

export default AdminPage;
