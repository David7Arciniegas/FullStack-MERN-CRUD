import axios from "axios";
import { useEffect, useState } from "react";
import UsersForm from "../components/UsersForm";
import UsersList from "../components/UsersList";
import "../styles/styles.css";
import getConfig from "../utils/getConfig";

function Form() {
  const [user, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  const API_URL = `${process.env.REACT_APP_API_URL}api/v1/users`;

  useEffect(() => {
    /* axios
    .get(`http://localhost:4000/api/v1/users/`, getConfig())
    .then((res) => setUsers(res.data.users)); */
    axios
      .get(`${API_URL}`, getConfig())
      .then((res) => setUsers(res.data.users));
  }, []);

  const getUsers = () => {
    /* axios
      .get(`http://localhost:4000/api/v1/users/`, getConfig())
      .then((res) => setUsers(res.data.users));*/
    axios
      .get(`${API_URL}`, getConfig())
      .then((res) => setUsers(res.data.users));
  };

  const addUser = (userItem) => {
    /*axios
      .post(`http://localhost:4000/api/v1/users/`, userItem, getConfig())
      .then(() => getUsers())
      .catch((error) => console.log(error.response));*/
    axios
      .post(`${API_URL}`, userItem, getConfig())
      .then(() => getUsers())
      .catch((error) => console.log(error.response));
  };

  const removeUser = (id) => {
    /* axios
      .delete(`http://localhost:4000/api/v1/users/`, getConfig())
      .then(() => getUsers());*/

    axios.delete(`${API_URL}`, getConfig())
    .then(() => getUsers());
    
  };

  const selectUser = (user) => {
    setUserSelected(user);
  };

  const unselectUser = () => setUserSelected(null);

  const editUser = (userEdited) => {
    /* axios
      .patch(
        `http://localhost:4000/api/v1/users/${userSelected.id}/`,
        userEdited,
        getConfig()
      )
      .then(() => getUsers());*/

    axios
      .patch(`${API_URL}/${userSelected.id}/`, userEdited, getConfig())
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
      <h1 className="landing-page-title-1">Lista de Usuarios del Portal</h1>
      <UsersList user={user} removeUser={removeUser} selectUser={selectUser} />
    </div>
  );
}

export default Form;
