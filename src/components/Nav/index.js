import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <Navbar expand="lg" bg="dark" sticky="top">
        <Link className="nav-link" to="/">
          <div class="text-light">
            <h4 class="nav-title-font">Ian Zyvith</h4>
          </div>
        </Link>
        <ul class="navbar-nav ml-auto navitem-indent">
          <li class="nav-item">
            <Link to="/about">
              <div class="nav-font text-light">About</div>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/portfolio">
              <div class="nav-font text-light">Portfolio</div>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact">
              <div class="nav-font text-light">Contact</div>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/resume">
              <div class="nav-font text-light">Resume</div>
            </Link>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Nav;