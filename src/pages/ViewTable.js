import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import ViewTableRow from "./ViewTableRow";

function ViewTable() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("https://studentbackend-2l2p.onrender.com/students")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const TableItems = () => {
    return students.map((student, i) => {
      return <ViewTableRow obj={student} key = {i}/>;
    });
  };
  return (
    <Layout>
      <h1>ViewTable</h1>
      {/* {TableItems()} */}
      <table>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Parent Name</th>
          <th>Parent Contact</th>
          <th>Option</th>
        </thead>
        <tbody>{TableItems()}</tbody>
      </table>
    </Layout>
  );
}

export default ViewTable;
