
import mongoose from "mongoose";
import validator from "validator";
 
// import isEmail from 'validator/lib/isEmail.js';


 const messageSchema=new mongoose.Schema({
    
   name:{
    type:String,
    minLength:[3,"name must contain at least 3 character"],
    maxLength:[30,"name cannot exceed 30 character"],
    required:true,
   },

   email:{
    type:String,
    required:true,
    validator:[validator.isEmail,"Provide a valid email"],
    

   },
   phone:{
    type:String,
    required:true,
    minLength:[10,"phone must contain at least 11 digits"],
    maxLength:[10,"phone cannot exceed 11 digits"],
   },
   message:{
    type:String,
    required:true
   },
    

 });

 export  const Message=mongoose.model("Message",messageSchema); 
//  model create krre hai


 