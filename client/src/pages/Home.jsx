import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import AddContact from "../components/Addcontact";
import CreateUpdateModal from "../components/Popup";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);
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

  const popup = () => {
    return <CreateUpdateModal />;
  };

  const updateProduct = async (id) => {
    for (let contact in contacts) {
      contacts[contact]._id == id && console.log(contacts[contact]);
      // console.log(contacts[contact]);
    }

    const getContactDetails = () => {};
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="main">
      <button
        variant="success"
        onClick={popup}
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Add Contact
      </button>
      <AddContact />
      <h3 className="heading"> Total Contacts: {contacts.length}</h3>
      <div className="my-container">
        <Row xs={1} md={3} className="g-4">
          {contacts.map((contact) => (
            <Col key={contact._id}>
              <Card className="my-card">
                <Card.Body>
                  <Card.Title>{contact.name}</Card.Title>
                  <Button
                    variant="success"
                    onClick={() => updateProduct(contact._id)}
                  >
                    edit
                  </Button>
                  <Button variant="danger">delete</Button>
                  <Card.Text>Name : {contact.name}</Card.Text>
                  <Card.Text>Email : {contact.email}</Card.Text>
                  <Card.Text>Phone : {contact.phone}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
