import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/navbar.css";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";

function Navbar(props) {
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);

  const logout = () => {
    signOut(auth)
      .then(() => {
        alert("log out ");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="navbar">
      <div className="title">Blog App</div>
      <div className="nav-content">
        <span
          className="content-items"
          onClick={() => {
            navigate("/home");
          }}
        >
          Home
        </span>
        <span
          className="content-items"
          onClick={() => {
            navigate("/explore");
          }}
        >
          Explore
        </span>
        {currentUser && (
          <span
            className="content-items"
            onClick={() => {
              navigate("/my-blogs");
            }}
          >
            My Blogs
          </span>
        )}
      </div>
      {!currentUser && (
        <div className="signin">
          <button
            className="button-login"
            onClick={() => {
              navigate("/");
            }}
          >
            <span>Login</span>
          </button>
          {/* <button className="button-login signup">
            <span>Sign up</span>
          </button> */}
        </div>
      )}
      {currentUser && (
        <div className="signin">
          <button
            className="button-login"
            onClick={() => {
              logout();
            }}
          >
            <span>logout</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
