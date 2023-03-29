import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../images/bloglogin.webp"
import "../../css/authpage.css";

const AuthPage = () => {
  const navigate = useNavigate();

  const handleLoginGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        const user = result.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box className = "container">
     
     <Box className="leftSide">
      <Typography id="appname">Blog App</Typography>
      <Typography id="apptag">Unlock a world of creativity - log in now!</Typography>
      <button onClick={handleLoginGoogle} id="login_btn">Sign in </button>
 
     </Box>
     <Box className="rightSide" >
      <img className="sideimage" src={loginImage} />
     </Box>
    </Box>
  );
};

export default AuthPage;
