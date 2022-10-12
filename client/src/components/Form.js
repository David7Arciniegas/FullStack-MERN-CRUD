import axios from "axios";
import { useEffect, useState } from "react";
// import Modal from "./components/Modal";
import UsersForm from "../components/UsersForm";
import UsersList from "../components/UsersList";
import "../styles/styles.css";
import getConfig from "../utils/getConfig";

function Form() {

  const [user, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/users/", getConfig())
      .then((res) => setUsers(res.data.users));
 
  }, []);

  const getUsers = () => {
    axios
      .get("http://localhost:4000/api/v1/users/",  getConfig() )
      .then((res) => setUsers(res.data.users));
      console.log(getUsers);
  };

  const addUser = (userItem) => {
    axios
      .post("http://localhost:4000/api/v1/users/", userItem, getConfig())
      .then(() => getUsers())
      .catch((error) => console.log(error.response));
  };

  const removeUser = (id) => {
    axios
      .delete(`http://localhost:4000/api/v1/users/${id}/`, getConfig() )
      .then(() => getUsers());
  };

  const selectUser = (user) => {
    setUserSelected(user);
  };

  const unselectUser = () => setUserSelected(null);

  const editUser = (userEdited) => {
    axios
      .put(
        `http://localhost:4000/api/v1/users/${userSelected.id}/`,
        userEdited
      )
      .then(() => getUsers());
  };

  // const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      {/* <button onClick={() => setShowModal(true)}>Open modal</button>
        {showModal && <Modal close={() => setShowModal(false)} />} */}

      <UsersForm
        addUser={addUser}
        userSelected={userSelected}
        unselectUser={unselectUser}
        editUser={editUser}
      />
      <h2 className="users-list">Users List</h2>
      <UsersList user={user} removeUser={removeUser} selectUser={selectUser} />
    </div>
  );
}

export default Form;
