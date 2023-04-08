const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connect = async () => {
    try {
      await mongoose.connect('mongodb+srv://access:9319316847@cluster0.bdg3cr5.mongodb.net/?retryWrites=true&w=majority');
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
connect();

const BlogSchema = new mongoose.Schema(
    {
        userId: String,
        title: String,
        tag: String,
        para1: String,
        para2:String,
        imgUrl1: String,
        imgUrl2: String,
        timestamp : Date
    });

const BlogObj = mongoose.model('BlogObj', BlogSchema);

app.get("/", (req, res) => {
    res.send("hello");
});

app.post("/create", (req, res) => {
    console.log(req);
    const blog = {
        userId: req.body.id,
        title: req.body.head,
        tag: req.body.label,
        para1: req.body.body1,
        para2:req.body.body2,
        imgUrl1: req.body.imgUrl1,
        imgUrl2: req.body.imgUrl2,
        timestamp : req.body.timestamp
    }
    console.log(blog);
    const data = new BlogObj(blog);
    data.save()
        .then(() => {
            res.send("Saved successfully");
        })
        .catch((err) => {
            res.send(err);
        });
});


app.listen(5000, function () {
    console.log("Server is running on localhost5000");
});