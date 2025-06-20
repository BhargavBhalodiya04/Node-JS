const express = require("express");
const mongoose = require("mongoose")
const port = 3001;
const app = express();

// Database Conncetion
mongoose.connect("mongodb://127.0.0.1:27017/sampleDatabaseFS2")
.then(() => console.log("Database Connection established"))
.catch((err) => console.log(err));


// Schema
const userSchema = new mongoose.Schema(
    {
        id : {type : Number, unique : true , required : true},
        userName : String,
        age : Number
    }
)

// Model
const userModel = mongoose.model("user" , userSchema)

// Routes
app.get("/", (req,res) => {
    res.send("<h1>HOME PAGE</h1>")
})

app.get("/api/users", async (req,res) => {
    const allData = await userModel.find();
    res.json(allData); 
})

app.get("/api/users:id" , (req, res) => {

})

app.post("/api/users", (req,res) => {

})

app.put("/api/users:id" , (req, res) => {

})

app.patch("/api/users:id" , (req, res) => {

})
app.delete("/api/users:id" , (req, res) => {

})

// Server
app.listen(port , () => {
    console.log("Server started at port  : ", port);
})