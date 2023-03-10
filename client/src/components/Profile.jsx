import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Profile() {
  const navigate = useNavigate();

  const addContact = () => {
    navigate("/");
  };
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getContacts() {
      setLoading(true);
      const { data } = await axios.get("/contact");
      setContacts(data);

      console.log(contacts);

      setLoading(false);
    }
    getContacts();
  }, []);
  const auth = localStorage.getItem("User");
  return (
    <div className="vh-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle"
                    fluid
                    style={{ width: "100px" }}
                  />
                </div>
                <MDBTypography tag="h4">{JSON.parse(auth).name}</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  @{JSON.parse(auth).name} <span className="mx-2">|</span>{" "}
                  <a href="#!">{JSON.parse(auth).email}</a>
                </MDBCardText>

                <Link to="/" size="lg" onClick={addContact}>
                  Add contact now
                </Link>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5">
                      {contacts.length}
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Total Contacts
                    </MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
