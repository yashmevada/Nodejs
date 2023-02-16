const mongoose = require("mongoose");
const { stringify } = require("querystring");
mongoose.set('strictQuery', true);
mongoose.set('strictQuery', false);
mongoose
  .connect("mongodb://127.0.0.1:27017/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("database connected");
  })
  .catch(err => {
    console.log("Could not connect", err);
    
  });
 
  const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype:String,
    videos:Number,
    author: String,
    active: Boolean,
   
  })

  const PlayList = new mongoose.model("Playlist",playlistSchema)


const nodeplaylist= new PlayList({
    name:"node js",
    ctype:"back end",
    videos:56,
    author: "yash marvadi",
    active: true
    
})

nodeplaylist.save();