import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function AddContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const handleContact = async () => {
    if (!name || !email || !phone) {
      alert("add some data");
      setError(true);
      return false;
    }
    console.log(name, email, phone);

    const token = localStorage.getItem("token");
    const { data } = await axios.post("/contact", {
      name,
      email,
      phone,
      authorization: token,
    });
    useEffect(() => {
      // setEmail(" ");
      // setPhone(" ");
      // setName(" ");
    });

    // data = await data.json();
    alert("contact added successfully");
    // navigate("/");
    // console.log(result)
  };
  return (
    <div className="add-product-container d-flex justify-content-center flex-column align-items-center m-5">
      <h2 className="heading-2 mb-4">Add Contact</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name : </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error && !name && (
            <Form.Text className="text-muted invalidInput">
              <span className="invalidInput"> name is missing </span>
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email : </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && !email && (
            <Form.Text className="text-muted invalidInput">
              <span className="invalidInput"> email is missing </span>
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone : </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {error && !category && (
            <Form.Text className="text-muted invalidInput">
              <span className="invalidInput"> Phone is missing </span>
            </Form.Text>
          )}
        </Form.Group>

        <Button variant="primary" onClick={handleContact}>
          Add contact
        </Button>
      </Form>
    </div>
  );
}

export default AddContact;
