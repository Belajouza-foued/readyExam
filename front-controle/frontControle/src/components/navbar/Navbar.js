import React from "react";
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';

const Navbar =() => {
    return(
        <>
       <nav className="navbar">
  <div className="container-fluid">   
  <div className="row">
    <div className="col-6">
    
   <form className="group">
    <div className="name">
    <h1>foued</h1>
    </div>
    <div className="list">
      <ul>
      <li>
        <Link className="nav-4"to='/'>Accueil</Link>
      </li>
        <li>
          <Link className="nav-1" to='/student'>Student</Link>
        </li>
        <li>
          <Link className="nav-2" to='/formation'>Formation</Link>
        </li>
       
        <li>
          <Link className="nav-3" to='/inscription'>inscription</Link>
        </li>
      </ul>
      </div>
      </form>
      </div>
     </div>
    </div>
  
</nav>
        <Outlet/>
        </>
    )
    };
export default Navbar;

