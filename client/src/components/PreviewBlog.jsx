import { Avatar, Box, ListItemAvatar, Typography } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

const PreviewBlog = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ margin: "80px 80px 20px 80px" }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            marginBottom: "20px",
          }}
        >
          My Boh i lorem gyg gguy uy uyuy uguygu uyfyuguy gy g s cool
        </Typography>
        <Box
          sx={{
            height: "50px",
            marginTop: "5px",
            // background: "#5d5b8d",
            display: "flex",
            alignItems: "center",
            color: "black",
          }}
        >
          <ListItemAvatar>
            <Avatar
              alt={"ved"}
              src={
                "https://plus.unsplash.com/premium_photo-1663852297654-56d979cf72d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              }
              sx={{ width: 40, height: 40 }}
            />
          </ListItemAvatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <Typography
              sx={{ fontSize: "12px", fontWeight: "semi-bold", color: "black" }}
            >
              {"ved"}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              {"20 Aug"}
            </Typography>
          </Box>
        </Box>
        <img
          style={{
            objectFit: "contain",
            alignItems: "center",
            width: "100%",
            height: "500px",
          }}
          src="https://plus.unsplash.com/premium_photo-1663852297654-56d979cf72d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        />
      </Box>
      <Box
        sx={{
          textAlign: "justify",
          display: "flex",
          margin: "20px 80px 20px 80px",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: '"Open Sans" , sans-serif',
              fontSize: "17px",
              lineHeight: "28px",
            }}
            variant="p"
          >
            "Who are you?" the lion yelled at my father. "My name is Elmer
            Elevator." "Where do you think you're going?" "I'm going home," said
            my father. "That's what you think!" said the lion. "Ordinarily I'd
            save you for afternoon tea, but I happen to be upset enough and
            hungry enough to eat you right now." And he picked up my father in
            his front paws to feel how fat he was. My father said, "Oh, please,
            Lion, before you eat me, tell me why you are so particularly upset
            today." "It's my mane," said the lion, as he was figuring how many
            bites a little boy would make. "You see what a dreadful mess it is,
            and I don't seem to be able to do anything about it. My mother is
            coming over on the dragon this afternoon, and if she sees me this
            way I'm afraid she'll stop my allowance. She can't stand messy
            manes! But I'm going to eat you now, so it won't make any difference
            to you." "Oh, wait a minute," said my father, "and I'll give you
            just the things you need to make your mane all tidy and beautiful. I
            have them here in my pack." "You do?" said the lion. "Well, give
            them to me, and perhaps I'll save you for afternoon tea after all,"
            and he put my father down on the ground. My father opened the pack
            and took out the comb and the brush and the seven hair ribbons of
            different colors. "Look," he said, "I'll show you what to do on your
            forelock, where you can watch me. First you brush a while, and then
            you comb, and then you brush again until all the twigs and snarls
            are gone. Then you divide it up in three and braid it like this and
            tie a ribbon around the end." As my father was doing this, the lion
            watched very carefully and began to look much happier. When my
            father tied on the ribbon he was all smiles. "Oh, that's wonderful,
            really wonderful!" said the lion. "Let me have the comb and brush
            and see if I can do it." So my father gave him the comb and brush
            and the lion began busily grooming his mane. As a matter of fact, he
            was so busy that he didn't even know when my father left.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PreviewBlog;
