import React, { useEffect, useState } from "react";

const UsersForm = ({ addUser, userSelected, unselectUser, editUser }) => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (userSelected !== null) {
      setFirst_name(userSelected.first_name);
      setLast_name(userSelected.last_name);
      setEmail(userSelected.email);
      setBirthday(userSelected.birthday);
      setPassword(userSelected.password);
    } else {
      reset();
    }
  }, [userSelected]);

  const submit = (e) => {
    e.preventDefault();
    const user = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      birthday: birthday,
      password: password,
    };
    if (userSelected === null) {
      addUser(user);
      reset();
    } else {
      editUser(user);
      unselectUser();
    }
  };

  const reset = () => {
    setFirst_name("");
    setLast_name("");
    setEmail("");
    setBirthday("");
    setPassword("");
  };

  return (

   
    <form onSubmit={submit} className="users-form">
      <div className="input-container">
        <label htmlFor="first_name">Name</label>
        <input
          type="text"
          id="first_name"
          onChange={(e) => setFirst_name(e.target.value)}
          value={first_name}
        />
      </div>

      
        <div className="input-container">
          <label htmlFor="last_name">Lastname</label>
          <input
            type="text"
            id="last_name"
            onChange={(e) => setLast_name(e.target.value)}
            value={last_name}
          />
        
      </div>

      <div className="input-container">
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div className="input-container">
        <label htmlFor="birthday">Birthday</label>
        <br />
        <input
          type="date"
          id="birthday"
          onChange={(e) => setBirthday(e.target.value)}
          value={birthday}
        />
      </div>

      <button className="add">+ Add User</button>
      {userSelected !== null && (<button type="button" className="cancel" onClick={unselectUser}>Cancelar</button>)}
     
     
      
    </form>
  );
};

export default UsersForm;
