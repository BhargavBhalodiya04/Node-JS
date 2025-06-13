// Making server using http modules

const http = require("http");
const fs = require("fs");
const timeString = new Date().toLocaleTimeString();

const port = 8081;
const app = http.createServer((req, res) => {
    // console.log(req.url);   
    // res.end();
    if (req.url == "/") {
        res.write("<h1>Hellow World</h1>");
        fs.appendFileSync("log.txt", `\n ${timeString}  : Homepage`)
        res.end();

    } else if (req.url == "/contanctus") {
        res.write("Prashant Sarviaya - 9316163578");
        fs.appendFileSync("log.txt", `\n ${timeString}  : Contact Us`)
        res.end();

    }else if(req.url == "/favicon.ico") {

    }
    else {
        res.write("404");
        fs.appendFileSync("log.txt", `\n ${timeString}  : ${req.url}`)
        res.end();

    }
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});