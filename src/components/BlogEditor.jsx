import {
  Avatar,
  Box,
  Button,
  Input,
  ListItemAvatar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Blog_1 from "./Templates/Blog_1";
import Blog_2 from "./Templates/Blog_2";
import ImgIcon from "../images/icon1.png";
import { display } from "@mui/system";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

const BlogEditor = () => {
  const [previewMode, setPreviewMode] = useState(false);
  const [title, setTitle] = useState("");
  const [para1, setPara1] = useState("");
  const [para2, setPara2] = useState("");
  const [primaryImg, setPrimaryImg] = useState(null);
  const [image1Url, setImage1Url] = useState(null);
  const [secondaryImg, setSecondaryImg] = useState(null);
  const [image2Url, setImage2Url] = useState(null);

  // const storageRef = ref(storage, );
  // const uploadTask = uploadBytesResumable(storageRef, file);

  useEffect(() => {
    if (primaryImg) {
      setImage1Url(URL.createObjectURL(primaryImg));
    }

    console.log(image1Url);
  }, [primaryImg]);

  useEffect(() => {
    if (secondaryImg) {
      setImage2Url(URL.createObjectURL(secondaryImg));
    }
  }, [secondaryImg]);

  return (
    <Box>
      <Navbar />

      {!previewMode && (
        <>
          <Box
            sx={{
              // background: "floralwhite",
              border: "1px solid silver",
              borderRadius: "20px",
              padding: "40px 70px",
              display: "flex",
              flexDirection: "column",
              margin: "20px 50px 20px 50px",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
                fontFamily: '"Montserrat",sans-serif',
                marginBottom: "10px",
              }}
            >
              Your thoughts, your voice, your blog
            </Typography>
            <Typography
              sx={{
                marginBottom: "20px",
                fontFamily: '"Lato",sans-serif',
                color: "gray",
              }}
              variant="p"
            >
              Let's pen your thoughts and share your voice, one step at a time
            </Typography>
            <input
              style={{
                border: "1px solid silver",
                borderRadius: "10px",
                padding: "15px",
                color: "black",
                fontSize: "16px",
                fontFamily: '"Lato",sans-serif',
              }}
              placeholder="captivate your audience with a compelling blog title"
            />

            {/* // uploading images */}

            <Box
              sx={{
                background: "ghostwhite",
                display: "flex",
                justifyContent: "space-around",
                margin: "20px 0",
                padding: "20px 0px",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  height: "300px",
                  width: "400px",
                  border: "1px solid hotpink",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "10px",
                }}
              >
                {!image1Url ? (
                  <>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        border: "1.5px dashed silver",
                        width: "70%",
                        padding: "5px",
                      }}
                      for="file-upload"
                    >
                      <img
                        style={{ height: "55px", width: "55px" }}
                        src={ImgIcon}
                        alt={"select image"}
                      />{" "}
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontFamily: "'Lato', sans-serif",
                          marginLeft: "10px",
                        }}
                      >
                        Upload primary image for your Blog
                      </Typography>
                    </label>

                    <input
                      style={{ display: "none" }}
                      id="file-upload"
                      type="file"
                      onChange={(e) => {
                        setPrimaryImg(e.target.files[0]);
                        console.log(e);
                      }}
                    />
                  </>
                ) : (
                  <Box
                    sx={{
                      height: "300pxx",
                      width: "400px",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      style={{
                        height: "250px",
                        width: "350px",
                        objectFit: "contain",
                      }}
                      src={image1Url}
                      alt="Image 1"
                    />
                    <label
                      style={{
                        fontFamily: '"Lato",sans-serif',
                        color: "blue",
                        marginTop: "10px",
                      }}
                      for="file-reupload"
                    >
                      Change
                    </label>
                    <input
                      style={{ display: "none" }}
                      id="file-reupload"
                      type="file"
                      onChange={(e) => {
                        setPrimaryImg(e.target.files[0]);
                        console.log(e);
                      }}
                    />
                  </Box>
                )}
              </Box>

              {/* // Code for Secondary Image */}
              <Box
                sx={{
                  display: "flex",
                  height: "300px",
                  width: "400px",
                  border: "1px solid forestgreen",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "10px",
                }}
              >
                {!image2Url ? (
                  <>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        border: "1.5px dashed silver",
                        width: "70%",
                        padding: "5px",
                      }}
                      for="file-upload2"
                    >
                      <img
                        style={{ height: "55px", width: "55px" }}
                        src={ImgIcon}
                        alt={"select image"}
                      />{" "}
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontFamily: "'Lato', sans-serif",
                          marginLeft: "10px",
                        }}
                      >
                        Upload secondary image for your Blog
                      </Typography>
                    </label>

                    <input
                      style={{ display: "none" }}
                      id="file-upload2"
                      type="file"
                      onChange={(e) => {
                        setSecondaryImg(e.target.files[0]);
                        console.log(e);
                      }}
                    />
                  </>
                ) : (
                  <Box
                    sx={{
                      height: "300pxx",
                      width: "400px",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      style={{
                        height: "250px",
                        width: "350px",
                        objectFit: "contain",
                      }}
                      src={image2Url}
                      alt="Image 2"
                    />
                    <label
                      style={{
                        fontFamily: '"Lato",sans-serif',
                        color: "blue",
                        marginTop: "10px",
                      }}
                      for="file-reupload2"
                    >
                      Change
                    </label>
                    <input
                      style={{ display: "none" }}
                      id="file-reupload2"
                      type="file"
                      onChange={(e) => {
                        setSecondaryImg(e.target.files[0]);
                        console.log(e);
                      }}
                    />
                  </Box>
                )}
              </Box>
            </Box>

            {/* // end here */}

            <Typography
              sx={{
                marginTop: "20px",
                marginBottom: "10px",
                fontFamily: '"Lato",sans-serif',
                color: "gray",
              }}
              variant="p"
            >
              Hook your readers from the start - share your first paragraph with
              the world!{" "}
            </Typography>
            <textarea
              style={{
                border: "1px solid silver",
                borderRadius: "10px",
                padding: "15px",
                color: "black",
                fontSize: "16px",
                fontFamily: '"Lato",sans-serif',
              }}
              value={para1}
              onChange={(e) => {
                setPara1(e.target.value);
              }}
              rows="5"
              cols="50"
              placeholder="Opening Paragraph"
            />
            <Typography
              sx={{
                marginTop: "20px",
                marginBottom: "10px",
                fontFamily: '"Lato",sans-serif',
                color: "gray",
              }}
              variant="p"
            >
              Don't leave your readers hanging - share the next part of your
              story now!{" "}
            </Typography>
            <textarea
              style={{
                border: "1px solid silver",
                borderRadius: "10px",
                padding: "15px",
                color: "black",
                fontSize: "16px",
                fontFamily: '"Lato",sans-serif',
              }}
              value={para2}
              onChange={(e) => {
                setPara2(e.target.value);
              }}
              rows="5"
              cols="50"
              placeholder="Second Paragraph"
            />
            <Box
              sx={{
                margin: "15px",
              }}
            >
              <Button
                style={{
                  marginRight: "40px",
                }}
                onClick={() => {
                  if (previewMode) {
                    setPreviewMode(false);
                  } else {
                    setPreviewMode(true);
                  }
                }}
              >
                Preview
              </Button>
              <Button>Publish</Button>
            </Box>
          </Box>
        </>
      )}

      {previewMode && (
        <>
          <Button
            onClick={() => {
              if (previewMode) {
                setPreviewMode(false);
              } else {
                setPreviewMode(true);
              }
            }}
            sx={{ position: "sticky", top: "90px" }}
          >
            Toggle
          </Button>
          <Blog_1
            title={title}
            para1={para1}
            para2={para2}
            image1Url={image1Url}
            image2Url={image2Url}
          />
        </>
      )}
    </Box>
  );
};

export default BlogEditor;
