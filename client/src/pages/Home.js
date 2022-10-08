import '../styles/styles.css';
import MultiForm from '../components/MultiForm';
import React, { useEffect, useState } from "react";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import axios from 'axios';

function Home() {

  const [user, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const addUser = (userItem) => {
    axios
      .post("https://users-crud1.herokuapp.com/users/", userItem)
      .then(() => getUsers())
      .catch((error) => console.log(error.response));
  };

  const removeUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  };

  const selectUser = (user) => {
    setUserSelected(user);
  };

  const unselectUser = () => setUserSelected(null);

  const editUser = (userEdited) => {
    axios
      .put(
        `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
        userEdited
      )
      .then(() => getUsers());
  };



  return (
    <div>
  <div className="App">
      {/* <button onClick={() => setShowModal(true)}>Open modal</button>
        {showModal && <Modal close={() => setShowModal(false)} />} */}

      <UsersForm
        addUser={addUser}
        userSelected={userSelected}
        unselectUser={unselectUser}
        editUser={editUser}
      />
      <UsersList user={user} removeUser={removeUser} selectUser={selectUser} />
    </div>





      <div></div>
      <h3 className="home-title">
        Su historia se encuentra disponible en nuestra base de datos, por favor
        complete el siguiente formulario con la información requerida.
      </h3>
      <div>
        <h3 className="home-title-rec">¡Recuerde!</h3>
        <article className="main-text">
          <h4>Si usted es paciente debe anexar:</h4>
          Formato de carta de solicitud de historia clínica, Copia del documento
          de identificación del Paciente en formato PDF o JPG.
        </article>
      </div>

      <div>
        <article className="main-text">
          <h4>Si usted es autorizado por el paciente debe anexar:</h4>
          Formato de carta de autorización de entrega de historia clínica, Copia
          del documento de identificación del Paciente, Copia del documento de
          identificación del Autorizado. 
          <br />
        </article>
        <br />
        <br />
      </div>

     
      <MultiForm />
    
      <p className='warning'>La normatividad Colombiana (Ley 23 de
          1981, en el capítulo III) es cautelosa en la protección y
          confidencialidad de la historia clínica, la cual es considerada un
          documento privado, sometido a reserva, que sólo puede ser conocido por
          terceros, previa autorización del paciente o en casos previstos por la
          Ley.</p>
      <footer>
        <div className="footer">
          © 2022 Copyright: Medicoop I.P.S. - All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default Home;
