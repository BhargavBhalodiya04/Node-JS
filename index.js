const fs = require('fs');
const path = require('path');
// fs.writeFileSync("log.txt", "I Am Bhargav");

// Writing A File
// fs.writeFile("log.txt" , "This is Testing Data", (err ,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Data Writtedn Successfully")
//     }
// })

// Reading A file sync
// fs.readFileSync("log.txt" , "utf-8")

// async
// fs.readFile("log.txt" , "utf-8", (err,data) => {
//     if(err) console.log(err)
//         else console.log(data)
// })

// Appending in a file sync 
// fs.appendFileSync("log.txt","\n My Name Is Bhargav Bhalodiya")

// async
// fs.appendFile("log.txt", "\n My Name Is Bhargav Bhalodiya", (err) => {
//     if (err) {
//         console.error("Error writing to file:", err);
//     } else {
//         console.log("Data appended successfully.");
//     }
// });

// Copying a file
// fs.cpSync("log.txt","Copyfile.txt")

// removing a file
// fs.unlinkSync("Copyfile.txt")
// fs.cp("log.txt" , "newAsyncFile.txt",(err, data) =>{
//     if(err) console.log(err)
//         else console.log("Copy Successfull")
// }}


// URL Module

// const myUrl = new URL("https://meet.google.com/vhn-prex-ahy")
// console.log(myUrl)

// // Path Module
// const givenpath = "D:\Riot Games\Riot Client\RiotGamesApi.dll"
// console.log(path.parse(givenpath))

console.log(path.join(__dirname, "/index.js"))