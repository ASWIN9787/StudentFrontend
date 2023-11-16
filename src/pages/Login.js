import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState();
  // const [contact, setContact] = useState();
  // const navigate = useNavigate();
  const handleSubmit = () => {
    const url = "https://studentbackend-2l2p.onrender.com/students/login";
    const loginObj = { email };
    axios
      .post(url, loginObj)
      .then((res) => {
        alert(res.data);
        // navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label for="email">Email ID</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <label for="tel">Contact</label>
        <input
          type="Number"
          id="tel"
          onChange={(e) => setContact(e.target.value)}
        /> */}
        <input type="submit" />
      </form>
    </Layout>
  );
}

export default Login;