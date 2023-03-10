import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function Signup() {
  useEffect(() => {
    const auth = localStorage.getItem("User");
    if (auth) {
      navigate("/");
    }
  }, []);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const { data } = await axios.post("/auth/register", {
      name,
      email,
      password,
    });
    if (data?.accessToken && data?.user) {
      localStorage.setItem("User", JSON.stringify(data.user));
      localStorage.setItem("token", data.accessToken);
      navigate("/");
    }
  };
  return (
    <div className="form signup-form-container d-flex justify-content-center flex-column align-items-center m-5">
      <h2 className="heading-2 mb-4">Sign Up</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSignup}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
