import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose
    .connect(process.env.MONGO_URI,
        {
        dbName:"Volunteering_project",
        }
    )
    .then(()=>{
        console.log("Connected to databse");
    })
    .catch((error)=>{
        console.log("Error connecting to database",error);
    });
}