import React, { useState } from "react";
import Layout from "../components/Layout";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import Image from "./ww.png";
function SignUp() {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [parentName, setParentName] = useState();
  const [parentContact, setParentContact] = useState();

  let handleSubmit = (event) => {
    const studentObj = {
      firstName,
      lastName,
      email,
      contact,
      parentName,
      parentContact,
    };
    const url = "https://studentbackend-2l2p.onrender.com/students/create-student";
    axios
      .post(url, studentObj)
      .then((res) => {
        if (res.status === 200) {
          alert("student added successfuly");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    event.preventDefault();
  };
  return (
    <Layout>
      <h1 id="heading">Student Registration Form</h1>
      <Container>
        <Row>
          <Col>
            <img src={Image} />
          </Col>
          <Col>
            <form onSubmit={handleSubmit}>
              <label for="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                onChange={(e) => {
                  setfirstName(e.target.value);
                }}
              />
              <label for="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                onChange={(e) => {
                  setlastName(e.target.value);
                }}
              />
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label for="contact">Contact</label>
              <input
                type="tel"
                id="contact"
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
              <label for="parentName">Parent Name</label>
              <input
                type="text"
                id="parentName"
                onChange={(e) => {
                  setParentName(e.target.value);
                }}
              />
              <label for="parentContact">Parent Contact</label>
              <input
                type="tel"
                id="parentContact"
                onChange={(e) => {
                  setParentContact(e.target.value);
                }}
              />
              <input type="submit" id="submit" />
            </form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default SignUp;