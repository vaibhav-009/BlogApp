
import mongoose from "mongoose";

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

function create(obj) {
    
    const B_object = new BlogObj({
        userId: obj.id,
        title: obj.head,
        tag: obj.tag,
        para1: obj.body1,
        para2: obj.body2,
        imgUrl1: obj.Url1,
        imgUrl2: obj.Url2,
        timestamp: obj.timestamp
    });

    B_object.save()
        .then(() => {
            console.log("Saved successfully");
        })
        .catch((err) => {
            console.log(err);
        });
}

// const ob = {
//     id: 'iu',
//     title: 'title',
//     tag: 'tag',
//     para1: 'para',
//     para2: 'para',
//     imgUrl1: 'imgUrl',
//     imgUrl2: 'imgurl',
//     timestamp:new Date()
// }

// create(ob);

export default create;