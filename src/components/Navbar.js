// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  console.log(props);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/dashboard">Admin Panel</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">Users</Link>

          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shopping-list">Shopping List</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/counter">Counter</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/totalcount">Total Count</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/game">Tic Toe</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/board">Board</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shudo">Shudo</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
    