import React from "react";
import { FaRegTrashAlt } from 'react-icons/fa'; 
import { BsPencilFill } from 'react-icons/bs'; 

const UsersList = ({ user, removeUser, selectUser }) => {
  return (

    
    <ul>
      {user.map((user) => (
        <li className="li" key={user.id}>
          
          <div className="users-card">

          <h2 className="card-name">
           {user.name}
          </h2>
          <p>
            <b>Email: </b> {user.email}
          </p>
          <p>
            <b>Address: </b> {user.address}
          </p>
          <p>
            <b>Phone Number: </b> {user.phoneNumber}
          </p>
          <p>
            <b>Role: </b> {user.role}
          </p>
          <br />

        <div className="btns">
          <button onClick={() => removeUser(user.id)} className="delete"> < FaRegTrashAlt /></button>
          <button onClick={() => selectUser(user)} className="edit"><BsPencilFill /></button>
          </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
