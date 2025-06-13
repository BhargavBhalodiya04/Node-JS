const http = require("http");

const app = http.createServer((req, res) => {
    // console.log(req.url)
    // res.write("Welcome To My Server")
    // res.end()
    if (req.url == "/home"){
        res.write("Welcome to home page")
        res.end()
    }else if(req.url == "/about"){
        res.write("Welcomr to About Page")
        res.end()
    }else{
        res.end("404 Page Not Found")
    }

});

app.listen(8081, () => {
    console.log("http://localhost:8081/")
})