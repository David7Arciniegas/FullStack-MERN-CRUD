import React, { useEffect, useState } from "react";

const UsersForm = ({ addUser, userSelected, unselectUser, editUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (userSelected !== null) {
      setName(userSelected.name);
      setEmail(userSelected.email);
      setAddress(userSelected.address);
      setPhoneNumber(userSelected.phoneNumber);
      setPassword(userSelected.password);
      setRole(userSelected.role);
    } else {
      reset();
    }
  }, [userSelected]);

  const submit = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
      password: password,
      role: role,
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
    setName("");
    setEmail("");
    setAddress("");
    setPhoneNumber("");
    setPassword("");
    setRole("");
  };

  return (
    <>
      <div className="form">
        <form onSubmit={submit}>
          <div className="form-container">
            <div className="input-form">
              <label htmlFor="name">Name</label>
              <input
                className="input-f"
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="input-form">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="input-form">
              <label htmlFor="address">Address</label>

              <input
                type="address"
                id="address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>
            <div className="input-form">
              <label htmlFor="phoneNumber">Phone Number</label>

              <input
                type="phoneNumber"
                id="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
            </div>

            <div className="input-form">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="input-form">
              <label htmlFor="password">Role</label>
              <input
                type="role"
                id="role"
                onChange={(e) => setRole(e.target.value)}
                value={role}
              />
            </div>
          </div>
          <div>
            <button className="addButton">Add User</button>
            {userSelected !== null && (
              <button type="button" className="cancel" onClick={unselectUser}>
                Cancelar
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default UsersForm;
