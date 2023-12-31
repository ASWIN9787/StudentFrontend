import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css"
import { Link } from "react-router-dom";


function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

  <div
   class="container-fluid">
    <Link class="navbar-brand" to="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/signup">Sign Up</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/view">ViewData</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header