const express = require("express")
const PORT = 3001;
const app = express
const mongoose = require("mongoose")

mongoose.connect("")
.then (() => console.log("DB Conncect"))
.catch ((err) => console.log("Error", err.message))

app.listen(() => {
    console.log
})