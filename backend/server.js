import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose"
import cookieParser from "cookie-parser";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connect to mongoDB")
})
.catch((err)=>{
    console.log(err)
})

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())//now it will send output to json
app.use(cookieParser())

app.get("/",(req,res) => {
    res.send("Hello World")
})




//import routes
import authRouters from "./routes/auth.routes.js"

app.use ("/api/auth", authRouters)//url will be localhost3000/api/auth/signup/login/llogout

app.listen(PORT,()=>{
    console.log("Server is running on port"+ PORT)
})


//error handler must be written at the end
app.use((err,req,res,next) => {
    const statusCode = err.StatusCode || 500
    const message = err.message ||  "internal server error"

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})
