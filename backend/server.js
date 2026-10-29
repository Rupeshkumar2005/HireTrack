const express=require("express");
const cors =require("cors");
require("dotenv").config();
const connectDB=require("./src/db/db")


const app=express();
  

app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        message:"welcome to hiretrack backend api"
    })
})

const StartServer= async ()=>{
    try {
        await connectDB();
        const PORT =process.env.PORT || 5000;
          app.listen(PORT,()=>{
        console.log(`Hire track is running on port ${PORT}`);
        });
    }
    catch(error){
         console.error("Failed to start HireTrack:", error.message);
    process.exit(1);
    }
}

StartServer();
     
      


