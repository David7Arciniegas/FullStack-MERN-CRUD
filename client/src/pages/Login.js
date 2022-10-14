import axios from "axios";
import React from "react";
import { Button, Card, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const API_URL = `${process.env.REACT_APP_API_URL}api/v1/users`;

  const submit = (data) => {
    /* axios
     .post(`${API_URL}/login`, data)*/
    axios
      .post(`http://localhost:4000/api/v1/users/login`, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.user.role);
        if (res.data.user.role === "admin") {
          navigate("/admin");
          alert("Bienvenido admin");
          console.log(data.user.role);
        } else {
          if (res.data.user.role === "visitor") {
            navigate("/visitor");
            alert("Bienvenido Visitante");
          }
        }
      })
      .catch((error) => {
        console.log(error.response?.status);
        if (error.response?.status === 404) {
          alert("error");
        }
      });
  };

  return (
    <div>
      <br />
      <div className="background-picture"></div>
      <h4 className="main-title">Ingrese su correo y contraseña.</h4>
      <br />
      <Card style={{ maxWidth: "500px" }} className="mx-auto">
        <Card.Body className="card-body">
          <Form onSubmit={handleSubmit(submit)}>
            <Form.Group className="mb-3">
              <Form.Label className="correo">Correo Electronico</Form.Label>
              <Form.Control
                className="input-correo"
                {...register("email")}
                type="email"
                placeholder="Ingrese su correo"
              />
              <Form.Text className="text-muted">
                Nunca compartiremos tu información personal.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                {...register("password")}
                type="password"
                placeholder="Ingrese su contraseña"
              />
            </Form.Group>
            <div className="card">
            <p className="mb-2">Usuario Administrador: admin@mail.com </p>
            <p className="mb-2"> Contraseña: pass1234 </p>
            <p className="mb-2">Usuario Visitante: visitante@mail.com </p>
            <p className="mb-2"> Contraseña: pass1234 </p>
            </div>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Button type="submit">Ingresar</Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>

      <Row>
        <footer>
          <div className="footer">
            © 2022 Copyright: David Guerrero. - All Rights Reserved
          </div>
        </footer>
      </Row>
      <br />
      <br />
    </div>
  );
};

export default Login;
