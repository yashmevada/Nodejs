const mongoose = require("mongoose");
const { stringify } = require("querystring");
mongoose.set('strictQuery', true);
mongoose.set('strictQuery', false);
mongoose
  .connect("mongodb://127.0.0.1:27017/yashmarvadi", {
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

const createdocument = async()=>{
    try
    {
     
        const nodePlaylist = new PlayList({
            name:"node js",
            ctype:"back end",
            videos:56,
            author: "yash marvadi",
            active: true
            
        })
        const reactPlaylist= new PlayList({
            name:"react js",
            ctype:"front  end",
            videos:51,
            author: "yash marvadi",
            active: true
            
        })
         const jsPlaylist= new PlayList({
            name:"js",
            ctype:"front  end",
            videos:58,
            author: "yash marvadi",
            active: true
            
        })
        const pythonPlaylist = new PlayList({
            name:"python",
            ctype:"back end",
            videos:5,
            author: "yash marvadi",
            active: true
            
        })
        const javaPlaylist= new PlayList({
            name:" java",
            ctype:"both",
            videos:56,
            author: "yash marvadi",
            active: true
            
        })
          const result = await PlayList.insertMany([nodePlaylist,reactPlaylist,jsPlaylist,pythonPlaylist ,javaPlaylist]);
          console.log(result)
    }
    catch (err)
    {
        console.log(err)
    }
}


// createdocument()

const getdocument =  async() =>
{
     const result= await PlayList
     .find({ videos:{$nin:50}})
     .select({name:1})
     //.count()
     .sort("name:1")
     //.limit(0)
     console.log(result)

}
//getdocument()

const updatedocument = async (_id)=>{ 
    try {
        const result = await PlayList.findByIdAndUpdate({_id
        },{
            $set :{     name:" Node js" }
        },{
            new : true,
            useFindAndModify:false
        })
        console.log(result)
    }
    catch(err) {
          console.log(err)}}
//updatedocument("63d788c238bfaa546b73b91d") 

const updatedcument = async (_id)=>{ 
    try {
        const reEsult = await PlayList.findByIdAndUpdate({_id
        },{
            $set :{    name:"REACT JS" }
        },{
            // new : true,
            // useFindAndModify:false
        })
        console.log(reEsult)
    }
    catch(err) {
          console.log(err)}}

 //updatedcument("63d78cdad20ba92911aba33c") 



 const deletdocument = async (_id) => {
     const resuult = await PlayList.findByIdAndDelete({_id})
     console.log(resuult)
    }
//deletdocument("63d78cdad20ba92911aba33f")
