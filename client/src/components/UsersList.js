import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";

const UsersList = ({ user, removeUser, selectUser }) => {
  return (
    <div className="userslist">
        <div className="ul">
          {user.map((user) => (
      <div className="users-cards">
            <div className="li" key={user.id}>
              
                <h2 className="card-name">{user.name}</h2>
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
                  <button
                    onClick={() => removeUser(user.id)}
                    className="delete"
                  >
                    {" "}
                    <FaRegTrashAlt />
                  </button>
                  <button onClick={() => selectUser(user)} className="edit">
                    <BsPencilFill />
                  </button>
                </div>
              
            </div>
          </div>
          ))}
        </div>
    </div>
  );
};

export default UsersList;
