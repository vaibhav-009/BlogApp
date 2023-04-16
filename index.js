const mongoose = require('mongoose');
const express = require('express');
const e = require('express');
const path = require('path');
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
        name: String,
        title: String,
        tag: String,
        para1: String,
        para2:String,
        imgUrl1: String,
        imgUrl2: String,
        timestamp : Date
    });

const BlogObj = mongoose.model('BlogObj', BlogSchema);


app.post("/api/create", (req, res) => {
    
    const blog = {
        userId: req.body.id,
        name: req.body.name,
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

app.post("/api/tag", async(req, res) => {
    
    const label = req.body.tag;
    var data;
    
    if (label === "")
        data = await BlogObj.find({});
        
    else
        data = await BlogObj.find({ tag: label });
        
    
    res.send(data);
});

app.post("/api/delete", async (req, res) => {
    
    const ObjectId = mongoose.Types.ObjectId;
    const blog_id = req.body.id;

    BlogObj.deleteOne({ _id:new ObjectId(blog_id)})
        .then(() => {
            res.send("Deleted successfully");
        })
        .catch((err) => {
            res.send(err);
        });
})

app.post("/api/user_blogs", async(req, res) => {
    
    const user_id = req.body.userId;
    const data = await BlogObj.find({ userId: user_id });

    res.send(data);
})

app.use(express.static(path.join(__dirname, "./client/dist")));
app.get("*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "./client/dist/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
}); 

const PORT = 5000 || process.env.PORT;
app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});