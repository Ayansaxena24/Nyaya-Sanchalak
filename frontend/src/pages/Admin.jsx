import React from "react";
import { Link } from "react-router-dom";
import Users from "./components/Users";

const Admin = () => {
  return (
    <Selection>
      <h1>Admin's Page</h1>
      <br />
      <p>You must have been assigned an Admin role.</p>
      <div>
        <Link to="/">Home</Link>
      </div>
    </Selection>
  );
};

export default Admin;
