import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CreateUpdateModal(contact, hide) {
  var popup = (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
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
              </Form>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              onClick={updateContact}
              class="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  return popup;
}

export default CreateUpdateModal;
