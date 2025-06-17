const express = require("express");
const port  = 3001;
const path = require("path")
// const fs = 
const data = require("./data.json");
const { type } = require("os");
const app = express();
const regFilePath = path.join(__dirname, "/login.html")

// app.use(express.urlencoded({extended: true}))

// app.use(express.static(path.join(__dirname, "public")))

app.get("/" , (req, res) => {
    res.send("<h1 style='color:red;'>Welcome to the Homepage</h1>");
} )

// app.get("/api/users" , (req,res) => {
//     res.json(data)
// })

// app.post("/api/users", (req, res) =>{
//     const data = req.body
//     const newData = {id: mockdata.length + 1, ...data}
//     mockdata.push(newData);
//     fs.wrtieFile("MOCK_DATA.json", JSON.stringify(mockdata),)
//     if(err) console.log(err)
//     res.json({success : true, data : req.body})
// })

// app.put("/api/users", (req, res) =>{
//     res.json({success : true, type:"PUT"})
// })

// app.patch("/api/users", (req, res) =>{
//     res.json({success : true, type:"PATCH"})
// })

// app.delete("/api/users", (req, res) =>{
//     res.json({success : true, type:"DELETE"})
// })

// app.get("/api/users/:id" , (req,res) => {
//     // console.log(req.params.id);
//     const userid = parseInt(req.params.id)
//     const showData = data.find((user) => {
//         return user.id == userid
//     })
//     if(!showData){
//         res.send("404")
//     }
//     res.json(showData)
// })

// // Serving a file
// app.get("/login", (req,res) =>{
//     res.sendFile(regFilePath)
// })

app.get("/" , (req, res) => {
    res.send("<h1 style='color:red;'>Welcome to the Homepage</h1>");
} )

app.use((req, res, next) => {
    console.log(req.url)
    next();
})

app.use((req, res, next) => {
    console.log("Second middleware")
    res.send("I got rejection")
})

app.get("/api/users", (req, res) => {
    res.json({success : true, route : "/api/users"})
})

app.listen(port , () => {
    console.log(`http://localhost:${port}`);
    console.log(regFilePath)
})