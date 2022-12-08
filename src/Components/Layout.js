




import React from 'react';
import { Link } from "react-router-dom";


const Layout = () => {
  return (
    <div>
              <nav class="navbar navbar-expand-lg bg-secondary"  >
  <div class="container-fluid" >
    <a class="navbar-brand" href="#" style={{color:"white"}}>CRUD</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/" style={{color:"white"}}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/about" style={{color:"white"}}>About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/contact" style={{color:"white"}}>Contact</a>
        </li>
        
      </ul>
      <Link to={"/users/add"} className="btn btn-outline-primary" style={{color:"white"}}>
          Add user
        </Link>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Layout;