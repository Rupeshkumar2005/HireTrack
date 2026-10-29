const  User=require("../models/User");
const bcrypt=require("bcryptjs")


// const register=async()=>{
//     try{
//         const {name, email, password, role}=req.body;


//         if(!name || !email || !password){
//             return res.status(400).json({
//                 error:"Name, email and password require"
//             });
//         }

//     }
// }