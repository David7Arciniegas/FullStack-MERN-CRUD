import '../styles/styles.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import getConfig from "../utils/getConfig";
import { ListGroup, Col, ListGroupItem } from 'react-bootstrap';


function VisitorPage() {

  const [usersCard, setUsersCard] = useState([]);

  //Get sessionUser and renders the page only if user.role is 'admin', for best security reasons.
  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/users/', getConfig())
      .then((res) => setUsersCard(res.data?.users));
  }, []);
  
  //Makes API Call for Users List 
  return (
    <div className="users">

      <h1 className='users'>Users</h1>
   <Col lg={3}>
            <ListGroup>
              {
                usersCard.map(users => (
                  <ListGroup.Item key={users.id} 
                    >
                    <h2>{users.name}</h2>
                    <ListGroupItem><h5>E-mail:</h5>{users.email}</ListGroupItem>
                    <ListGroupItem><h5>Phone Number:</h5> {users.phoneNumber}</ListGroupItem>
                    <ListGroupItem><h5>Address:</h5>{users.address}</ListGroupItem>
                    <ListGroupItem><h5>Status:</h5>{users.status}</ListGroupItem>
                  </ListGroup.Item>
                  
                ))
              }
           
            </ListGroup>
          </Col>
    </div>
   

    
  );
}

export default VisitorPage;
