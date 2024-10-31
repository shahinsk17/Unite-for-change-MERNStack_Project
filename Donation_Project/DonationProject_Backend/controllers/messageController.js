import { Message } from "../models/message.js";

export const postMessage=async(req,res,next)=>{
    const{name,email,message,phone}=req.body;
    console.log("Request Body:", req.body);

    if(!name || !email || !phone || !message)
    {
       return res.status(400).json({
        success:false,
        message:"please fill  the complete form",
       }) 
    }
    try{
      await  Message.create({ 
        name,email,message,phone
      }) ;
      return res.status(201).json({
        success:true,
        message:"Message Sent Succesfully ",
      })
    }
    catch(error){
   if(error.name ==="ValidationError")
    {
    const ValidationError=Object.values(error.errors).map((err)=>
        err.message
    );
    const errorMessage=ValidationError.join(", ");
    return res.status(400).json({
        success:false,
        message:errorMessage,
    });


   }
   return res.status(500).json({
    success:false,
    message:"Internal Server error",
}); 
    }
}