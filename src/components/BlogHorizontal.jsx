import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import "../../css/bloghorz.css"

const BlogHorizontal = () => {
  return (
    <Box className="blog_cont">

        <Box className="head">
            <Avatar id="avt" src="https://th.bing.com/th?id=OSB.AAyAATv.png&w=138&h=104&o=6&dpr=1.5&pid=SANGAM" alt="ved" />
            <Typography className='txt_head'>Ved</Typography>
            <Typography className='txt_head'>2 hours ago</Typography>
        </Box>
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
        <Box className="data">
            <Typography id="title">This is my title</Typography>
            <Typography id="para" variant='p'>this is my para graph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut unde ipsum, vitae, molestias animi in nesciunt nisi tenetur nemo totam hic delectus voluptatum!</Typography>
            <div className='extra'>
            <button id="btn-tag">Technology</button>
            <p id="ttr">5 min read</p>
            </div>

        </Box>
        <Box id="img_box">
            <img id="img_sml"  src="https://images.unsplash.com/photo-1553531087-b25a0b9a68ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="image" />
        </Box>
        </Box>

    </Box>
  )
}

export default BlogHorizontal