import React from "react";
import "../../css/navbar.css";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="title">Blog App</div>
      <div className="nav-content">
        <span className="content-items">Home</span>
        <span className="content-items">Product</span>
        <span className="content-items">Blog</span>
        <span className="content-items">Pricing</span>
        <span className="content-items">About us</span>
      </div>
      <div className="signin">
        <button className="button-login">
          <span>Login</span>
        </button>
        <button className="button-login signup">
          <span>Sign up</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
