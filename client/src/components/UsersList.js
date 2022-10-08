import React from "react";
import { FaRegTrashAlt } from 'react-icons/fa'; 
import { BsPencilFill } from 'react-icons/bs'; 

const UsersList = ({ user, removeUser, selectUser }) => {
  return (
    <ul className="users-list">
      {user.map((user) => (
        <li className="li" key={user.id}>
          
          <div className="card">

          <h2 className="cardname">
            <b> </b> {user.first_name}
           
            <hr />
            <br />
          </h2>
          <p>
            <b>Lastname: </b> {user.last_name}
          </p>
          <p>
            <b>Email: </b> {user.email}
          </p>
          <p>
            <b>Birthday: </b> {user.birthday}
          </p>
          <p>
            <b>Password: </b> {user.password}
          </p>
          <br />
          <button onClick={() => removeUser(user.id)} className="delete"> < FaRegTrashAlt /></button>
          <button onClick={() => selectUser(user)} className="edit"><BsPencilFill /></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
