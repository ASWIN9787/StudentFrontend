import React, { useState } from "react";
import Layout from "../components/Layout";

function EditPage() {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [parentName, setParentName] = useState();
  const [parentContact, setParentContact] = useState();
  const handleSubmit = () => {};
  return (
    <Layout>
      <form onSubmit={handleSubmit} className="EditForm">
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
    </Layout>
  );
}

export default EditPage;